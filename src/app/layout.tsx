import type { Metadata } from "next";
import SideNav from "@/components/SideNav";
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
					<section className="w-full md:w-96">
						{/* Desktop Navbar */}
						<SideNav></SideNav>
					</section>
					<section className="w-full">
						{/* Page Content */}
						{children}
					</section>
					<section className="block md:hidden">{/* Mobile Navbar */}</section>
				</main>
			</body>
		</html>
	);
}
