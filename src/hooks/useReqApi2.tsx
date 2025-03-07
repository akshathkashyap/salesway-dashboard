"use client";

import { useEffect, useState } from "react";

interface Api2Response {
	name: string;
	lastYear: string;
	thisYear: number;
}

const requestUrl: string = `${process.env.NEXT_PUBLIC_URL}/dashboard/dashboard_component_2`;

function transformResponse(response: any[]): Api2Response[] {
	return response.map((month) => {
		return {
			name: month.Month,
			lastYear: month.Last_year,
			thisYear: month.This_year,
		};
	});
}

export default function useReqApi2() {
	const [months, setMonths] = useState<number>(6);
	const [result, setResult] = useState<Api2Response[]>([]);

	async function fetchApi2Response(): Promise<void> {
		try {
			const response = await fetch(requestUrl);
			const responseJson = await response.json();

			const responseTrimmed = responseJson.slice(
				responseJson.length - months
			);

			setResult(transformResponse(responseTrimmed));
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchApi2Response();
	}, [months]);

	return { setMonths, result };
}
