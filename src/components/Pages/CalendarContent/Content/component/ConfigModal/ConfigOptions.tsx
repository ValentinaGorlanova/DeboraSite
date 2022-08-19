import { useState, ChangeEvent } from "react";
import CheckButton from "../../../../../CheckButton";
import styles from "./styles.module.scss";

import { useConfigContext } from "@/lib/configContext";

interface ConfigProps {
  onClickButton: () => void;
}

export default function ConfigOptions({ onClickButton }: ConfigProps) {
  const { showQueryStatus, setShowQueryStatus, time, setTimeStart, setTimeEnd, setTimeInterval, setSectionTime } = useConfigContext();
  const [checkBoxPayment, setCheckBoxPayment] = useState(false);

  function handleCheckBoxStatus() {
    setShowQueryStatus(!showQueryStatus);
  }

  function handleCheckBoxPayment() {
    setCheckBoxPayment((state) => !state);
  }

  function handleChangeInitTime(element: ChangeEvent<HTMLInputElement>) {
    const inputElement = element.target as HTMLInputElement;
    setTimeStart(inputElement.value);
  }

  function handleChangeEndTime(element: ChangeEvent<HTMLInputElement>) {
    const inputElement = element.target as HTMLInputElement;
    setTimeEnd(inputElement.value);
  }

  function handleSelectInterval(element: ChangeEvent<HTMLSelectElement>) {
    const inputElement = element.target as HTMLSelectElement;
    setTimeInterval(inputElement.value);
  }

  function handleChangeSectionTime(element: ChangeEvent<HTMLSelectElement>) {
    const selectElement = element.target as HTMLSelectElement;
    setSectionTime(selectElement.value);
  }

  return (
    <>
      <h2>Configuração da agenda</h2>

      <div className={`${styles.section} ${styles.wrapp}`}>
        <div className={styles.textContainer}>
          <h3>Visualização de tempo:</h3>
          <p>
            Quais intervalos de tempo padrão que <br /> aparecem na sua agenda.
          </p>
        </div>

        <div>
          <select name="time-interval" onChange={handleSelectInterval}>
            <option value="30">De 30 em 30 minutos</option>
            <option value="45">De 45 em 45 minutos</option>
            <option value="60" selected>
              De 1 em 1 hora
            </option>
            <option value="120">De 2 em 2 hora</option>
          </select>
        </div>
      </div>

      <div className={`${styles.section} ${styles.wrapp}`}>
        <div className={styles.textContainer}>
          <h3>Início e término de atendimentos:</h3>
          <p>Aqui você pode ajustar o início e término do seu hórario de trabalho</p>
        </div>

        <div>
          <label>
            <p>Início</p>
            <input type="time" name="start-time" value={time.start} onChange={handleChangeInitTime} />
          </label>

          <label>
            <p>Término</p>
            <input type="time" name="end-time" value={time.end} onChange={handleChangeEndTime} />
          </label>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.textContainer}>
          <h3>Duração padrão de sessões</h3>
          <p>Deixe um hórario padrão de duração das suas sessões</p>
        </div>

        <div className={styles.align}>
          <select name="time-section" onChange={handleChangeSectionTime}>
            <option value="30">50 min</option>
            <option value="50" selected>
              50 min
            </option>
            <option value="60">50 min</option>
          </select>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.textContainer}>
          <h3>Visualizar presenças</h3>
          <p>Saiba o status de confirmação de consultas</p>
        </div>

        <div className={styles.align}>
          <CheckButton checked={showQueryStatus} onChange={() => handleCheckBoxStatus()} />
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

      <div className={styles.section}>
        <div className={styles.textContainer}>
          <h3>Bloquear hórarios</h3>
          <p>Faça o bloqueio de hórarios para impedir agendamento em determinados hórarios do dia</p>
        </div>

        <div className={styles.align}>
          <button className={styles.buttonLock} onClick={onClickButton}>
            Bloquear hórarios
          </button>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.saveButton}>Salvar alterações</button>
      </div>
    </>
  );
}
