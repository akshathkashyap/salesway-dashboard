import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "airfixture.com",
				port: "",
				pathname: "/**",
				search: "",
			},
			{
				protocol: "https",
				hostname: "www.cio.com",
				port: "",
				pathname: "/**",
				search: "",
			},
		],
	},
	async rewrites() {
		return [
			{
				source: "/dashboard/proxy/:path*",
				destination: "http://3.111.196.92:8020/api/v1/:path*",
			},
		];
	},
};

export default nextConfig;
