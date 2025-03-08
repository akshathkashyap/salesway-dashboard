"use client";

import { useEffect, useMemo, useState } from "react";
import useReqApi5 from "@/hooks/useReqApi5";

export default function DashboardC5() {
	const [feedbackMajority, setFeedbackMajority] = useState<
		"positive" | "neutral" | "negative"
	>("neutral");
	const { result } = useReqApi5();

	const { negativeWidth, neutralWidth, positiveWidth } = useMemo(() => {
		const { negative, neutral, positive } = result;
		const total: number = negative + neutral + positive;

		const negativeWidth: number = Math.floor((negative * 100) / total);
		const neutralWidth: number = Math.floor((neutral * 100) / total);
		const positiveWidth: number = Math.floor((positive * 100) / total);

		return { negativeWidth, neutralWidth, positiveWidth };
	}, [result]);

	useEffect(() => {
		let majority: "negative" | "neutral" | "positive" = "neutral";
		let max: number = 0;

		for (const feedbackType in result) {
			const feedback: number =
				result[feedbackType as keyof typeof result];
			if (feedback > max) {
				max = feedback;
				majority = feedbackType as keyof typeof result;
			}
		}

		setFeedbackMajority(majority);
	}, [result]);

	return (
		<span className='w-full'>
			<span className='font-semibold text-sm text-gray-500'>Community feedback</span>
			<h3 className='font-bold text-xl'>Mostly {feedbackMajority}</h3>
			<span className='relative flex gap-1 w-full my-4'>
				<span
					className='block h-2 rounded-sm bg-red-300'
					style={{ width: `${negativeWidth}%` }}
				></span>
				<span
					className='block h-2 rounded-sm bg-amber-300'
					style={{ width: `${neutralWidth}%` }}
				></span>
				<span
					className='block h-2 rounded-sm bg-green-300'
					style={{ width: `${positiveWidth}%` }}
				></span>
			</span>
            <span className="grid grid-cols-3">
                <span className='font-semibold text-sm text-gray-500'>Negative</span>
                <span className='font-semibold text-sm text-gray-500'>Neutral</span>
                <span className='font-semibold text-sm text-gray-500'>Positive</span>
                <span className='font-bold'>{result.negative}</span>
                <span className='font-bold'>{result.neutral}</span>
                <span className='font-bold'>{result.positive}</span>
            </span>
		</span>
	);
}
