import styles from "../../styles.module.scss";
import CheckButton from "@/components/CheckButton";

export default function AccessConfig() {
  return (
    <>
      <div className={styles.RowForm}>
        <p>Permitir acesso padrão ao sistema</p>
        <CheckButton checked={false} onChange={() => ({})} />
      </div>

      <div className={styles.RowForm}>
        <p>Permitir acesso apenas ao calendário de agendamentos</p>
        <CheckButton checked onChange={() => ({})} />
      </div>

      <div className={styles.RowForm}>
        <p>Permitir acesso apenas ao calendário de agendamentos</p>
        <CheckButton checked={false} onChange={() => ({})} />
      </div>

      <div className={styles.RowForm}>
        <p>Permitir acesso apenas ao calendário de agendamentos</p>
        <CheckButton checked onChange={() => ({})} />
      </div>

      <div className={styles.RowForm}>
        <p>Desativar conta</p>
        <CheckButton checked={false} onChange={() => ({})} />
      </div>

      <div className={`${styles.RowForm} ${styles.row}`}>
        <div>
          <h3>Ativa desde de</h3>
          <p>00/00/00</p>
        </div>

        <div>
          <h3>Inativa desde de</h3>
          <p>00/00/00</p>
        </div>
      </div>
    </>
  );
}
