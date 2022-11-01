import styles from "./styles.module.scss";

import DropFile from "@/components/Modals/DropFile";

export default function ServiceData() {
  return (
    <div style={{ width: "100%" }}>
      <div>
        <h3 className={styles.title}>Cargo</h3>
        <p className={styles.description}>Psicologo</p>
      </div>

      <div>
        <h3 className={styles.title}>Email</h3>
        <p className={styles.description}>nome-contato@gmail.com</p>
      </div>

      <div className={styles.row}>
        <div className={styles.row50}>
          <h3 className={styles.title}>Abordagens utilizadas</h3>
          <p className={styles.description}>
            <input type="checkbox" id="option1" />
            <label htmlFor="option1">Terapia Cognitiva Comportamental</label>
          </p>

          <p className={styles.description}>
            <input type="checkbox" id="option2" />
            <label htmlFor="option2">Terapia Cognitiva Comportamental</label>
          </p>

          <p className={styles.description}>
            <input type="checkbox" id="option3" />
            <label htmlFor="option3">Terapia Cognitiva Comportamental</label>
          </p>
        </div>

        <div className={styles.row50}>
          <h3 className={styles.title}>Convênios</h3>

          <p className={styles.description}>
            <input type="checkbox" id="option4" />
            <label htmlFor="option4">Nome do convênio</label>
          </p>

          <p className={styles.description}>
            <input type="checkbox" id="option5" />
            <label htmlFor="option5">Nome do convênio</label>
          </p>

          <p className={styles.description}>
            <input type="checkbox" id="option6" />
            <label htmlFor="option6">Nome do convênio</label>
          </p>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.row50}>
          <h3 className={styles.title}>Adicionar curriculo</h3>
          <DropFile onDropFile={(f) => f} />
        </div>

        <div className={styles.row50}>
          <h3 className={styles.title}>Dados bancários</h3>
          <p className={styles.description}>Codigo PIX</p>
          <p className={styles.description}>Conta bancária</p>
        </div>
      </div>
    </div>
  );
}
