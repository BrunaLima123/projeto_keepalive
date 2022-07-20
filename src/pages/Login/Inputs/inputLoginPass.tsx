
import { UserContext } from 'common/context/user';
import { useContext } from 'react';
import imgPassword from 'assets/images/icon-password.png';
import styles from './inputLogin.module.scss';

export default function InputLoginPassword() {
    const { password, setPassword } = useContext(UserContext);
   

    return (
        <div className={styles.inputContainer}>
          <input type="password" placeholder="Senha" value={ password }
            onChange={(event) => (setPassword(event.target.value))}/>
            <img src={imgPassword} alt="Password"/>
        </div>
    )
}