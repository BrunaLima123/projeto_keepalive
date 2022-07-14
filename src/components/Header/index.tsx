import styles from "./HomeClimate.module.scss";
import imgLogoCompass from "assets/images/logo-compass.png";
import imgCloud from "assets/images/img-cloud.png";
import Clock from "pages/Home/Clock";


export default function Header() {
	return (
		<div className={styles.headerContainer}>
			<div className={styles.logo}>
				<img src={imgLogoCompass} alt="Logo" />
			</div>
			<div className={styles.time}>
				<Clock />
			</div>
			<div className={styles.climateContainer}>
                <div className={styles.place}>Passo Fundo - RS</div>
                <div className={styles.cloud}>
                    <img src={imgCloud} alt="Cloud" />
                    <span>22º</span>
                </div>                
            </div>
		</div>
	);
}