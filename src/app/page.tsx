import styles from "./page.module.css";

import Feature from "@/components/UI/feature/Feature";
import { getAbout, getServices } from "@/utils/getFeature";
import Slider from "@/components/UI/slider/Slider";
import slides from '@/utils/getSlides'
import Products from "@/components/Products/Products";
import productsList from '@/utils/getProducts'
import Locations from "@/components/Locations/Locations";
import Contact from "@/components/Contact/Contact";

export default function Home() {
    let feature_about = getAbout()
    let feature_services = getServices()

	return (
		<div className={styles.HomePage}>
			<div className={styles.title_container}>
				<div className={styles.title_wrapper}>
					<p className={styles.subtitle}>WHO ARE WE</p>

					<h1 className={styles.mainTitle}>
						Ultimate Solitions for Your Business Dreams
					</h1>
				</div>

				<p className={styles.description}>
					With access to major suppliers and manufacturers around the
					globe, Azoil Trading and Commerce Agency trades several of
					crude oil and refined petroleum products in global energy
					market. OUR MISSION is to provide first-class quality and
					services to all our valuable customers and to always be
					innovative and alert in the marketplace we serve.
				</p>
			</div>

            <Feature feature={feature_about} />

            <Slider sliderData={slides()} />

            <Feature feature={feature_services} />

            <Products products={productsList()} />

            <Locations />

            <Contact />
		</div>
	);
}
