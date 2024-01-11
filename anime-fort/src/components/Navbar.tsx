"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
	const pathname = usePathname();

	return (
		<div className="flex justify-between items-center">
			<nav className="hidden md:flex items-center gap-[1.5rem] p-[10px] border-red border-2 rounded-lg [&>*]:rounded-md bg-black [&>*]:py-[0.5rem] [&>*]:px-[1.5rem] text-white/75 [&>*]:block">
				<Link
					className={`${
						pathname === "/" ? "bg-black10 text-white" : ""
					} hover:bg-black10`}
					href="/"
				>
					Home
				</Link>
				<Link
					className={`${
						pathname === "/movies_and_shows"
							? "bg-black10 text-white"
							: ""
					} hover:bg-black10`}
					href="/movies_and_shows"
				>
					Movies & Shows
				</Link>
				<Link
					className={`${
						pathname === "/support" ? "bg-black10 text-white" : ""
					} hover:bg-black10`}
					href="/support"
				>
					Support
				</Link>
				<Link
					className={`${
						pathname === "/subscriptions"
							? "bg-black10 text-white"
							: ""
					} hover:bg-black10`}
					href="/subscriptions"
				>
					Subscriptions
				</Link>
			</nav>
			<button className=" md:hidden [&>*]:min-h-[1px] [&>*]:bg-white group [&>*]:transition-transform [&>*]:duration-300">
				<div className="min-w-[40px] scale-x-0 group-hover:scale-x-100"></div>
				<div className="my-2 scale-x-50 origin-right group-hover:scale-x-100"></div>
				<div className="scale-x-50 origin-left group-hover:scale-x-100"></div>
			</button>
			<div className="flex gap-[1.875rem]">
				<div>
					<FontAwesomeIcon
						icon={faBell}
						className="min-w-[2rem] text-white"
					/>
				</div>
				<div>
					<FontAwesomeIcon
						icon={faMagnifyingGlass}
						className="min-w-[2rem] text-white"
					/>
				</div>
			</div>
		</div>
	);
}
