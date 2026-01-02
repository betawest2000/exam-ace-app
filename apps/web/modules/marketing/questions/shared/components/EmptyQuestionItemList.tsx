import { Ghost } from "lucide-react";
import { useTranslations } from "next-intl";

export function EmptyQuestionItemList() {
	const t = useTranslations("common.practiceMenu");

	return (
		<div className="flex flex-col gap-4">
			<div className="border p-10 border-border">
				<div className="mx-auto max-w-md text-center py-6 sm:py-12">
					<Ghost className="size-10 mx-auto shrink-0 text-muted-foreground" />
					<h3 className="text-pretty text-foreground font-semibold mt-4 block">
						{t("emptyState.title")}
					</h3>
					<span className="text-muted-foreground text-body2 text-pretty mt-1 block">
						{t("emptyState.description")}
					</span>
				</div>
			</div>
		</div>
	);
}
