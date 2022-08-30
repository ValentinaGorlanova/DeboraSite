import { FaPen } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import styles from "./styles.module.scss";

import { EditUserDataModal } from "@/components/EditUserDataModal";

export default function PatientData() {
  return (
    <div style={{ width: "100%" }}>
      <div className={styles.item}>
        <h3>Nome do pacient</h3>

        <div className={styles.row}>
          <p>Iniciado: 00/00/00</p>
          <p>Consutas realizadas: 04</p>
          <p>Número de faltas: 01</p>
          <p>Consultas previstas: 10</p>

          <div>
            <EditUserDataModal initialTab={3}>
              <button className={styles.button}>
                <FaPen />
              </button>
            </EditUserDataModal>
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
          <p>Consutas realizadas: 04</p>
          <p>Número de faltas: 01</p>
          <p>Consultas previstas: 10</p>

          <div>
            <EditUserDataModal initialTab={3}>
              <button className={styles.button}>
                <FaPen />
              </button>
            </EditUserDataModal>
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
          <p>Consutas realizadas: 04</p>
          <p>Número de faltas: 01</p>
          <p>Consultas previstas: 10</p>

          <div>
            <EditUserDataModal initialTab={3}>
              <button className={styles.button}>
                <FaPen />
              </button>
            </EditUserDataModal>
            <button className={styles.button}>
              <IoMdCloseCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
