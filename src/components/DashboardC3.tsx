"use client";

import useReqApi3 from "@/hooks/useReqApi3";
import CurvedProgressBar from "./CurvedProgressBar";
import { useEffect, useRef, useState } from "react";

export default function DashboardC3() {
	const displayNumberSpanRef = useRef<HTMLSpanElement | null>(null);
	const { result } = useReqApi3();

	function startDisplayNumberAnimation() {
		const intervalMs = Math.floor(1000 / result.points);

		const displayNumberIncrementerInterval = setInterval(() => {
			const displayNumberSpan = displayNumberSpanRef.current;
			if (!displayNumberSpan) return;

			const displayNumber: number = parseInt(displayNumberSpan.innerText);
			if (displayNumber === result.points) {
				clearInterval(displayNumberIncrementerInterval);
				return;
			}

			displayNumberSpan.innerText = `${displayNumber + 1}`;
		}, intervalMs);
	}

	useEffect(() => {
		if (result.points === 0) return;
		startDisplayNumberAnimation();
	}, [result]);

	return (
		<span className='w-full my-6'>
			<span className='relative flex justify-center w-full mb-12'>
				<CurvedProgressBar progress={result.points}></CurvedProgressBar>
				<span className='absolute -bottom-5 flex flex-col justify-center items-center'>
					<span
						className='font-bold text-4xl'
						ref={displayNumberSpanRef}
					>
						0
					</span>
					<span className='text-sm text-gray-500'>of 100 points</span>
				</span>
			</span>
			<hr className='text-gray-300 my-6' />
			<h3 className='font-bold text-xl mb-3'>You're good!</h3>
			<p className='text-gray-500'>
				Your sale performance score is better than 80% other users
			</p>
			<button className='cursor-pointer font-semibold my-6 px-4 py-2 rounded-4xl outline-2 outline-gray-300 transition-all duration-150 ease-in-out hover:bg-blue-600 hover:text-white'>
				Improve your score
			</button>
		</span>
	);
}
