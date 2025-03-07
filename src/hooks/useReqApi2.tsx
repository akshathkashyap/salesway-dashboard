"use client";

import { useEffect, useState } from "react";

const requestUrl: string = `${process.env.NEXT_PUBLIC_URL}/dashboard/dashboard_component_2`;

export default function useReqApi2() {
	const [months, setMonths] = useState<number>(6);
	const [result, setResult] = useState<any[]>([]);

	async function fetchApi2Response(): Promise<void> {
		try {
			const response = await fetch(requestUrl);
			const responseJson = await response.json();

            const responseTrimmed = responseJson.slice(responseJson.length - months);

			setResult(responseTrimmed);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchApi2Response();
	}, [months]);

	return { setMonths, result };
}
