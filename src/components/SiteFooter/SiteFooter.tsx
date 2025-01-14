import styles from "./SiteFooter.module.css";

import logo from "../../../public/logo.png";
import Image from "next/image";
import heart from "../../../public/footer/heart.png";

import yt_icon from "../../../public/socialMedia/youtube.png";
import in_icon from "../../../public/socialMedia/linkedin.png";
import fb_icon from "../../../public/socialMedia/facebook.png";
import inst_icon from "../../../public/socialMedia/instagram.png";
import Link from "next/link";

export default function SiteFooter() {
	let categories = [
		{
			title: "ABOUT",
			items: ["Who are We", "Our Company"],
		},
		{
			title: "SERVICES",
			items: ["Crude Oil", "Refined Products", "Logistics", "Hedging"],
		},
		{
			title: "PRODUCTS",
			items: [
				"Fuel Oil & Vacuum Gasoil",
				"Middle Distillates",
				"Naptha",
				"Crude",
				"Gasoline",
				"Energy of the Future",
				"Petrochemical Products",
				"Dry Bulk",
			],
		},
		{
			title: "LOCATIONS",
			items: [
				`
                P.O.Box: 
                27430, Sharjah 
                Media City, Sharjah, 
                UAE
            `,
			],
		},
		{
			title: "CONTACT",
			items: ["+971 50 470 96 70", "+971 426 02 108", "+971 426 02 109"],
		},
	];

	let socials_links = [
		{
			image: yt_icon,
			href: "www.youtube.com",
		},
		{
			image: in_icon,
			href: "#",
		},
		{
			image: fb_icon,
			href: "#",
		},
		{
			image: inst_icon,
			href: "#",
		},
	];

	return (
		<footer className={styles.footer}>
			<div className={styles.footer_inner}>
				<div className={styles.categories_container}>
					<Image src={logo} alt="ttoil" className={styles.logo} />
					{categories.map((category: any) => (
						<div className={styles.category} key={category.title}>
							<p className={styles.category_title}>
								{category.title}
							</p>

							<div className={styles.category_items}>
								{category.items.map((item: any) => (
									<p
										className={styles.categoryItem}
										key={item}
									>
										{item}
									</p>
								))}
							</div>
						</div>
					))}
				</div>

				<hr className={styles.line_hr} />

				<div className={styles.footer_bottom}>
					<p className={styles.bottom_text}>
						© TToil 2021. All right reserved <span>·</span> Designed
						with{" "}
						<Image
							src={heart}
							alt=""
							className={styles.heart_icon}
						/>{" "}
						by Ali Abbas
					</p>

					<div className={styles.socials}>
						{socials_links.map((link: any, index) => (
							<Link
								href={link.href}
								className={styles.social_item}
								key={index}
							>
								<Image src={link.image} alt="" />
							</Link>
						))}
					</div>
				</div>
			</div>

			<div className={styles.footer_mobile}>
				<div className={styles.footerMob_inner}>
					<Image src={logo} alt="ttoil" className={styles.logo} />
					<div className={styles.socials}>
						{socials_links.map((link: any, index) => (
							<Link
								href={link.href}
								className={styles.social_item}
								key={index}
							>
								<Image src={link.image} alt="" />
							</Link>
						))}
					</div>
				</div>

				<div className={styles.categories_container}>
					{categories.map((category: any, index) => {
						if (index >= 3)
							return (
								<div
									className={styles.category}
									key={category.title}
								>
									<p className={styles.category_title}>
										{category.title}
									</p>

									<div className={styles.category_items}>
										{category.items.map((item: any) => (
											<p
												className={styles.categoryItem}
												key={item}
											>
												{item}
											</p>
										))}
									</div>
								</div>
							);
					})}
				</div>

				<hr className={styles.line_hr} />

				<div className={styles.footer_bottom}>
					<p className={styles.bottom_text}>
						© TToil 2021. All right reserved <span>·</span> Designed
						with{" "}
						<Image
							src={heart}
							alt=""
							className={styles.heart_icon}
						/>{" "}
						by Ali Abbas
					</p>
				</div>
			</div>
		</footer>
	);
}
