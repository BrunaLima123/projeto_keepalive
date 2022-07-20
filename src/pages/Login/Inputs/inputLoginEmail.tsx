import { UserContext } from 'common/context/user';
import { useContext} from 'react';
import imgUser from 'assets/images/icon-user.png';
import styles from './inputLogin.module.scss';

export default function InputLoginEmail() {
    const { email, setEmail } = useContext(UserContext);


    return (
        <div className={styles.inputContainer}>
         <input type="text" placeholder="Usuário" value={ email } 
         onChange={(event) => (setEmail(event.target.value))} />
             <img src={imgUser} alt="User"/>
        </div>
    )
}
