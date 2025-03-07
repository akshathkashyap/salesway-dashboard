"use client";

import React, { useEffect } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import useReqApi1 from "@/hooks/useReqApi1";

interface DashboardC1CardProps {
	name: string;
	value: string;
	growth: number;
}

interface DashboardC1Props {
	compareTo: number;
}

function DashboardC1Card({ name, value, growth }: DashboardC1CardProps) {
	return (
		<div className='flex flex-col items-start w-full max-w-[14rem] mb-6 p-3 rounded-2xl outline-2 outline-gray-200'>
			<span className='font-semibold text-gray-500 width-full mb-3'>
				{name}
			</span>
			<span className='flex flex-row justify-center items-center width-full'>
				<span className='font-bold text-2xl color-black mr-2'>
					{value}
				</span>
				{growth < 0 ? (
					<span className='block px-2 bg-red-100 rounded-4xl outline-2 outline-red-300'>
						<span className='font-bold text-sm text-red-800'>
							{growth}%
						</span>
						<TrendingUpIcon
							className='rotate-z-[70deg]'
							color={"error"}
						></TrendingUpIcon>
					</span>
				) : (
					<span className='block px-2 bg-green-100 rounded-4xl outline-2 outline-green-300'>
						<span className='font-bold text-sm text-green-800'>
							{`+${growth}`}%
						</span>
						<TrendingUpIcon color={"success"}></TrendingUpIcon>
					</span>
				)}
			</span>
		</div>
	);
}

export default function DashboardC1({ compareTo }: DashboardC1Props) {
	const { setDataAge, result } = useReqApi1();

	useEffect(() => {
		setDataAge(compareTo);
	}, []);

	return (
		<span className='flex flex-wrap justify-between items-center gap-6 w-full my-6'>
			{result.map((dashboardC1Obj: DashboardC1CardProps) => (
				<React.Fragment key={dashboardC1Obj.name}>
					<DashboardC1Card
						name={dashboardC1Obj.name}
						value={dashboardC1Obj.value}
						growth={dashboardC1Obj.growth}
					></DashboardC1Card>
				</React.Fragment>
			))}
		</span>
	);
}
