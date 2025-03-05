import Image from "next/image";
import Collage from "@/components/Collage";

export default function Home() {
	return (
		<div className="flex justify-center items-center w-full h-full">
			<section>
				<span className="flex flex-row gap-18 justify-center">
					<Image
						className='w-[8rem] object-contain animate-[spin_1s_ease-in-out]'
						src={"/salesway_logo.png"}
						alt='salesway_logo.png'
						width={560}
						height={560}
					></Image>
					<h1 className='font-bold text-9xl text-black'>Salesway</h1>
				</span>
				<Collage></Collage>
			</section>
		</div>
	);
}
