import "./globals.css";

import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import { Space_Grotesk } from 'next/font/google'
import SiteFooter from "@/components/SiteFooter/SiteFooter";

export const metadata: Metadata = {
	title: "ttoil",
	description: "ttoil Landing Page",
};

const spaceGrotesk = Space_Grotesk({
    display: 'swap',
    subsets: ['latin']
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={spaceGrotesk.className}>
			<body>
				<div className="mainContainer">
					<SiteHeader />
					{children}
                    <SiteFooter />
				</div>
			</body>
		</html>
	);
}
