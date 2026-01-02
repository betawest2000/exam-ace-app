import { ORPCError } from "@orpc/client";
import { db, getPurchasesByUserId } from "@repo/database";
import { createPurchasesHelper } from "@repo/payments/lib/helper";
import { z } from "zod";
import { protectedProcedure } from "../../../orpc/procedures";

export const getExam = protectedProcedure
	.route({
		method: "GET",
		path: "/quiz/exams/:id",
		tags: ["Quiz"],
		summary: "Get exam by ID",
		description: "Get a specific exam with all its questions",
	})
	.input(
		z.object({
			id: z.string(),
		}),
	)
	.handler(async ({ input }) => {
		const exam = await db.exam.findUnique({
			where: { id: input.id },
			include: {
				_count: {
					select: {
						questions: true,
					},
				},
			},
		});

		if (!exam) {
			throw new ORPCError("NOT_FOUND");
		}

		return exam;
	});

export const getExamQuestions = protectedProcedure
	.route({
		method: "GET",
		path: "/quiz/exams/:id/questions",
		tags: ["Quiz"],
		summary: "Get questions of an exam by ID",
		description: "Get a specific exam with all its questions",
	})
	.input(
		z.object({
			id: z.string(),
			userFavorite: z.boolean().optional(),
			limit: z.number().min(1).max(100).optional().default(50),
			offset: z.number().min(0).optional().default(0),
		}),
	)
	.handler(async ({ input, context }) => {
		const purchases = await getPurchasesByUserId(context.user.id);
		const { hasPurchase } = createPurchasesHelper(purchases);

		if (!hasPurchase("pro")) {
			throw new ORPCError(
				"FORBIDDEN",
				"You do not have access to this exam",
			);
		}

		const { limit = 50, offset = 0 } = input;

		const whereClause: any = { examId: input.id };

		// 如果只查询用户收藏的问题
		if (input.userFavorite) {
			whereClause.userFavorites = {
				some: {
					userId: context.user.id,
				},
			};
		}

		const [questions, total] = await Promise.all([
			db.question.findMany({
				where: whereClause,
				take: limit,
				skip: offset,
				orderBy: {
					createdAt: "asc",
				},
				include: {
					userFavorites: {
						where: {
							userId: context.user.id,
							examId: input.id,
						},
						select: {
							id: true,
						},
					},
				},
			}),
			db.question.count({
				where: whereClause,
			}),
		]);

		return { questions, total };
	});
