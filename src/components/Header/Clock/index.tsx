import styles from "./Clock.module.scss";

export default function Clock() {
    const date = new Date();
    return(
    
            <div className={styles.ClockContainer}>
            <div className={styles.Clock}>

    <span className={styles.number}>{date.getHours()}</span>
    <span className={styles.spots}>:</span><span className={styles.number}>{date.getMinutes()}</span>
            </div>
            <div className={styles.clockTextContainer}>
                <span className={styles.text}>
            {`${date.toLocaleDateString('pt-br', { weekday:"long", month:"long", day:"numeric"})}
                de ${date.getFullYear()}`
                    }
                </span>
            </div>
            </div>
        
    );
}