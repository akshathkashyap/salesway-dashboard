import React from "react";
import Image from "next/image";

function CollageCard({ children }: { children: React.ReactNode }) {
	return (
		<div className='w-[24rem] h-[20rem] bg-white rounded-4xl shadow-2xl outline-2 overflow-hidden'>
			{children}
		</div>
	);
}

export default function Collage() {
	return (
		<section className="flex flex-row items-start gap-8 m-8">
            <span className="">
                <CollageCard>
                    <Image
                        className="object-contain"
                        src={
                            "https://airfixture.com/hubfs/pexels-pixabay-269077.jpg"
                        }
                        alt='office'
                        width={500}
                        height={500}
                    ></Image>
                    <span className="block p-5 bold font-handwritten">#office</span>
                </CollageCard>
            </span>
            <span>
                <CollageCard>
                    <Image
                        className="object-contain"
                        src={
                            "https://www.cio.com/wp-content/uploads/2025/03/3485346-0-60813400-1741173693-shutterstock_2431976515.jpg"
                        }
                        alt='teams'
                        width={500}
                        height={500}
                    ></Image>
                    <span className="block p-5 bold font-handwritten">#ourTeam</span>
                </CollageCard>
            </span>
		</section>
	);
}
