import styles from "./Login.module.scss";
import imgLogo from "assets/images/logo-compasso.png";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase";
import { useNavigate } from "react-router-dom";
import {  useState, useContext } from "react";
import { UserContext } from "common/context/user";
import InputLoginEmail from 'pages/Login/Inputs/inputLoginEmail';
import InputLoginPassword from 'pages/Login/Inputs/inputLoginPass';


export default function Login() {
	const navigate = useNavigate();
	const { email, setEmail, password, setPassword } = useContext(UserContext);
	const [ erro, setErro ] = useState(false);

 
      function validaLogin() {  
		let inputs = document.querySelectorAll("input");
		inputs.forEach(input => {
			if(input.value == "") { input.style.border = "1px solid #E9B425";
				setErro(true);
			}else {
               signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                    ).then((response)=>{
                        navigate('home');
                    
                    }).catch((erro)=>{
                        setErro(true)
                        
                    })
                }
	});
		const signIn = async (email: string, password: string) => {
            console.log(email,password);
			try {
			const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password
			);
			const user = userCredential.user;
			return true
			} catch (err) {
                setErro(true)
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
                <p className={styles.text}>Para continuar navegando de forma segura, efetue o login na rede.</p>
                </div>
            <div className={styles.form}>
                <h2 className={styles.formTitle}>Login</h2>
                <InputLoginEmail />
                <InputLoginPassword />
    
                 {erro && <div className={styles.erroContainer}><p>Ops, usuário ou senha inválidos.</p>
                        <p>Tente novamente!</p>   </div>}
                      
                    <div className={styles.btnContainer}>
                        <button onClick={() => validaLogin()}className={styles.button}>Continuar</button>
                    </div>
                    <div className={styles.registerContainer}>
                    <p className={styles.register}>Não possui cadastro?<a className={styles.registerLogin} onClick={() => navigate("register", {replace: true})}> Cadastre-se aqui</a></p>     
                    </div>
                    
                </div>
                
            </div>
        </section>
        <div className={styles.imgLogo}>
            <img src={imgLogo} alt="Compass Logo" />
        </div>
    </>

);
}