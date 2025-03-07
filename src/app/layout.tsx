import type { Metadata } from "next";
import SideNav from "@/components/SideNav";
import BottomNav from "@/components/BottomNav";
import "./globals.css";

export const metadata: Metadata = {
	title: "Salesway",
	description: "Salesway Dashboard, created by Akshath Kashyap",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`antialiased`}>
				<main className='fixed flex flex-col md:flex-row h-full w-full bg-gray-300'>
					<section className='w-full md:w-96'>
						{/* Desktop Navbar */}
						<SideNav></SideNav>
					</section>
					<section className='w-full h-full overflow-y-auto'>
						{/* Page Content */}
						{children}
					</section>
					<section className='fixed bottom-0 left-0 w-full md:hidden'>
						{/* Mobile Navbar */}
						<BottomNav></BottomNav>
					</section>
				</main>
			</body>
		</html>
	);
}
