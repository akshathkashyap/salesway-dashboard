export default function RouteLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className='w-full'>{children}</div>;
}
