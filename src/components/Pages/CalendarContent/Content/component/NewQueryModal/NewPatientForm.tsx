import { BsArrowLeft } from "react-icons/bs";
import styles from "./styles.module.scss";

interface PacientProp {
  onBack: () => void;
}

export default function NewPatientForm({ onBack }: PacientProp) {
  return (
    <>
      <button className={styles.backButton} onClick={onBack}>
        <BsArrowLeft />
      </button>

      <h2>Novo paciente</h2>

      <div className={styles.fieldsContainer}>
        <p className={styles.title}>Profissinal responsavel*:</p>

        <div className={styles.newPatient}>
          <select required className={styles.select}>
            <option disabled selected>
              Selecione um profissinal
            </option>
          </select>
        </div>
      </div>

      <div className={styles.fieldsContainer}>
        <p className={styles.title}>Nome do paciente*:</p>

        <div className={styles.newPatient}>
          <input type="text" placeholder="Digite o nome do paciente" required className={styles.fill} />
        </div>
      </div>

      <div className={styles.fieldsContainer}>
        <p className={styles.title}>Idade:</p>

        <div className={styles.newPatient}>
          <input type="number" placeholder="Ex: 26" className={styles.age} />
        </div>
      </div>

      <div className={styles.fieldsContainer}>
        <p className={styles.title}>Telefone:</p>

        <div className={styles.newPatient}>
          <input type="text" placeholder="(__) 9 0000-0000" className={styles.phoneNumber} />
        </div>
      </div>

      <div className={styles.fieldsContainer}>
        <p className={styles.title}>Idade:</p>

        <div className={styles.newPatient}>
          <input type="email" placeholder="Ex: nome.sobrenome@gmail.com" />
        </div>
      </div>

      <div className={styles.fieldsContainer}>
        <p className={styles.title}>Valor da sessão:</p>

        <div className={styles.newPatient}>
          <input type="text" placeholder="R$ 0,00" className={styles.price} />
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button>Salvar cadastro</button>
      </div>
    </>
  );
}
