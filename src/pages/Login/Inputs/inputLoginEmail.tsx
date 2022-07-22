import { UserContext } from 'common/context/user';
import { useContext, useState, useEffect} from 'react';
import imgUser from 'assets/images/icon-user.png';
import styles from './inputLogin.module.scss';
import classNames from "classnames";

export default function InputLoginEmail() {
    const { email, setEmail } = useContext(UserContext);
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
         <input  className={classNames({[styles["userActive"]]: inactive,})}
         type="text" placeholder="Usuário" value={ email } 
         onChange={(event) => (setEmail(event.target.value))}

          />
             <img  className={classNames({
                [styles.iconNo]: inactive})}
             src={imgUser} alt="User"/>
        </div>
    )
}
