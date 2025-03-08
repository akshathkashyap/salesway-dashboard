"use client";

import { useEffect, useState } from "react";

interface Api4Response {
	date: string;
	webSales: number;
	offlineSelling: number;
}

const requestUrl: string = "/dashboard/dashboard_component_4";

function transformResponse(response: any[]): Api4Response[] {
	return response.map((sale) => {
		return {
			date: sale.date,
			webSales: parseInt(sale.web_sales),
			offlineSelling: parseInt(sale.offline_sales),
		};
	});
}

export default function useReqApi4() {
	const [result, setResult] = useState<Api4Response[]>([]);

	async function fetchApi4Response(): Promise<void> {
		try {
			const response = await fetch(requestUrl);
			const responseJson = await response.json();

			setResult(transformResponse(responseJson));
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchApi4Response();
	}, []);

	return { result };
}
