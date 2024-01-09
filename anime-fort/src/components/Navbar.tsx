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
			<nav className="flex gap-[1.5rem] p-[10px] border-red border-2 rounded-lg [&>*]:rounded-md bg-black [&>*]:py-[0.875rem] [&>*]:px-[1.5rem] text-white [&>*]:block">
				<Link
					className={`${pathname === "/" ? "bg-black10" : ""}`}
					href="/"
				>
					Home
				</Link>
				<Link
					className={`${
						pathname === "/movies_and_shows" ? "bg-black10" : ""
					}`}
					href="/movies_and_shows"
				>
					Movies & Shows
				</Link>
				<Link
					className={`${pathname === "/support" ? "bg-black10" : ""}`}
					href="/support"
				>
					Support
				</Link>
				<Link
					className={`${
						pathname === "/subscriptions" ? "bg-black10" : ""
					}`}
					href="/subscriptions"
				>
					Subscriptions
				</Link>
			</nav>
			<div className=" flex justify-between min-h-[32px] min-w-[100px]">
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
