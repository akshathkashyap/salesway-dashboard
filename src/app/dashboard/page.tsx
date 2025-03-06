"use client";

import React, { useState } from "react";
import DashboardC1 from "@/components/DashboardC1";

function DashboardCard({ children }: { children: React.ReactNode }) {
	return <div className='p-6 bg-white rounded-3xl shadow-md'>{children}</div>;
}

export default function Dashboard() {
	const [compareTo, setCompareTo] = useState<number>(12);

	return (
		<section className='flex flex-col md:flex-row gap-3 w-full p-3'>
			<span className='flex flex-col gap-3 w-full'>
				<DashboardCard>
					<span className='flex flex-row justify-between'>
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
									className='block font-semibold p-2 pr-6'
									name='compareTo'
									id='compareTo'
									value={compareTo}
									onChange={(e) =>
										setCompareTo(parseInt(e.target.value))
									}
								>
									<option value='12'>Last Year</option>
									<option value='24'>2023</option>
									<option value='36'>2022</option>
								</select>
							</div>
						</span>
					</span>
					<DashboardC1 compareTo={compareTo}></DashboardC1>
				</DashboardCard>
			</span>
			<span className='flex flex-col gap-3'>
				<DashboardCard>
					<span className='block h-[15rem] w-[15rem]'></span>
				</DashboardCard>
				<DashboardCard>
					<span className='block h-[15rem] w-[15rem]'></span>
				</DashboardCard>
				<DashboardCard>
					<span className='block h-[15rem] w-[15rem]'></span>
				</DashboardCard>
			</span>
		</section>
	);
}
