import styles from "./styles.module.scss";

import CheckBox from "@/components/CheckButton";

interface SystemProp {
  showOptions?: boolean;
}

export default function System({ showOptions }: SystemProp) {
  return (
    <div style={{ width: "100%" }}>
      <div className={`${styles.row} ${styles.wraper}`}>
        <p className={styles.description}>Permitir acesso padrão ao sistema</p>
        {showOptions && <CheckBox checked={false} onChange={() => ({})} />}
      </div>

      <div className={`${styles.row} ${styles.wraper}`}>
        <p className={styles.description}>Permitir acesso apenas ao calendário de agendamentos</p>
        {showOptions && <CheckBox checked={false} onChange={() => ({})} />}
      </div>

      <div className={`${styles.row} ${styles.wraper}`}>
        <p className={styles.description}>Permitir acesso apenas ao calendário de agendamentos</p>
        {showOptions && <CheckBox checked={false} onChange={() => ({})} />}
      </div>

      <div className={`${styles.row} ${styles.wraper}`}>
        <p className={styles.description}>Permitir acesso apenas ao calendário de agendamentos</p>
        {showOptions && <CheckBox checked={false} onChange={() => ({})} />}
      </div>

      <div className={`${styles.row} ${styles.wraper}`}>
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
