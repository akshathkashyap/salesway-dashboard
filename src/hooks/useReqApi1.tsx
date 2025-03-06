"use client";

import { useEffect, useState } from "react";

interface Api1Response {
	name: string;
	value: string;
	growth: number;
}

const requestUrl: string =
	"http://3.111.196.92:8020/api/v1/sample_assignment_api_1/";

export default function useReqApi1() {
	const [dataAge, setDataAge] = useState<number>(12);
	const [responseString, setResponseString] = useState<Api1Response[]>([]);

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
			setResponseString([]);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchApi1Response();
	}, [dataAge]);

	return { setDataAge, response: responseString };
}
