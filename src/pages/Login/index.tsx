import styles from "./Login.module.scss";
import imgLogo from "assets/images/logo-compasso.png";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import imgUser from "assets/images/icon-user.png"
import imgPass from "assets/images/icon-password.png";
import classNames from "classnames";


export default function Login() {
	const navigate = useNavigate();
	const [ erro, setErro ] = useState(false);

      function validaLogin() {
		let inputs = document.querySelectorAll("input");
		let valid = true;
		inputs.forEach(input => {
			if(input.value == "") {
				valid = false;
				input.style.border = "1px solid #E9B425";
				setErro(true);
			}else {
			navigate("/home")
		}
	
});
}
	return (
		<>
		<section className={styles.Container}>
			<div className={styles.login}>
				<div className={styles.titleContainer}>
					<h1 className={styles.title}>Olá,</h1>
					<p className={styles.text}>Para continuar navegando de forma segura, efetue o login na rede.</p>
					</div>
				<div className={styles.form}>
					<h2 className={styles.formTitle}>Login</h2>
					<input
                    type="email"
                    placeholder="Usuário"
                />
                 <img src={imgUser} alt="User" />
				 <input
                    type="password"
                    placeholder="Senha"
                />
                <img src={imgPass} alt="Password" />
					<div className={classNames({[styles.errorContainer]: true,"erro": true})}>
							<p>Ops, usuário ou senha inválidos.</p>
							<p>Tente novamente!</p>
					</div>
						<div className={styles.btnContainer}>
							<button onClick={() => validaLogin()}className={styles.button}>Continuar</button>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.imgLogo}>
				<img src={imgLogo} alt="Compass Logo" />
			</section>
		</>
	);
}