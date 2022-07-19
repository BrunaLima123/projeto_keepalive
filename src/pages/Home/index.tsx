import Footer from "components/Footer";
import Header from "components/Header";
import styles from "./Home.module.scss";


export default function Home() {
	return(

<section className={styles.container}>
			<Header />
			<section className={styles.containerText}>
			<h1 className={styles.pFirst}>Our mission is</h1>
            <p className={styles.pPortugues}>Nossa missão é</p>
            <h1 className={styles.pEnglish}>to transform the world</h1>
            <p className={styles.pPortugues}>transformar o mundo</p>
            <h1 className={styles.pEnglish}>building digital experiences</h1>
            <p className={styles.pPortugues}>construindo experiências digitais</p>
            <h1 className={styles.pEnglish}>that enable our client's growth</h1>
            <p className={styles.pPortugues}>que permitam o crescimento dos nossos clientes</p>
			</section>
			<Footer />
		</section>
	)
};