import { db as prisma } from "./client";
import { EXAMS } from "./exams";

async function main() {
	console.log("Starting seed...");

	// 清空现有的 Exam 数据
	await prisma.exam.deleteMany();

	// 创建 Exam 初始数据
	const exams = await prisma.exam.createMany({
		data: EXAMS.data as any,
	});

	console.log(`Created ${exams.count} exams`);
	console.log("Seed completed successfully!");
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
