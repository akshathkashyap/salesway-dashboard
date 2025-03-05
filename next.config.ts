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
};

export default nextConfig;
