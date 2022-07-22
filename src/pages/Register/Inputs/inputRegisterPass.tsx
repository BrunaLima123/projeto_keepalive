import { RegisterUserContext } from 'common/context/registerUser';
import { useContext, useState, useEffect} from 'react';
import imgPassword from 'assets/images/icon-password.png';
import styles from './inputRegister.module.scss';
import classNames from "classnames";



export default function InputSignUpPassword() {
    const { password, setPassword } = useContext(RegisterUserContext);
    const [inactive, setInactive] = useState(false);
   /*const [validateInput, setValidateInput] = useState({case: false, number: false, length: false})
    const secureText = (password: string) => {
            const regexUppercase = new RegExp(/^(?=.*[A-Z]).+$/)
            const regexLowercase = new RegExp(/^(?=.*[a-z]).+$/)
            const regexNumber = new RegExp(/^(?=.*[0-9]).+$/)
            const length = password.length >= 6
            setValidateInput({
                case: regexUppercase.test(password) && regexLowercase.test(password),
                number: regexNumber.test(password),
                length
            })
        }*/
 
        useEffect(()=> {
            if(password !== ""){
                setInactive(true);
            }else{
                setInactive(false);
            }}, [password])
    return (
        <div className={styles.inputContainer}>
            <input className={classNames({[styles["passwordActive"]]: inactive,})}
             type="password" placeholder="Senha" value={ password }
            onChange={(event) => (setPassword(event.target.value))}/>
            <img 
             className={classNames({
                [styles.iconNo]: inactive
            })}src={imgPassword} alt="Password"/>
        </div>
        
    )
 
    
    }
