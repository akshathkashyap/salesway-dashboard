"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import useReqApi4 from "@/hooks/useReqApi4";

ChartJS.register(
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	Title,
	Tooltip,
	Legend
);

export default function DashboardC4() {
	const { result } = useReqApi4();

	const lineData = useMemo(() => {
		return {
			labels: result.map((sale) => sale.date),
			datasets: [
				{
					label: "Web sales",
					data: result.map((sale) => `${sale.webSales}`),
					borderColor: "#96f7e4",
					backgroundColor: "#96f7e4",
					tension: 0.4,
					pointRadius: 0,
					pointHoverRadius: 6,
				},
				{
					label: "Offline selling",
					data: result.map((sale) => `${sale.offlineSelling}`),
					borderColor: "#155dfc",
					backgroundColor: "#155dfc",
					tension: 0.4,
					pointRadius: 0,
					pointHoverRadius: 6,
				},
			],
		};
	}, [result]);
	const webSalesGrowth: number = useMemo(() => {
		if (!result.length) return 0;
		const initialValue: number = result[0].webSales;
		const currentValue: number = result[result.length - 1].webSales;
		return Math.floor(((currentValue - initialValue) / initialValue) * 100);
	}, [result]);
	const offlineSellingGrowth: number = useMemo(() => {
		if (!result.length) return 0;
		const initialValue: number = result[0].offlineSelling;
		const currentValue: number = result[result.length - 1].offlineSelling;
		return Math.floor(((currentValue - initialValue) / initialValue) * 100);
	}, [result]);

	const lineOptions = {
		responsive: true,
		plugins: {
			legend: {
				display: true,
				position: "bottom" as const,
			},
			tooltip: {
				enabled: true,
			},
		},
		scales: {
			x: {
				ticks: {
					display: false,
				},
				grid: {
					display: false,
				},
			},
		},
	};

	return (
		<span>
			<h3 className='font-bold text-xl mb-4'>Customers by device</h3>
			<Line data={lineData} options={lineOptions} />
		</span>
	);
}
