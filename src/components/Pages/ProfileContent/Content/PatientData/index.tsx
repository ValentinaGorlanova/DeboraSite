import { FaPen } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import styles from "./styles.module.scss";

export default function PatientData() {
  return (
    <div style={{ width: "100%" }}>
      <div className={styles.item}>
        <h3>Nome do pacient</h3>

        <div className={styles.row}>
          <p>Iniciado: 00/00/00</p>
          <p>Realizadas: 04</p>
          <p>Faltas: 01</p>
          <p>Previstas: 10</p>

          <div>
            <button className={styles.button}>
              <FaPen />
            </button>
            <button className={styles.button}>
              <IoMdCloseCircle />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <h3>Nome do pacient</h3>

        <div className={styles.row}>
          <p>Iniciado: 00/00/00</p>
          <p>Realizadas: 04</p>
          <p>Faltas: 01</p>
          <p>Previstas: 10</p>

          <div>
            <button className={styles.button}>
              <FaPen />
            </button>
            <button className={styles.button}>
              <IoMdCloseCircle />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <h3>Nome do pacient</h3>

        <div className={styles.row}>
          <p>Iniciado: 00/00/00</p>
          <p>Realizadas: 04</p>
          <p>Faltas: 01</p>
          <p>Previstas: 10</p>

          <div>
            <button className={styles.button}>
              <FaPen />
            </button>
            <button className={styles.button}>
              <IoMdCloseCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
