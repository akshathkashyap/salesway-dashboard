"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	BarElement,
	CategoryScale,
	LinearScale,
	Tooltip,
	Legend,
} from "chart.js";
import useReqApi2 from "@/hooks/useReqApi2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function DashboardC2() {
	const [displayMonths, setDisplayMonths] = useState<number>(6);
	const { setMonths, result } = useReqApi2();

	const barData = useMemo(() => {
		const labels: string[] = result.map((month) => month.name);
		const datasets = [
			{
				label: "Last year",
				data: result.map((month) => `${month.lastYear}`),
				borderColor: "#96f7e4",
				backgroundColor: "#96f7e4",
				borderWidth: 2,
				borderRadius: 4,
				borderSkipped: false,
			},
			{
				label: "This year",
				data: result.map((month) => `${month.thisYear}`),
				borderColor: "#155dfc",
				backgroundColor: "#155dfc",
				borderWidth: 2,
				borderRadius: 4,
				borderSkipped: false,
			},
		];
		return {
			labels,
			datasets,
		};
	}, [result]);

	const barOptions = {
		responsive: true,
		plugins: {
			legend: { display: true, position: "bottom" as const },
		},
	};

	useEffect(() => {
		setMonths(displayMonths);
	}, [displayMonths]);

	return (
		<span className='w-full my-6'>
			<span className='flex flex-row flex-wrap justify-between items-center gap-4 w-full'>
				<h1 className='font-bold text-xl'>Comparison</h1>
				<label htmlFor='months'></label>
				<div className='select-container ml-2'>
					<select
						className='block font-semibold px-4 py-2 pr-6'
						name='compareTo'
						id='compareTo'
						value={displayMonths}
						onChange={(e) =>
							setDisplayMonths(parseInt(e.target.value))
						}
					>
						<option value='6'>6 months</option>
						<option value='5'>5 months</option>
						<option value='4'>4 months</option>
						<option value='3'>3 months</option>
						<option value='2'>2 months</option>
						<option value='1'>1 month</option>
					</select>
				</div>
			</span>
			<Bar className='mt-6' data={barData} options={barOptions}></Bar>
		</span>
	);
}
