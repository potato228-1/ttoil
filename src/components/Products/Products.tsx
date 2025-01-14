import styles from "./Products.module.css";

import ProductItem from "./ProductItem/ProductItem";
import Subtitle from "@/components/UI/subtitle/Subtitle";
import productPic7 from "@/../public/products/products_pic7.png";
import Image from "next/image";

interface ProductItem {
	title: string;
	description: string;
	image: any;
}

interface ProductsProps {
	products: ProductItem[];
}

export default function Products({ products }: ProductsProps) {
	let productItem_data = {
		countries_list: [
			"Acetates",
			"Acrylics",
			"Benzene",
			"Caustic Soda",
			"DEG",
			"2EH",
			"Ethylene",
			"EDC",
			"IPA",
			"PA",
			"PVC",
			"PTA",
			"Polyethylene",
			"Polypropylene",
			"Styrene Monomer",
			"VAM",
			"VCM",
		],
	};
	return (
		<div className={styles.products}>
			<Subtitle text="PRODUCTS" />

			<div className={styles.products_wrapper}>
				{products.map((product: ProductItem, index) =>
					index + 1 == 7 ? (
						<div className={styles.productItem} key={index}>
                            <p className={[styles.productItem_title, styles.title_mob].join(' ')}>
                                Petrochemical Products
                            </p>
							<Image
								src={productPic7}
								alt=""
								className={styles.productItem_image}
							/>
							<div className={styles.productItem_textWrapper}>
								<p className={styles.productItem_title}>
									Petrochemical Products
								</p>

								<p className={styles.productItem_description}>
									Petrochemicals are sophisticated products,
									and Coral Energy delivering them to
									customers. Our dynamic petrochemicals team
									runs positions in
								</p>

                                <ul className={styles.productItem_countries}>
                                    {productItem_data.countries_list.map((country: string, index) => (
                                        <li className={styles.country_item} key={index}>
                                            {country}
                                        </li>
                                    ))}
                                </ul>

								<p className={styles.productItem_description}>
									Our petrochemical portfolio grows 35 to 50%
									year on year in terms of quantity, and the
									product range constantly grows.
								</p>
							</div>
						</div>
					) : (
						<ProductItem
							product={product}
							reversed={(index + 1) % 2 == 0 ? true : false}
							key={index}
						/>
					)
				)}
			</div>
		</div>
	);
}
