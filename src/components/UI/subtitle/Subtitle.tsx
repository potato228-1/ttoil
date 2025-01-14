import styles from "./Subtitle.module.css";

export default function Subtitle({ text }: { text: string }) {
	return <p className={styles.subtitle}>{text}</p>;
}
