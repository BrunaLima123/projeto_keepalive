import styles from "./Clock.module.scss";

export default function Clock() {
    const date = new Date();
    return(
        <>
            <div className={styles.timeContainer}>
    <span className={styles.number}>{date.getHours()}</span>
    <span className={styles.division}>:</span><span className={styles.number}>{date.getMinutes()}</span>
            </div>
            <div className={styles.timeTextContainer}>
                <span className={styles.timeTextContainer__text}>
            {`${date.toLocaleDateString('pt-br', { weekday:"long", month:"long", day:"numeric"})}
                de ${date.getFullYear()}`
                    }
                </span>
            </div>
        </>
    );
}