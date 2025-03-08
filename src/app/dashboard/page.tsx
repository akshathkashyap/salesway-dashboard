"use client";

import React, { useState } from "react";
import DashboardC1 from "@/components/DashboardC1";
import DashboardC2 from "@/components/DashboardC2";
import DashboardC3 from "@/components/DashboardC3";
import DashboardC4 from "@/components/DashboardC4";
import DashboardC5 from "@/components/DashboardC5";
import DashboardC6 from "@/components/DashboardC6";

function DashboardCard({ children }: { children: React.ReactNode }) {
	return (
		<div className='w-full p-6 bg-white rounded-3xl shadow-md'>
			{children}
		</div>
	);
}

export default function Dashboard() {
	const [compareTo, setCompareTo] = useState<number>(12);

	return (
		<section className='flex flex-col xl:flex-row gap-3 w-full p-3 mb-16 md:mb-auto'>
			<span className='w-full'>
				<DashboardCard>
					<span className='flex flex-row flex-wrap justify-between gap-4 mb-10'>
						<h1 className='font-bold text-4xl'>Dashboard</h1>
						<span className='flex flex-row justify-center items-center'>
							<label
								className='font-semibold'
								htmlFor='compareTo'
							>
								Compare to
							</label>
							<div className='select-container ml-2'>
								<select
									className='block font-semibold px-4 py-2 pr-6'
									name='compareTo'
									id='compareTo'
									value={compareTo}
									onChange={(e) =>
										setCompareTo(parseInt(e.target.value))
									}
								>
									<option value='12'>This year</option>
									<option value='24'>Last Year</option>
								</select>
							</div>
						</span>
					</span>
					<DashboardC1 compareTo={compareTo}></DashboardC1>
					<DashboardC2></DashboardC2>
					<DashboardC6></DashboardC6>
				</DashboardCard>
			</span>
			<span className='flex flex-row xl:flex-col flex-wrap items-start gap-3 w-full md:max-w-sm'>
				<DashboardCard>
					<DashboardC3></DashboardC3>
				</DashboardCard>
				<DashboardCard>
					<DashboardC4></DashboardC4>
				</DashboardCard>
				<DashboardCard>
					<DashboardC5></DashboardC5>
				</DashboardCard>
			</span>
		</section>
	);
}
