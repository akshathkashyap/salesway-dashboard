import React from "react";

interface SemiCircularProgressBarProps {
	progress: number; // 0 to 100
	size?: number; // Default: 200px
	strokeWidth?: number; // Default: 15px
	color?: string; // Progress color
	trackColor?: string; // Track background color
}

export default function CurvedProgressBar({
	progress,
	size = 200,
	strokeWidth = 15,
	color = "#155dfc",
	trackColor = "#d1d5dc",
}: SemiCircularProgressBarProps) {
	const radius = (size - strokeWidth) / 2;
	const circumference = Math.PI * radius;
	const progressOffset = ((100 - progress) / 100) * circumference;

	return (
		<svg
			width={size}
			height={size / 2}
			viewBox={`0 0 ${size} ${size / 2}`}
			style={{
				animation: "progressBarAnimation 1.1s ease-in 1 forwards",
			}}
		>
			{/* Track (background) - Now with rounded edges */}
			<path
				d={`M ${strokeWidth / 2},${
					size / 2
				} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2},${
					size / 2
				}`}
				fill='none'
				stroke={trackColor}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeDasharray={circumference}
				strokeDashoffset={0} // No offset for track
			/>

			{/* Progress - Now with rounded edges */}
			<path
				d={`M ${strokeWidth / 2},${
					size / 2
				} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2},${
					size / 2
				}`}
				fill='none'
				stroke={color}
				strokeWidth={strokeWidth}
				strokeDasharray={circumference}
				strokeDashoffset={progressOffset}
				strokeLinecap='round'
				style={{
					transition: "stroke-dashoffset 1s ease-in-out",
				}}
			/>
		</svg>
	);
}
