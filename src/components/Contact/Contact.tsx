"use client";

import styles from "./Contact.module.css";

import Subtitle from "@/components/UI/subtitle/Subtitle";
import ContactForm from "./Form/ContactForm";

export default function Contact() {
	return (
		<div className={styles.contact}>
			<Subtitle text="CONTACT" />
			<p className={styles.title}>Feel Free to Contact Us</p>

			<ContactForm />
		</div>
	);
}
