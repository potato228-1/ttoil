import styles from "./Feature.module.css";

import Subtitle from "@/components/UI/subtitle/Subtitle";

interface FeatureItem {
	subtitle: string;
	title: string;
	description: string;
}

interface FeatureProps {
	feature: FeatureItem;
}

export default function Feature({ feature }: FeatureProps) {
	return (
		<div className={styles.feature}>
			<Subtitle text={feature.subtitle} />
			<div className={styles.texts_wrapper}>
				<p className={styles.title}>{feature.title}</p>

				<p className={styles.description}>{feature.description}</p>
			</div>
		</div>
	);
}
