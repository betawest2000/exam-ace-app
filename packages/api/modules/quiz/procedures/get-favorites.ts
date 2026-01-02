import { db } from "@repo/database";
import { z } from "zod";
import { protectedProcedure } from "../../../orpc/procedures";

export const getFavorites = protectedProcedure
	.route({
		method: "GET",
		path: "/quiz/favorites/questions",
		tags: ["Quiz"],
		summary: "Get favorites",
		description: "Get all favorite questions for current user",
	})
	.input(
		z
			.object({
				examId: z.string(),
				limit: z.number().min(1).max(100).optional().default(10),
				offset: z.number().min(0).optional().default(0),
			})
			.optional(),
	)
	.handler(async ({ input, context }) => {
		const examId = input?.examId;
		if (!examId) {
			return { examId, total: 0, updatedAt: null };
		}

		const result = await db.userFavorite.findMany({
			where: { userId: context.user.id, examId },
		});

		return {
			examId,
			favorites: result.map((item) => item.questionId),
		};
	});

export const countFavorites = protectedProcedure
	.route({
		method: "GET",
		path: "/quiz/favorites/questions/count",
		tags: ["Quiz"],
		summary: "Get favorites",
		description: "Get all favorite questions for current user",
	})
	.input(
		z
			.object({
				examId: z.string(),
				limit: z.number().min(1).max(100).optional().default(10),
				offset: z.number().min(0).optional().default(0),
			})
			.optional(),
	)
	.handler(async ({ input, context }) => {
		const examId = input?.examId;
		if (!examId) {
			return { examId, total: 0, updatedAt: null };
		}

		const result = await db.userFavorite.aggregate({
			where: { userId: context.user.id, examId: input?.examId },
			_count: { id: true },
			_max: { createdAt: true },
		});

		return {
			examId,
			total: result._count.id,
			updatedAt: result._max.createdAt,
		};
	});
