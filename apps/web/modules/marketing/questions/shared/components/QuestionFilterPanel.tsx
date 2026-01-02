"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@ui/components/accordion";
import { Label } from "@ui/components/label";
import { Info } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";

export interface QuestionFilters {
	topics: string[];
	companies: string[];
	difficulties: string[];
	importance: string[];
	progress: string[];
	languages: string[];
	frameworks: string[];
}

export interface QuestionFilterPanelProps {
	onFilterChanged?: (filters: QuestionFilters) => void;
}

export function QuestionFilterPanel({
	onFilterChanged,
}: QuestionFilterPanelProps) {
	const t = useTranslations("common.practiceMenu.filters");

	const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
	const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
	const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>(
		[],
	);
	const [selectedImportance, setSelectedImportance] = useState<string[]>([]);
	const [selectedProgress, setSelectedProgress] = useState<string[]>([]);
	const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
	const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);

	const notifyFilterChange = useCallback(
		(updates: Partial<QuestionFilters>) => {
			const filters: QuestionFilters = {
				topics: updates.topics ?? selectedTopics,
				companies: updates.companies ?? selectedCompanies,
				difficulties: updates.difficulties ?? selectedDifficulties,
				importance: updates.importance ?? selectedImportance,
				progress: updates.progress ?? selectedProgress,
				languages: updates.languages ?? selectedLanguages,
				frameworks: updates.frameworks ?? selectedFrameworks,
			};
			onFilterChanged?.(filters);
		},
		[
			selectedTopics,
			selectedCompanies,
			selectedDifficulties,
			selectedImportance,
			selectedProgress,
			selectedLanguages,
			selectedFrameworks,
			onFilterChanged,
		],
	);

	const handleTopicChange = useCallback(
		(topic: string) => {
			const newTopics = selectedTopics.includes(topic)
				? selectedTopics.filter((t) => t !== topic)
				: [...selectedTopics, topic];
			setSelectedTopics(newTopics);
			notifyFilterChange({ topics: newTopics });
		},
		[selectedTopics, notifyFilterChange],
	);

	const handleCompanyChange = useCallback(
		(company: string) => {
			const newCompanies = selectedCompanies.includes(company)
				? selectedCompanies.filter((c) => c !== company)
				: [...selectedCompanies, company];
			setSelectedCompanies(newCompanies);
			notifyFilterChange({ companies: newCompanies });
		},
		[selectedCompanies, notifyFilterChange],
	);

	const handleDifficultyChange = useCallback(
		(difficulty: string) => {
			const newDifficulties = selectedDifficulties.includes(difficulty)
				? selectedDifficulties.filter((d) => d !== difficulty)
				: [...selectedDifficulties, difficulty];
			setSelectedDifficulties(newDifficulties);
			notifyFilterChange({ difficulties: newDifficulties });
		},
		[selectedDifficulties, notifyFilterChange],
	);

	const handleImportanceChange = useCallback(
		(importance: string) => {
			const newImportance = selectedImportance.includes(importance)
				? selectedImportance.filter((i) => i !== importance)
				: [...selectedImportance, importance];
			setSelectedImportance(newImportance);
			notifyFilterChange({ importance: newImportance });
		},
		[selectedImportance, notifyFilterChange],
	);

	const handleProgressChange = useCallback(
		(progress: string) => {
			const newProgress = selectedProgress.includes(progress)
				? selectedProgress.filter((p) => p !== progress)
				: [...selectedProgress, progress];
			setSelectedProgress(newProgress);
			notifyFilterChange({ progress: newProgress });
		},
		[selectedProgress, notifyFilterChange],
	);

	const handleLanguageChange = useCallback(
		(language: string) => {
			const newLanguages = selectedLanguages.includes(language)
				? selectedLanguages.filter((l) => l !== language)
				: [...selectedLanguages, language];
			setSelectedLanguages(newLanguages);
			notifyFilterChange({ languages: newLanguages });
		},
		[selectedLanguages, notifyFilterChange],
	);

	const handleFrameworkChange = useCallback(
		(framework: string) => {
			const newFrameworks = selectedFrameworks.includes(framework)
				? selectedFrameworks.filter((f) => f !== framework)
				: [...selectedFrameworks, framework];
			setSelectedFrameworks(newFrameworks);
			notifyFilterChange({ frameworks: newFrameworks });
		},
		[selectedFrameworks, notifyFilterChange],
	);

	const topics = [
		"oop",
		"accessibility",
		"reactHooks",
		"networking",
		"array",
		"async",
		"breadthFirstSearch",
		"binary",
		"binarySearch",
		"binarySearchTree",
		"binaryTree",
		"closure",
		"depthFirstSearch",
		"dynamicProgramming",
		"graph",
		"greedy",
		"heap",
		"intervals",
		"linkedList",
		"matrix",
		"queue",
		"recursion",
		"sorting",
		"stack",
		"string",
		"tree",
		"twoPointers",
	];

	const companies = [
		"amazon",
		"google",
		"meta",
		"microsoft",
		"apple",
		"netflix",
		"uber",
		"airbnb",
		"linkedin",
		"twitter",
		"adobe",
		"salesforce",
		"oracle",
		"ibm",
	];

	const difficulties = ["easy", "medium", "hard"];
	const importanceLevels = ["low", "medium", "high"];
	const progressOptions = ["completed", "notCompleted"];
	const languages = ["html", "css", "javascript"];
	const frameworks = ["react", "vanillaJs", "angular", "svelte", "vue"];

	return (
		<div className="hidden min-[1200px]:block sticky top-4 pl-5 h-[calc(100vh-2rem)] overflow-hidden">
			<div className="overflow-y-auto h-full flex flex-col divide-y divide-border rounded-lg bg-card">
				<div className="p-4">
					<h2 className="text-pretty text-foreground font-semibold sr-only">
						{t("title")}
					</h2>
					<form>
						<Accordion
							type="multiple"
							defaultValue={[
								"topics",
								"company",
								"importance",
								"progress",
								"framework",
							]}
							className="w-full divide-y divide-border border-b border-border"
						>
							{/* Topics */}
							<AccordionItem value="topics">
								<AccordionTrigger className="flex flex-1 items-center justify-between gap-1 w-full py-5 group text-left font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring text-muted-foreground pt-6">
									<span className="text-foreground text-sm font-medium flex items-center gap-2">
										{t("sections.topics")}
									</span>
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground text-sm pb-6">
									<div className="flex flex-wrap gap-x-8 gap-y-4">
										{topics.map((topic) => (
											<div
												key={topic}
												className="flex items-center gap-2"
											>
												<div className="relative flex">
													<div className="flex h-5 items-center">
														<input
															type="checkbox"
															id={`topic-${topic}`}
															className="size-4 rounded cursor-pointer"
															checked={selectedTopics.includes(
																topic,
															)}
															onChange={() =>
																handleTopicChange(
																	topic,
																)
															}
														/>
													</div>
													<div className="grid gap-1 ml-3">
														<Label
															htmlFor={`topic-${topic}`}
															className="text-muted-foreground text-sm block cursor-pointer"
														>
															{t(
																`topics.${topic}`,
															)}
														</Label>
													</div>
												</div>
											</div>
										))}
									</div>
								</AccordionContent>
							</AccordionItem>

							{/* Company */}
							<AccordionItem value="company">
								<AccordionTrigger className="flex flex-1 items-center justify-between gap-1 w-full py-5 group text-left font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring text-muted-foreground pt-6">
									<span className="text-foreground text-sm font-medium flex items-center gap-2">
										{t("sections.company")}
									</span>
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground text-sm pb-6">
									<div className="flex flex-wrap gap-x-8 gap-y-4">
										{companies.map((company) => (
											<div
												key={company}
												className="flex items-center gap-2"
											>
												<div className="relative flex">
													<div className="flex h-5 items-center">
														<input
															type="checkbox"
															id={`company-${company}`}
															className="size-4 rounded cursor-pointer"
															checked={selectedCompanies.includes(
																company,
															)}
															onChange={() =>
																handleCompanyChange(
																	company,
																)
															}
														/>
													</div>
													<div className="grid gap-1 ml-3">
														<Label
															htmlFor={`company-${company}`}
															className="text-muted-foreground text-sm block cursor-pointer"
														>
															{t(
																`companies.${company}`,
															)}
														</Label>
													</div>
												</div>
											</div>
										))}
									</div>
								</AccordionContent>
							</AccordionItem>

							{/* Difficulty */}
							<AccordionItem value="difficulty">
								<AccordionTrigger className="flex flex-1 items-center justify-between gap-1 w-full py-5 group text-left font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring text-muted-foreground pt-6">
									<span className="text-foreground text-sm font-medium flex items-center gap-2">
										{t("sections.difficulty")}
									</span>
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground text-sm pb-6">
									<div className="flex flex-wrap gap-x-8 gap-y-4">
										{difficulties.map((difficulty) => (
											<div
												key={difficulty}
												className="flex items-center gap-2"
											>
												<div className="relative flex">
													<div className="flex h-5 items-center">
														<input
															type="checkbox"
															id={`difficulty-${difficulty}`}
															className="size-4 rounded cursor-pointer"
															checked={selectedDifficulties.includes(
																difficulty,
															)}
															onChange={() =>
																handleDifficultyChange(
																	difficulty,
																)
															}
														/>
													</div>
													<div className="grid gap-1 ml-3">
														<Label
															htmlFor={`difficulty-${difficulty}`}
															className="text-muted-foreground text-sm block cursor-pointer"
														>
															{t(
																`difficulty.${difficulty}`,
															)}
														</Label>
													</div>
												</div>
											</div>
										))}
									</div>
								</AccordionContent>
							</AccordionItem>

							{/* Importance */}
							<AccordionItem value="importance">
								<AccordionTrigger className="flex flex-1 items-center justify-between gap-1 w-full py-5 group text-left font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring text-muted-foreground pt-6">
									<span className="text-foreground text-sm font-medium flex items-center gap-2">
										{t("sections.importance")}
									</span>
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground text-sm pb-6">
									<div className="flex flex-wrap gap-x-8 gap-y-4">
										{importanceLevels.map((level) => (
											<div
												key={level}
												className="flex items-center gap-2"
											>
												<div className="relative flex">
													<div className="flex h-5 items-center">
														<input
															type="checkbox"
															id={`importance-${level}`}
															className="size-4 rounded cursor-pointer"
															checked={selectedImportance.includes(
																level,
															)}
															onChange={() =>
																handleImportanceChange(
																	level,
																)
															}
														/>
													</div>
													<div className="grid gap-1 ml-3">
														<Label
															htmlFor={`importance-${level}`}
															className="text-muted-foreground text-sm block cursor-pointer"
														>
															{t(
																`importance.${level}`,
															)}
														</Label>
													</div>
												</div>
											</div>
										))}
									</div>
								</AccordionContent>
							</AccordionItem>

							{/* Progress */}
							<AccordionItem value="progress">
								<AccordionTrigger className="flex flex-1 items-center justify-between gap-1 w-full py-5 group text-left font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring text-muted-foreground pt-6">
									<span className="text-foreground text-sm font-medium flex items-center gap-2">
										{t("sections.progress")}
									</span>
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground text-sm pb-6">
									<div className="flex flex-wrap gap-x-8 gap-y-4">
										{progressOptions.map((option) => (
											<div
												key={option}
												className="flex items-center gap-2"
											>
												<div className="relative flex">
													<div className="flex h-5 items-center">
														<input
															type="checkbox"
															id={`progress-${option}`}
															className="size-4 rounded cursor-pointer"
															checked={selectedProgress.includes(
																option,
															)}
															onChange={() =>
																handleProgressChange(
																	option,
																)
															}
														/>
													</div>
													<div className="grid gap-1 ml-3">
														<Label
															htmlFor={`progress-${option}`}
															className="text-muted-foreground text-sm block cursor-pointer"
														>
															{t(
																`progress.${option}`,
															)}
														</Label>
													</div>
												</div>
											</div>
										))}
									</div>
								</AccordionContent>
							</AccordionItem>

							{/* Framework / Language */}
							<AccordionItem value="framework">
								<AccordionTrigger className="flex flex-1 items-center justify-between gap-1 w-full py-5 group text-left font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring text-muted-foreground">
									<span className="text-foreground text-sm font-medium flex items-center gap-2">
										{t("sections.frameworkLanguage")}
										<Info className="size-4 shrink-0 text-muted-foreground" />
									</span>
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground text-sm">
									<div className="flex flex-col gap-y-5">
										<div className="flex flex-col gap-y-3">
											<span className="text-foreground text-sm block">
												{t("sections.language")}
											</span>
											<div className="flex flex-wrap gap-x-8 gap-y-4">
												{languages.map((language) => (
													<div
														key={language}
														className="flex items-center gap-2"
													>
														<div className="relative flex">
															<div className="flex h-5 items-center">
																<input
																	type="checkbox"
																	id={`language-${language}`}
																	className="size-4 rounded cursor-pointer"
																	checked={selectedLanguages.includes(
																		language,
																	)}
																	onChange={() =>
																		handleLanguageChange(
																			language,
																		)
																	}
																/>
															</div>
															<div className="grid gap-1 ml-3">
																<Label
																	htmlFor={`language-${language}`}
																	className="text-muted-foreground text-sm block cursor-pointer"
																>
																	{t(
																		`languages.${language}`,
																	)}
																</Label>
															</div>
														</div>
													</div>
												))}
											</div>
										</div>
										<div className="h-px w-full bg-border" />
										<div className="flex flex-col gap-y-3">
											<span className="text-foreground text-sm block">
												{t("sections.framework")}
											</span>
											<div className="flex flex-wrap gap-x-8 gap-y-4">
												{frameworks.map((framework) => (
													<div
														key={framework}
														className="flex items-center gap-2"
													>
														<div className="relative flex">
															<div className="flex h-5 items-center">
																<input
																	type="checkbox"
																	id={`framework-${framework}`}
																	className="size-4 rounded cursor-pointer"
																	checked={selectedFrameworks.includes(
																		framework,
																	)}
																	onChange={() =>
																		handleFrameworkChange(
																			framework,
																		)
																	}
																/>
															</div>
															<div className="grid gap-1 ml-3">
																<Label
																	htmlFor={`framework-${framework}`}
																	className="text-muted-foreground text-sm block cursor-pointer"
																>
																	{t(
																		`frameworks.${framework}`,
																	)}
																</Label>
															</div>
														</div>
													</div>
												))}
											</div>
										</div>
									</div>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</form>
				</div>
			</div>
		</div>
	);
}
