import { RegisterUserContext } from 'common/context/registerUser';
import { useContext} from 'react';
import imgUser from 'assets/images/icon-user.png';
import styles from './inputRegister.module.scss';

export default function InputSignUpEmail() {
    const { email, setEmail } = useContext(RegisterUserContext);
 

    return (
        <div className={styles.inputContainer}>
            <input type="text" placeholder="Usuário" value={ email }
             onChange={(event) => (setEmail(event.target.value))}/>
            <img src={imgUser} alt="User"/>
        </div>
    )
}