'use client'

import styles from "./SiteHeader.module.css";

import Image from "next/image";
import Logo from "/ttoil/public/logo.png";
import Link from "next/link";
import ModalHeader from "./ModalHeader/ModalHeader";
import { useState } from "react";

export default function SiteHeader() {
	let [menu, setMenu] = useState(false);

	return (
		<header className={styles.header}>
			<Link href="/" className={styles.nav_link}>
				ABOUT
			</Link>

			<Link href="/" className={styles.nav_link}>
				SERVICES
			</Link>

			<Link href="/" className={styles.nav_link}>
				PRODUCTS
			</Link>

			<Image src={Logo} alt="ttoil" className={styles.logo} />

			<Link href="/" className={styles.nav_link}>
				LOCATIONS
			</Link>

			<Link href="/" className={styles.nav_link}>
				CONTACT
			</Link>

			<Link href="/" className={styles.nav_link}>
				LANGUAGE
			</Link>

			<button className={styles.menu_btn} onClick={() => setMenu(true)}>
				MENU
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className={styles.menu_icon}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
					/>
				</svg>
			</button>

			<ModalHeader visible={menu} closeMenu={() => setMenu(false)} />
		</header>
	);
}
