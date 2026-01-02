"use client";

import { useCallback } from "react";

const STORAGE_KEY_PREFIX = "totalfullstack/code/";

interface CodeCache {
	storeCode: (name: string, code: string) => void;
	getCode: (name: string) => string | null;
	resetCode: (name: string) => void;
	resetAllCode: () => void;
}

export function useCodeCache(): CodeCache {
	const storeCode = useCallback((name: string, code: string) => {
		if (typeof window === "undefined") {
			return;
		}

		try {
			const key = `${STORAGE_KEY_PREFIX}${name}`;
			localStorage.setItem(key, code);
		} catch (error) {
			console.error("Failed to store code:", error);
		}
	}, []);

	const getCode = useCallback((name: string): string | null => {
		if (typeof window === "undefined") {
			return null;
		}

		try {
			const key = `${STORAGE_KEY_PREFIX}${name}`;
			return localStorage.getItem(key);
		} catch (error) {
			console.error("Failed to get code:", error);
			return null;
		}
	}, []);

	const resetCode = useCallback((name: string) => {
		if (typeof window === "undefined") {
			return;
		}

		try {
			const key = `${STORAGE_KEY_PREFIX}${name}`;
			localStorage.removeItem(key);
		} catch (error) {
			console.error("Failed to reset code:", error);
		}
	}, []);

	const resetAllCode = useCallback(() => {
		if (typeof window === "undefined") {
			return;
		}

		try {
			const keys = Object.keys(localStorage);
			keys.forEach((key) => {
				if (key.startsWith(STORAGE_KEY_PREFIX)) {
					localStorage.removeItem(key);
				}
			});
		} catch (error) {
			console.error("Failed to reset all code:", error);
		}
	}, []);

	return {
		storeCode,
		getCode,
		resetCode,
		resetAllCode,
	};
}
