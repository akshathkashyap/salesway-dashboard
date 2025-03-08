"use client";

import React, { useMemo, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import useReqApi6 from "@/hooks/useReqApi6";

export default function DashboardC2() {
	const [isExpanded, setIsExpended] = useState<boolean>(false);
	const { result } = useReqApi6();

	const displayList: typeof result = useMemo(() => {
		if (!result.length) return [];

		if (!isExpanded) return result.slice(0, 5);
		return result;
	}, [result, isExpanded]);

	return (
		<span className='w-full'>
			<span className='flex flex-row flex-wrap justify-between items-center gap-4 w-full'>
				<h1 className='font-bold text-xl'>Top Products</h1>
				<button
					className='cursor-pointer font-semibold my-6 px-4 py-2 rounded-4xl outline-2 outline-gray-300 transition-all duration-150 ease-in-out hover:bg-blue-600 hover:text-white'
					onClick={() => setIsExpended((prevState) => !prevState)}
				>
					{isExpanded ? "Collapse" : "Full results"}
				</button>
			</span>
			<table className='w-full'>
				<thead className='relative after:content-[""] after:absolute after:bottom-0 after-left-0 after:h-0.5 after:w-full after:bg-gray-300'>
					<tr>
						<th className='font-semibold text-left text-sm text-gray-500 pb-3'>
							Product
						</th>
						<th className='font-semibold text-left text-sm text-gray-500 pb-3'>
							Sold amount
						</th>
						<th className='font-semibold text-left text-sm text-gray-500 pb-3'>
							Unit price
						</th>
						<th className='font-semibold text-left text-sm text-gray-500 pb-3'>
							Revenue
						</th>
						<th className='font-semibold text-left text-sm text-gray-500 pb-3'>
							Rating
						</th>
					</tr>
				</thead>
				<tbody>
					{displayList.map((product, index: number) => (
						<tr key={index}>
							<td className='font-semibold py-3'>
								{product.name}
							</td>
							<td className='py-3'>{product.soldAmount}</td>
							<td className='py-3'>${product.unitPrice}</td>
							<td className='py-3'>${product.revenue}</td>
							<td className='flex justify-center items-center font-semibold py-3'>
								<StarIcon color='warning'></StarIcon>
								<span>
									{parseFloat(`${product.rating}`).toFixed(2)}
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</span>
	);
}
