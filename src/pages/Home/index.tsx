import Footer from "components/Footer";
import Header from "components/Header";
import styles from "./Home.module.scss";


export default function Home() {
	return(

<section className={styles.container}>
			<Header />
			<section className={styles.containerText}>
			<h2>Our mission is</h2> 
            <p>Nossa missão é</p>
            <h1>to transform the world</h1>
            <p>transformar o mundo</p>
            <h1>building digital experiences</h1>
            <p>construindo experiências digitais</p>
            <h1>that enable our client's growth</h1>
            <p>que permitam o crescimento dos nossos clientes</p>
			</section>
			<Footer />
		</section>
	)
};