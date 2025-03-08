"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Route() {
	const pathname = usePathname();

	const [pagename, setPagename] = useState<string>("");

	useEffect(() => {
		setPagename(pathname.substring(1));
	}, [pathname]);

	return (
		<section className='flex flex-col xl:flex-row gap-3 w-full p-3 mb-16 md:mb-auto'>
			<div className='w-full p-6 bg-white rounded-3xl shadow-md'>
				<h1 className='font-bold text-4xl capitalize'>{pagename}</h1>
			</div>
		</section>
	);
}
