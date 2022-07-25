import styles from "./validaPassword.module.scss";
import { MdClose as Close } from "react-icons/md";
import { BiCheckDouble as Ok } from "react-icons/bi";
import classNames from "classnames";
import { useContext } from "react";
import { RegisterUserContext } from "common/context/registerUser";

export default function PasswordValidation() {
    const { 
        charValidation, 
        numberValidation,
        uppercaseValidation, 
        lowercaseValidation,

    } = useContext(RegisterUserContext);

    return (
        <>
            <div className={styles.checks}>
                <h3>Sua senha deverá conter:</h3>
                <div className={styles.check}>
                <p>Um número</p>
                <div className={styles.icons}>
                    <Close color="red" className={classNames({
                     [styles.invisible]: numberValidation,
                     [styles.validationIcon]: true
                                                  })} />
                         <Ok color="green" className={classNames({
                    [styles.invisible]: !numberValidation,
                    [styles.validationIcon]: true
                                                  })} />
                    </div>
                </div>
                <div className={styles.check}>
                    <p>Uma letra maiúscula</p>
                    <div className={styles.icons}>
                    <Close color="red" className={classNames({
                            [styles.invisible]: uppercaseValidation,
                            [styles.validationIcon]: true
                        })} />
                        <Ok color="green" className={classNames({
                            [styles.invisible]: !uppercaseValidation,
                            [styles.validationIcon]: true
                        })} />
                    </div>
                </div>
                <div className={styles.check}>
                    <p>Uma letra minúscula</p>
                    <div className={styles.icons}>
                    <Close color="red" className={classNames({
                            [styles.invisible]: lowercaseValidation,
                            [styles.validationIcon]: true
                        })} />
                        <Ok color="green" className={classNames({
                            [styles.invisible]: !lowercaseValidation,
                            [styles.validationIcon]: true
                        })} />
                    </div>
                </div>
                <div className={styles.check}>
                <p>6 caracteres</p>
                    <div className={styles.icons}>
                    <Close color="red" className={classNames({
                            [styles.invisible]: charValidation,
                            [styles.validationIcon]: true
                        })} />
                        <Ok color="green" className={classNames({
                            [styles.invisible]: !charValidation,
                            [styles.validationIcon]: true
                        })} />
                    </div>
                </div>
            </div>
        </>
    );
}