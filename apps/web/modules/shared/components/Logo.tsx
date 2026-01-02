import { cn } from "@ui/lib";

export function Logo({
	withLabel = true,
	className,
}: {
	className?: string;
	withLabel?: boolean;
}) {
	return (
		<span
			className={cn(
				"flex items-center font-semibold text-foreground leading-none",
				className,
			)}
		>
			<svg
				className="size-6 text-foreground"
				viewBox="0 0 376.000000 376.000000"
			>
				<title>ExamAce</title>
				<g
					transform="translate(0.000000,376.000000) scale(0.100000,-0.100000)"
					fill="currentColor"
					stroke="none"
				>
					<path d="M37 3703 c-11 -10 -8 -3661 3 -3668 4 -3 498 -5 1097 -5 l1088 -1 5 743 5 743 368 3 367 2 0 360 0 360 -730 -2 -731 -3 1 -737 c0 -590 -2 -738 -12 -738 -7 -1 -168 -1 -358 0 -190 0 -351 0 -357 0 -10 0 -13 228 -13 1105 l0 1105 370 0 370 0 -2 368 -3 367 -731 3 c-402 1 -734 -1 -737 -5z" />
					<path d="M2225 3697 c-3 -6 -4 -172 -3 -367 l3 -355 372 -3 373 -2 2 -363 3 -362 373 -3 372 -2 0 735 0 735 -745 0 c-589 0 -747 -3 -750 -13z" />
					<path d="M2968 1348 l-3 -163 -212 -3 -213 -2 0 -210 0 -210 215 0 215 0 2 -363 3 -362 356 -5 c196 -3 363 -4 372 -2 16 3 17 61 17 743 l0 739 -375 0 -375 0 -2 -162z" />
				</g>
			</svg>
			{withLabel && (
				<span className="ml-3 hidden text-lg md:block">ExamAce</span>
			)}
		</span>
	);
}
