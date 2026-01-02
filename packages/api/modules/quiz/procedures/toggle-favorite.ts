import { db } from "@repo/database";
import { z } from "zod";
import { protectedProcedure } from "../../../orpc/procedures";

export const toggleFavorite = protectedProcedure
	.route({
		method: "POST",
		path: "/quiz/favorites/toggle",
		tags: ["Quiz"],
		summary: "Toggle favorite",
		description: "Add or remove a question from favorites",
	})
	.input(
		z.object({
			examId: z.string(),
			questionId: z.string(),
		}),
	)
	.handler(async ({ input, context }) => {
		const existing = await db.userFavorite.findUnique({
			where: {
				userId_questionId: {
					userId: context.user.id,
					questionId: input.questionId,
				},
			},
		});

		if (existing) {
			await db.userFavorite.delete({
				where: { id: existing.id },
			});
			return { favorite: false };
		}

		await db.userFavorite.create({
			data: {
				userId: context.user.id,
				examId: input.examId,
				questionId: input.questionId,
			},
		});

		return { favorite: true };
	});
