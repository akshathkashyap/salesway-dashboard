"use client";

import { useEffect, useState } from "react";

interface Api1Response {
	name: string;
	value: string;
	growth: number;
}

const requestUrl: string = "/dashboard/proxy/sample_assignment_api_1";

export default function useReqApi1() {
	const [dataAge, setDataAge] = useState<number>(12);
	const [result, setResult] = useState<Api1Response[]>([]);

	async function fetchApi1Response(): Promise<void> {
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

			setResult([
				{
					name: "Purchases",
					value: "4,294",
					growth: 32,
				},
				{
					name: "Revenue",
					value: "$322.3k",
					growth: 49,
				},
				{
					name: "Refunds",
					value: "$8.2k",
					growth: -7,
				},
			]);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchApi1Response();
	}, [dataAge]);

	return { setDataAge, result };
}
