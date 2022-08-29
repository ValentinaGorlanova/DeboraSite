import styles from "./styles.module.scss";

export default function System() {
  return (
    <div style={{ width: "100%" }}>
      <p className={styles.description}>Permitir acesso padrão ao sistema</p>
      <p className={styles.description}>Permitir acesso apenas ao calendário de agendamentos</p>
      <p className={styles.description}>Permitir acesso apenas ao calendário de agendamentos</p>
      <p className={styles.description}>Permitir acesso apenas ao calendário de agendamentos</p>

      <div className={styles.row}>
        <div>
          <h3 className={styles.title}>Ativa desde de</h3>
          <p className={styles.description}>00/00/00</p>
        </div>

        <div>
          <h3 className={styles.title}>Inativa desde de</h3>
          <p className={styles.description}>00/00/00</p>
        </div>
      </div>
    </div>
  );
}
