import { RegisterUserContext } from 'common/context/registerUser';
import { useContext, useEffect, useState} from 'react';
import imgUser from 'assets/images/icon-user.png';
import classNames from "classnames";
import styles from './inputRegister.module.scss';

export default function InputSignUpEmail() {
    const { email, setEmail } = useContext(RegisterUserContext);
    const [inactive, setInactive] = useState(false);
    useEffect(()=> {
        if(email !== ""){
            setInactive(true);
        }else{
            setInactive(false);
        }
    }, [email])

    return (
        <div className={styles.inputContainer}>
            <input className={classNames({[styles["userActive"]]: inactive,})} 
            type="text" placeholder="Usuário" value={ email }
             onChange={(event) => (setEmail(event.target.value))}/>
            <img 
             className={classNames({
                [styles.iconNo]: inactive})}
                 src={imgUser} alt="User"/>
        </div>
    )
}