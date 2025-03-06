"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
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

export default function SideNav() {
	const pathname = usePathname();

	return (
		<nav className='relative w-full md:p-8'>
			<span className='flex flex-row md:flex-col justify-between'>
				<Link
					className='flex flex-row justify-start items-center gap-4 px-5'
					href={"/"}
				>
					<Image
						className='w-6 object-contain'
						src={"/salesway_logo.png"}
						alt='salesway_logo.png'
						width={560}
						height={560}
					></Image>
					<h1 className='font-bold text-2xl text-black'>Salesway</h1>
				</Link>
				<ul className='flex flex-row md:flex-col my-5'>
					<li
						className={`my-1 rounded-md transition-all duration-150 ease-in-out ${
							pathname.startsWith("/settings")
								? "font-bold text-gray-700 bg-white shadow-md"
								: "md:hover:font-bold md:hover:text-gray-700 md:hover:outline-2 text-gray-500 bg-gray-300"
						}`}
					>
						<Link className='block px-5 py-3' href={"/settings"}>
							{pathname.startsWith("/settings") ? (
								<SettingsIcon color='primary'></SettingsIcon>
							) : (
								<SettingsOutlinedIcon></SettingsOutlinedIcon>
							)}
							<span className='hidden md:inline ml-2'>
								Settings
							</span>
						</Link>
					</li>
					<li
						className={`my-1 rounded-md transition-all duration-150 ease-in-out ${
							pathname.startsWith("/team")
								? "font-bold text-gray-700 bg-white shadow-md"
								: "md:hover:font-bold md:hover:text-gray-700 md:hover:outline-2 text-gray-500 bg-gray-300"
						}`}
					>
						<Link className='block px-5 py-3' href={"/team"}>
							{pathname.startsWith("/team") ? (
								<GroupsIcon color='primary'></GroupsIcon>
							) : (
								<GroupsOutlinedIcon></GroupsOutlinedIcon>
							)}
							<span className='hidden md:inline ml-2'>Team</span>
						</Link>
					</li>
				</ul>
			</span>
			<span className='hidden md:inline my-5'>
				<h3 className='font-bold text-sm text-gray-500 mb-3 px-5'>
					MENU
				</h3>
				<ul>
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
							<span className='ml-2'>Dashboard</span>
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
							<span className='ml-2'>Campaigns</span>
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
							<span className='ml-2'>Flows</span>
						</Link>
					</li>
					<li
						className={`my-1 rounded-md transition-all duration-150 ease-in-out ${
							pathname.startsWith("/integrations")
								? "font-bold text-gray-700 bg-white shadow-md"
								: "md:hover:font-bold md:hover:text-gray-700 md:hover:outline-2 text-gray-500 bg-gray-300"
						}`}
					>
						<Link
							className='block px-5 py-3'
							href={"/integrations"}
						>
							{pathname.startsWith("/integrations") ? (
								<PowerIcon color='primary'></PowerIcon>
							) : (
								<PowerOutlinedIcon></PowerOutlinedIcon>
							)}
							<span className='ml-2'>Integrations</span>
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
							<span className='ml-2'>Customers</span>
						</Link>
					</li>
				</ul>
			</span>
		</nav>
	);
}
