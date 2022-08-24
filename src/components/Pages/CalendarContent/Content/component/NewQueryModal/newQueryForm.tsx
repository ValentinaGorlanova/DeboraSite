import { ChangeEvent, useState } from "react";
import styles from "./styles.module.scss";

import InputSearchPatient from "./components/SearchPatient";

interface ModalProp {
  onShowNewPacient: () => void;
  date: Date;
}

export default function NewQueryModal({ onShowNewPacient, date }: ModalProp) {
  const [selectOption, setSelectOption] = useState("op1");
  const [configOption, setConfigOption] = useState<string | null>(null);
  const [time, setTime] = useState("14:00");

  const splitDate = date.toLocaleDateString("pt-BR").split("/");

  function handleSelect(element: ChangeEvent<HTMLSelectElement>) {
    const select = element.target as HTMLSelectElement;
    setSelectOption(select.value);
  }

  function handleChangeConfig(element: ChangeEvent<HTMLInputElement>) {
    const select = element.target as HTMLInputElement;
    setConfigOption(select.value);
  }

  function handleChangeTime(element: ChangeEvent<HTMLInputElement>) {
    const inputElement = element.target as HTMLInputElement;
    setTime(inputElement.value);
  }

  return (
    <>
      <h2>Cadastrar nova consulta</h2>

      <div>
        <p className={styles.title}>Quem e o cliente dessa sessão?</p>

        <div className={styles.fieldsContainer}>
          <InputSearchPatient />

          <div>
            <button className={styles.newButton} onClick={onShowNewPacient}>
              Cadastrar novo paciente
            </button>
          </div>
        </div>
      </div>

      <div>
        <p className={styles.title}>Data e Horario?</p>
        <div className={styles.fieldsContainer}>
          <input type="date" value={`${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`} disabled />

          <div>
            <input type="time" value={time} onChange={handleChangeTime} />
            <input type="time" />
          </div>
        </div>
      </div>

      <div>
        <div className={styles.fieldsContainer}>
          <p className={`${styles.title} ${styles.aux}`}>Essa consulta será:</p>

          <div className={styles.row}>
            <label className={styles.label}>
              <input type="radio" name="modo" />
              Presencial
            </label>

            <label className={styles.label}>
              <input type="radio" name="modo" />
              Online
            </label>
          </div>
        </div>
      </div>

      <div>
        <p className={styles.title}>Qual a recorrência</p>

        <select className={styles.select} onChange={handleSelect}>
          <option value="op1">Somente esse horário</option>
          <option value="op2">Semanalmente</option>
          <option value="op3">Quizenalmente</option>
          <option value="op4">Semestral</option>
        </select>
      </div>

      {selectOption !== "op1" && (
        <div className={styles.column}>
          <label className={styles.label}>
            <input type="radio" name="modoRec" value="auto" onChange={handleChangeConfig} />
            As sessões acontecerão toda{" "}
            <span className={styles.bold}>
              {date.toLocaleDateString("pt-BR", { weekday: "long" })} as {time}
            </span>
          </label>

          <label className={styles.label}>
            <input type="radio" name="modoRec" value="manual" onChange={handleChangeConfig} />
            Quero configurar a recorrência
          </label>
        </div>
      )}

      {configOption === "manual" && (
        <div className={styles.column}>
          <h3>Quantas sessões cadastrar</h3>
          <input type="number" min={2} placeholder="1 sessões" />
        </div>
      )}

      <div className={styles.buttonContainer}>
        <button>Salvar cadastro</button>
      </div>
    </>
  );
}
