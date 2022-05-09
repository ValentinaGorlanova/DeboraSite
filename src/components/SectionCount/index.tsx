import styles from "./styles.module.scss";

export function SectionCount() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1>
            + de 15 anos <br /> <span> de experiência</span>
          </h1>
        </div>
        <div>
          <h1>
            {" "}
            +300 pacientes <br /> <span> atendidos</span>
          </h1>
        </div>
        <div>
          <h1>
            {" "}
            +12.000 horas <br /> <span> em consulta</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
