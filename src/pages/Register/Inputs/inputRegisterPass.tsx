import { RegisterUserContext } from 'common/context/registerUser';
import { useContext} from 'react';
import imgPassword from 'assets/images/icon-password.png';
import styles from './inputRegister.module.scss';

export default function InputSignUpPassword() {
    const { password, setPassword } = useContext(RegisterUserContext);
 

    return (
        <div className={styles.inputContainer}>
            <input type="password" placeholder="Senha" value={ password }
            onChange={(event) => (setPassword(event.target.value))}/>
            <img src={imgPassword} alt="Password"/>
        </div>
    )
}   