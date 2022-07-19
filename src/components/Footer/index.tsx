import styles from "./Footer.module.scss";
import imgLine from "assets/images/line.png";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Footer() {
	const [timer, setTimer] = useState(60)
    if(timer <= 0) window.location.reload()
    setTimeout(()=>{setTimer(timer - 1)}, 1000)
	const navigate = useNavigate();
	return (
		<footer className={styles.footer}>
			<div className={styles.autentication}>	
				<div className={styles.textAutentication}>
					<p>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
				</div>
				<img src={imgLine} alt="line" />
				<div className={styles.textApplication}>
					<p className={styles.refresh}>Application refresh in</p>
					<div className={styles.secondsContainer}>
						<p className={styles.seconds}>{timer}</p>
						<p>seconds</p>
					</div>
				</div>
			</div>
			<div className={styles.navContainer}>
				<a href="https://google.com" 
					target="_blank" 
					rel="noopener noreferrer"className={styles.navText}>Continuar Navegando</a>
				
			</div>
			<div className={styles.logContainer}>
				<p onClick={() => (
                        navigate("/", {replace: true}))} className={styles.logText}>Logout</p>
			</div>
		</footer>
	);
}