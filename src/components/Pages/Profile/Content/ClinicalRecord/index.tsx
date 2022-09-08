import styles from "./styles.module.scss";

export default function ClinicalRecord() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div>
          <h3 className={styles.title}>Nome completo</h3>
          <p className={styles.description}>Débora Barros</p>
        </div>

        <div>
          <h3 className={styles.title}>Idade</h3>
          <p className={styles.description}>00</p>
        </div>

        <div>
          <h3 className={styles.title}>Sexo</h3>
          <p className={styles.description}>xx</p>
        </div>
      </div>

      <div className={styles.row}>
        <div>
          <h3 className={styles.title}>Data de nacimento</h3>
          <p className={styles.description}>00/00/00</p>
        </div>

        <div>
          <h3 className={styles.title}>Est. Civil</h3>
          <p className={styles.description}>00/00/00</p>
        </div>

        <div>
          <h3 className={styles.title}>Profissão</h3>
          <p className={styles.description}>00/00/00</p>
        </div>
      </div>

      <div className={styles.secondSection}>
        <h2>Motivo da consulta</h2>

        <div>
          <h3 className={styles.title}>Principal motivo da consulta</h3>
          <p className={styles.description}>Débora Barros</p>
        </div>

        <div>
          <h3 className={styles.title}>Outras queixas</h3>
          <p className={styles.description}>00/00/00</p>
        </div>

        <div>
          <h3 className={styles.title}>Histórico da manifestação de sistomas</h3>
          <p className={styles.description}>00/00/00</p>
        </div>
      </div>
    </div>
  );
}
