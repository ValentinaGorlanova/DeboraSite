import { Cross2Icon } from "@radix-ui/react-icons";
import styles from "./styles.module.scss";

interface ModalProp {
  show: boolean;
  onClose: () => void;
}

export default function NewQueryModal({ show, onClose }: ModalProp) {
  return (
    <div className={`${styles.bgModal} ${show ? styles.show : ""}`}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={() => onClose()}>
          <Cross2Icon />
        </button>

        <h2>Cadastrar nova consulta</h2>

        <div>
          <p className={styles.title}>Quem e o cliente dessa sessão?</p>

          <div className={styles.fieldsContainer}>
            <input type="text" placeholder="Digite um paciente" />

            <div>
              <button className={styles.newButton}>Cadastrar novo paciente</button>
            </div>
          </div>
        </div>

        <div>
          <p className={styles.title}>Data e Horario?</p>
          <div className={styles.fieldsContainer}>
            <input type="date" />

            <div>
              <input type="time" />
              <input type="time" />
            </div>
          </div>
        </div>

        <div>
          <div className={styles.fieldsContainer}>
            <p className={`${styles.title} ${styles.aux}`}>Essa consulta será:</p>

            <div className={styles.row}>
              <label className={styles.label}>
                <input type="radio" />
                Presencial
              </label>

              <label className={styles.label}>
                <input type="radio" />
                Presencial
              </label>
            </div>
          </div>
        </div>

        <div>
          <p className={styles.title}>Qual a recorrência</p>

          <select className={styles.select}>
            <option>Somente esse horario</option>
          </select>
        </div>

        <div className={styles.buttonContainer}>
          <button>Salvar cadastro</button>
        </div>
      </div>
    </div>
  );
}
