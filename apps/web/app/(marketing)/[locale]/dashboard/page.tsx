import { getSession } from "@saas/auth/lib/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
	const session = await getSession();

	if (!session) {
		redirect("/auth/login");
	}
	// return (
	// 	<div className="container max-w-4xl pt-32 pb-16">

	// 	</div>
	// );
	redirect("/exams");
}
