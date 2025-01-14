import styles from "./ModalHeader.module.css";

import Image from "next/image";
import Logo from "../../../../public/header/logo_alternative.png";
import icon_close from "../../../../public/header/close_icon.png";
import Link from "next/link";
import yt_icon from "../../../../public/socialMedia/modalHeader/youtube.png";
import li_icon from "../../../../public/socialMedia/modalHeader/linkedin.png";
import fb_icon from "../../../../public/socialMedia/modalHeader/facebook.png";
import inst_icon from "../../../../public/socialMedia/modalHeader/instagram.png";

export default function ModalHeader({
	visible,
	closeMenu,
}: {
	visible: boolean;
	closeMenu: () => void;
}) {
	return (
		<header
			className={
				visible
					? [styles.modalHeader, styles.active].join(" ")
					: styles.modalHeader
			}
		>
			<div className={styles.modalHeader_wrapper}>
				<div className={styles.innerContainer}>
					<Image src={Logo} alt="ttoil" />
					<Image
						src={icon_close}
						alt=""
						onClick={() => closeMenu()}
                        className={styles.closeBtn}
					/>
				</div>

				<nav className={styles.nav}>
					<Link href="/" className={styles.nav_link}>
						ABOUT
					</Link>

					<Link href="/" className={styles.nav_link}>
						SERVICES
					</Link>

					<Link href="/" className={styles.nav_link}>
						PRODUCTS
					</Link>

					<Link href="/" className={styles.nav_link}>
						LOCATIONS
					</Link>

					<Link href="/" className={styles.nav_link}>
						CONTACT
					</Link>

					<Link href="/" className={styles.nav_link}>
						ENGLISH
					</Link>
				</nav>

				<div className={styles.contacts_container}>
					<Link href="/" className={styles.contacts_link}>
						SIGNUP FOR OUR NEWSLETTER
					</Link>

					<div className={styles.socialMedia_container}>
						<Link href="/" className={styles.socialMedia_icon}>
							<Image src={yt_icon} alt="YouTube" />
						</Link>

						<Link href="/" className={styles.socialMedia_icon}>
							<Image src={li_icon} alt="LinkedIn" />
						</Link>

						<Link href="/" className={styles.socialMedia_icon}>
							<Image src={fb_icon} alt="Facebook" />
						</Link>

						<Link href="/" className={styles.socialMedia_icon}>
							<Image src={inst_icon} alt="Instagram" />
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}
