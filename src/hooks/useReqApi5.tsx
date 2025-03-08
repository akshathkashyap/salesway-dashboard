"use client";

import { useEffect, useState } from "react";

interface Api5Response {
	negative: number;
	neutral: number;
	positive: number;
}

const requestUrl: string = "/dashboard/proxy/sample_assignment_api_5";

export default function useReqApi5() {
	const [result, setResult] = useState<Api5Response>({
		negative: 1,
		neutral: 1,
		positive: 1,
	});

	async function fetchApi5Response(): Promise<void> {
		try {
			const response = await fetch(requestUrl, {
				method: "GET",
				headers: {
					Authorization:
						"Basic " +
						btoa(
							`${process.env.API_USERNAME}:${process.env.API_PASSWORD}`
						),
				},
			});
			const responseJson = await response.json();

			setResult({
				negative: 12,
				neutral: 34,
				positive: 134,
			});
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchApi5Response();
	}, []);

	return { result };
}
