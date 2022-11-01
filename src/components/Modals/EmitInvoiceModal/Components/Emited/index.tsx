
import styles from "../../styles.module.scss";

export default function Emited () {
    return(
        <div className={styles.title_container}>
            <h3>
            Nota fiscal emitida!
            </h3>

            <h3>
            Deseja enviar a nota fiscal?
            </h3>
        </div>

    )
}