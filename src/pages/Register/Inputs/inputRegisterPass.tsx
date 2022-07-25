import { RegisterUserContext } from 'common/context/registerUser';
import { useContext, useState, useEffect} from 'react';
import imgPassword from 'assets/images/icon-password.png';
import styles from './inputRegister.module.scss';
import classNames from "classnames";



export default function ValidaRegisterPassword() {
    const { password, setPassword,
        numberValidation,
        uppercaseValidation, 
        lowercaseValidation, 
        charValidation, 
        setCharValidation,
        setUppercaseValidation,
        setLowercaseValidation,
        setNumberValidation, setPasswordValidation } = useContext(RegisterUserContext);
    const [inactive, setInactive] = useState(false);
    const validations = [numberValidation, uppercaseValidation, lowercaseValidation, charValidation];
   
    useEffect(() => {
        const numberValidation = /[0-9]/;
        const lowercaseValidation = /[a-z]/;
        const uppercaseValidation = /[A-Z]/;


        password.length < 6 ? setCharValidation(false) : setCharValidation(true);
        numberValidation.test(password) ? setNumberValidation(true) : setNumberValidation(false);
        lowercaseValidation.test(password) ? setLowercaseValidation(true) : setLowercaseValidation(false);
        uppercaseValidation.test(password) ? setUppercaseValidation(true) : setUppercaseValidation(false);
     
    }, [password])

    function validatePassword() {
        validations.every(allTrue) ? setPasswordValidation(true) : setPasswordValidation(false);
    }

    function allTrue(validation: boolean) {
        return validation == true;
    }


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
             onBlur={() => (validatePassword())}
            onChange={(event) => (setPassword(event.target.value))}/>
            <img 
             className={classNames({
                [styles.iconNo]: inactive
            })}src={imgPassword} alt="Password"/>   
        </div>
        
    )
 
    
    }
