import styles from "./styles.module.scss";

export default function History() {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>Histórico pessoal</h2>
      </div>

      <div>
        <h3 className={styles.title}>Histórico pessoal (Gestão, infãncia, adolescência)</h3>
        <p className={styles.description}>Débora Barros</p>
      </div>

      <div>
        <h3 className={styles.title}>Hobbies, interesses e habilidades</h3>
        <p className={styles.description}>00/00/00</p>
      </div>

      <div>
        <h2 className={styles.title}>Alimentação, sono e atividade física</h2>
        <p className={styles.description}>Débora Barros</p>
      </div>

      <div>
        <h2 className={styles.title}>Hobbies, interesses e habilidades</h2>
        <p className={styles.description}>Débora Barros</p>
      </div>
    </div>
  );
}
