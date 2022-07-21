import styles from "./HomeClimate.module.scss";
import imgLogoCompass from "assets/images/logo-compass.png";
import Clock from "components/Clock";
import Weather from "./Weather";

export default function Header() {
	return (
		<div className={styles.headerContainer}>
			<div className={styles.logo}>
				<img src={imgLogoCompass} alt="Logo" />
			</div>
			<div className={styles.time}>
				<Clock />
			</div>
			  <Weather />
		</div>
	);
}

