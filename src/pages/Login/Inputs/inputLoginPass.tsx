import { UserContext } from 'common/context/user';
import { useContext, useState, useEffect} from 'react';
import imgPassword from 'assets/images/icon-password.png';
import styles from './inputLogin.module.scss';
import classNames from "classnames";


export default function InputLoginPassword() {
    const { password, setPassword } = useContext(UserContext);
    const [inactive, setInactive] = useState(false);
   
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