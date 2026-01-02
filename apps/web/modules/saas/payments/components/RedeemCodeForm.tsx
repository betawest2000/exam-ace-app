"use client";

import { orpc } from "@shared/lib/orpc-query-utils";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@ui/components/button";
import { Input } from "@ui/components/input";
import { Label } from "@ui/components/label";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { toast } from "sonner";

interface RedeemCodeFormProps {
	redirectUrl?: string;
	organizationId?: string;
	productId?: string;
}

export function RedeemCodeForm({
	redirectUrl,
	organizationId,
	productId,
}: RedeemCodeFormProps) {
	const t = useTranslations("payments.redeemCode");
	const router = useRouter();
	const [code, setCode] = useState("");

	const { mutate: redeemCode, isPending: isLoading } = useMutation(
		orpc.payments.redeemCode.mutationOptions(),
	);

	const handleRedeem = (e: React.FormEvent) => {
		e.preventDefault();

		if (!code || code.trim().length === 0) {
			toast.error(t("errors.invalidFormat"));
			return;
		}

		redeemCode(
			{
				code: code.trim(),
				organizationId,
			},
			{
				onSuccess: (result) => {
					toast.success(result.message || t("success"));

					// Redirect after successful redemption
					if (redirectUrl) {
						router.push(redirectUrl);
					} else {
						router.push("/app");
					}
				},
				onError: (error) => {
					// Extract error message from ORPC error
					let errorMessage = t("errors.failed");
					
					if (error && typeof error === "object") {
						// ORPC errors have a message property
						if ("message" in error && typeof error.message === "string") {
							errorMessage = error.message;
						}
						// Fallback to error string representation
						else if (error instanceof Error) {
							errorMessage = error.message;
						}
					}
					
					toast.error(errorMessage);
				},
			},
		);
	};

	return (
		<form onSubmit={handleRedeem} className="space-y-6">
			<div className="space-y-4 rounded-lg border p-6">
				<div className="space-y-2">
					<Label htmlFor="code">{t("codeLabel")}</Label>
					<Input
						id="code"
						type="text"
						value={code}
						onChange={(e) => setCode(e.target.value)}
						placeholder=""
						maxLength={32}
						className="font-mono text-sm tracking-wider"
						disabled={isLoading}
					/>
					<p className="text-sm text-muted-foreground">
						{t("codeHint")}
					</p>
				</div>
			</div>

			<Button
				type="submit"
				className="w-full"
				disabled={isLoading || !code}
			>
				{isLoading ? t("redeeming") : t("redeem")}
			</Button>

			{productId && (
				<p className="text-center text-sm text-muted-foreground">
					{t("productInfo", { productId })}
				</p>
			)}
		</form>
	);
}
