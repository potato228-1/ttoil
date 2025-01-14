import Image from "next/image";
import styles from "./ProductItem.module.css";

interface ProductItem {
	title: string;
	description: string;
	image: any;
}

interface ProductProps {
	product: ProductItem;
	reversed: boolean;
}

export default function ProductItem({ product, reversed }: ProductProps) {
	return (
		<div
			className={
				reversed
					? [styles.productItem, styles.reversed].join(" ")
					: styles.productItem
			}
		>
            <p className={[styles.title, styles.title_mob].join(' ')}>{product.title}</p>
			<Image src={product.image} alt="" className={styles.image} />
			<div className={styles.text_wrapper}>
				<p className={styles.title}>{product.title}</p>

				<p className={styles.description}>{product.description}</p>
			</div>
		</div>
	);
}
