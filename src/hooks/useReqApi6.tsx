"use client";

import { useEffect, useState } from "react";

interface Api6Response {
	name: string;
	soldAmount: number;
	unitPrice: number;
	revenue: number;
	rating: number;
}

const requestUrl: string = "/dashboard/dashboard_component_6";

function transformResponse(response: any[]): Api6Response[] {
	return response.map((product) => {
		return {
			name: product.Product,
			soldAmount: parseInt(product.sold_amount),
			unitPrice: parseInt(product.unit_price),
			revenue: parseInt(product.revenue),
			rating: parseInt(product.rating),
		};
	});
}

export default function useReqApi6() {
	const [result, setResult] = useState<Api6Response[]>([]);

	async function fetchApi6Response(): Promise<void> {
		try {
			const response = await fetch(requestUrl);
			const responseJson = await response.json();

			setResult(transformResponse(responseJson));
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchApi6Response();
	}, []);

	return { result };
}
