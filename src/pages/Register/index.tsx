import styles from "./Register.module.scss";
import imgLogo from "assets/images/logo-compasso.png";
import { useNavigate, } from "react-router-dom";
import {  useState, useContext } from "react";
import InputSingUpEmail from 'pages/Register/Inputs/inputRegisterEmail';
import InputSingUpPassword from 'pages/Register/Inputs/inputRegisterPass';
import { RegisterUserContext } from 'common/context/registerUser';
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";


const db = getFirestore(); 
const auth = getAuth();


export default function Login() {
	const navigate = useNavigate();
   const { email, password } = useContext(RegisterUserContext);
	const [ erro, setErro ] = useState(false);

      function validaLogin() {
		event?.preventDefault()
		let inputs = document.querySelectorAll("input");
		let validaInput = true;
		inputs.forEach(input => {
			if(input.value == "") {validaInput = false; input.style.border = "1px solid #E9B425";
				setErro(true);
				return
			}else {
				createUserWithEmailAndPassword(auth,email,password).then((response)=>{
					alert('cadastrado com sucesso!');
					navigate('login');
				console.log(response);
				})

		}

	
});
const signUp = async (email: string, password: string) => {
	try {
	const userCredential = await createUserWithEmailAndPassword(auth,email,password);
	const user = userCredential.user;
	await addDoc(collection(db, "users"), {
	uid: user.uid,
	email: user.email,
	});
	return true
	} catch (err) {
		console.error(err);
	}
   };
}
return (
	<>
	<section className={styles.Container}>
	 <div className={styles.login}>
	  <div className={styles.titleContainer}>
		<h1 className={styles.title}>Olá,</h1>
		  <p className={styles.text}>
			Para continuar navegando de forma segura, efetue o cadastro na rede.
		  </p>
		</div>
		 <div className={styles.form}>
			<h2 className={styles.formTitle}>Cadastro</h2>
			<InputSingUpEmail/>
			<InputSingUpPassword/>
			{erro && <div className={styles.erroContainer}>
				<p>Ops, usuário ou senha inválidos.</p><p>Tente novamente!</p></div>}
				 <div className={styles.btnContainer}>
					<button onClick={() => validaLogin()}className={styles.button}>Continuar</button>
					</div>
					<div className={styles.loginContainer}>
		<p className={styles.loginText}>Já possui cadastro?<a onClick={() => navigate("/", {replace: true})}> Entrar</a></p>     
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