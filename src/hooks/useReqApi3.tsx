"use client";

import { useEffect, useState } from "react";

interface Api3Response {
	points: number;
}

const requestUrl: string = "/dashboard/proxy/sample_assignment_api_3";

export default function useReqApi3() {
	const [result, setResult] = useState<Api3Response>({ points: 0 });

	async function fetchApi3Response(): Promise<void> {
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

			setResult({ points: 78 });
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchApi3Response();
	}, []);

	return { result };
}
