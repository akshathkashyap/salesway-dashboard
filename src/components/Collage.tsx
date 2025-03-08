import React from "react";
import Image from "next/image";

function CollageCard({ children }: { children: React.ReactNode }) {
	return (
		<div className='w-[24rem] h-[20rem] p-4 bg-white shadow-2xl translate-y-[100vh] -rotate-3 overflow-hidden'>
			{children}
		</div>
	);
}

export default function Collage() {
	return (
		<section className='flex flex-row items-start gap-8 m-8'>
			<span className='w-1/2 h-1/2 p-4 invisible bg-white shadow-md translate-x-8 -rotate-3 overflow-hidden animate-[polaroidAppear_0.2s_0.8s_1_forwards_ease-out]'>
				<Image
					className='object-contain'
					src={
						"https://airfixture.com/hubfs/pexels-pixabay-269077.jpg"
					}
					alt='office'
					width={500}
					height={500}
				></Image>
				<span className='font-bold font-handwritten block mt-2'>
					#office
				</span>
			</span>
			<span className='w-1/2 h-1/2 p-4 invisible bg-white shadow-md rotate-5 overflow-hidden animate-[polaroidAppear_0.2s_1s_1_forwards_ease-out]'>
				<Image
					className='object-contain'
					src={
						"https://www.cio.com/wp-content/uploads/2025/03/3485346-0-60813400-1741173693-shutterstock_2431976515.jpg"
					}
					alt='teams'
					width={500}
					height={500}
				></Image>
				<span className='font-bold font-handwritten block mt-2'>
					#ourTeam
				</span>
			</span>
		</section>
	);
}
