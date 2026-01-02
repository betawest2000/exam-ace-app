import { db } from "@repo/database";
import { ExamCompany } from "@repo/database/prisma/generated/enums";
import { z } from "zod";
import { publicProcedure } from "../../../orpc/procedures";

export const listExams = publicProcedure
	.route({
		method: "GET",
		path: "/quiz/exams",
		tags: ["Quiz"],
		summary: "Get exams",
		description: "Get all exams",
	})
	.input(
		z
			.object({
				limit: z.number().min(1).max(200).optional().default(200),
				offset: z.number().min(0).optional().default(0),
				company: z.string().optional(),
				id: z.string().optional(),
			})
			.optional(),
	)
	.handler(async ({ input }) => {
		const { limit = 200, offset = 0, company } = input || {};
		const companyValidated = company?.toLocaleLowerCase();
		// 校验ExamCompany类型
		if (
			companyValidated &&
			!Object.values(ExamCompany).includes(
				companyValidated as ExamCompany,
			)
		) {
			return {
				exams: [],
				total: 0,
			};
		}

		const idFilter = input?.id ? { id: input.id } : {};

		const whereClause = companyValidated
			? { company: companyValidated as ExamCompany }
			: {};

		const [exams, total] = await Promise.all([
			db.exam.findMany({
				where: { ...whereClause, ...idFilter },
				take: limit,
				skip: offset,
				orderBy: {
					createdAt: "desc",
				},
				include: {
					_count: {
						select: {
							questions: true,
						},
					},
				},
			}),
			db.exam.count({
				where: whereClause,
			}),
		]);

		return {
			exams,
			total,
		};
	});
