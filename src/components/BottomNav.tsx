"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import LanIcon from "@mui/icons-material/Lan";
import LanOutlinedIcon from "@mui/icons-material/LanOutlined";
import PowerIcon from "@mui/icons-material/Power";
import PowerOutlinedIcon from "@mui/icons-material/PowerOutlined";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export default function BottomNav() {
	const pathname = usePathname();

	return (
		<nav>
			<ul className='flex flex-row justify-evenly'>
				<li
					className={`my-1 rounded-md transition-all duration-150 ease-in-out ${
						pathname.startsWith("/dashboard")
							? "font-bold text-gray-700 bg-white shadow-md"
							: "md:hover:font-bold md:hover:text-gray-700 md:hover:outline-2 text-gray-500 bg-gray-300"
					}`}
				>
					<Link className='block px-5 py-3' href={"/dashboard"}>
						{pathname.startsWith("/dashboard") ? (
							<DashboardIcon color='primary'></DashboardIcon>
						) : (
							<DashboardOutlinedIcon></DashboardOutlinedIcon>
						)}
						<span className='hidden'>Dashboard</span>
					</Link>
				</li>
				<li
					className={`my-1 rounded-md transition-all duration-150 ease-in-out ${
						pathname.startsWith("/campaigns")
							? "font-bold text-gray-700 bg-white shadow-md"
							: "md:hover:font-bold md:hover:text-gray-700 md:hover:outline-2 text-gray-500 bg-gray-300"
					}`}
				>
					<Link className='block px-5 py-3' href={"/campaigns"}>
						{pathname.startsWith("/campaigns") ? (
							<TrendingUpIcon color='primary'></TrendingUpIcon>
						) : (
							<TrendingUpOutlinedIcon></TrendingUpOutlinedIcon>
						)}
						<span className='hidden'>Campaigns</span>
					</Link>
				</li>
				<li
					className={`my-1 rounded-md transition-all duration-150 ease-in-out ${
						pathname.startsWith("/flows")
							? "font-bold text-gray-700 bg-white shadow-md"
							: "md:hover:font-bold md:hover:text-gray-700 md:hover:outline-2 text-gray-500 bg-gray-300"
					}`}
				>
					<Link className='block px-5 py-3' href={"/flows"}>
						{pathname.startsWith("/flows") ? (
							<LanIcon color='primary'></LanIcon>
						) : (
							<LanOutlinedIcon></LanOutlinedIcon>
						)}
						<span className='hidden'>Flows</span>
					</Link>
				</li>
				<li
					className={`my-1 rounded-md transition-all duration-150 ease-in-out ${
						pathname.startsWith("/integrations")
							? "font-bold text-gray-700 bg-white shadow-md"
							: "md:hover:font-bold md:hover:text-gray-700 md:hover:outline-2 text-gray-500 bg-gray-300"
					}`}
				>
					<Link className='block px-5 py-3' href={"/integrations"}>
						{pathname.startsWith("/integrations") ? (
							<PowerIcon color='primary'></PowerIcon>
						) : (
							<PowerOutlinedIcon></PowerOutlinedIcon>
						)}
						<span className='hidden'>Integrations</span>
					</Link>
				</li>
				<li
					className={`my-1 rounded-md transition-all duration-150 ease-in-out ${
						pathname.startsWith("/customers")
							? "font-bold text-gray-700 bg-white shadow-md"
							: "md:hover:font-bold md:hover:text-gray-700 md:hover:outline-2 text-gray-500 bg-gray-300"
					}`}
				>
					<Link className='block px-5 py-3' href={"/customers"}>
						{pathname.startsWith("/customers") ? (
							<PersonIcon color='primary'></PersonIcon>
						) : (
							<PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon>
						)}
						<span className='hidden'>Customers</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
