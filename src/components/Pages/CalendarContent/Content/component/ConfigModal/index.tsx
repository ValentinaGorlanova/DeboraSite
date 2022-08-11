import { ReactElement, useState } from "react";
import { GrClose } from "react-icons/gr";
import CheckButton from "../CheckButton";
import styles from "./styles.module.scss";

interface ModalConfigProp {
  children?: ReactElement;
}

export default function ConfigModal({ children }: ModalConfigProp) {
  const [showModal, setShowModal] = useState(false);

  const [checkBoxStatus, setCheckBoxStatus] = useState(true);
  const [checkBoxPayment, setCheckBoxPayment] = useState(false);

  function handleCheckBoxStatus() {
    setCheckBoxStatus((state) => !state);
  }

  function handleCheckBoxPayment() {
    setCheckBoxPayment((state) => !state);
  }

  return (
    <>
      <div onClick={() => setShowModal(!showModal)}>{children}</div>

      <div className={`${styles.bgModal} ${showModal ? styles.show : ""}`}>
        <div className={styles.modal}>
          <button className={styles.closeButton} onClick={() => setShowModal(!showModal)}>
            <GrClose />
          </button>
          <h2>Configuração da agenda</h2>

          <div className={`${styles.section} ${styles.wrapp}`}>
            <div className={styles.textContainer}>
              <h3>Visualização de tempo:</h3>
              <p>
                Quais intervalos de tempo padrão que <br /> aparecem na sua agenda.
              </p>
            </div>

            <div>
              <select name="time-interval">
                <option value="">De 30 em 30 minutos</option>
              </select>
            </div>
          </div>

          <div className={`${styles.section} ${styles.wrapp}`}>
            <div className={styles.textContainer}>
              <h3>Inicio e termino de atendimentos:</h3>
              <p>Aqui você pode ajustar o inicio e termino do seu horario de trabalho</p>
            </div>

            <div>
              <label>
                <p>Inicio</p>
                <input type="time" name="start-time" />
              </label>

              <label>
                <p>Termino</p>
                <input type="time" name="end-time" />
              </label>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.textContainer}>
              <h3>Duração padrão de sessoes</h3>
              <p>Deixe um harario padrão de duração das suas sessoes</p>
            </div>

            <div className={styles.align}>
              <select name="time-section">
                <option value="50">50 min</option>
              </select>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.textContainer}>
              <h3>Visualizar presenças</h3>
              <p>Saiba o status de confirmação de consultas</p>
            </div>

            <div className={styles.align}>
              <CheckButton checked={checkBoxStatus} onChange={() => handleCheckBoxStatus()} />
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.textContainer}>
              <h3>Visualizar pagamentos</h3>
              <p>Saiba o status de pagamentos realizados pelos pacientes</p>
            </div>

            <div className={styles.align}>
              <CheckButton checked={checkBoxPayment} onChange={() => handleCheckBoxPayment()} />
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <button className={styles.saveButton}>Salvar alterações</button>
          </div>
        </div>
      </div>
    </>
  );
}
