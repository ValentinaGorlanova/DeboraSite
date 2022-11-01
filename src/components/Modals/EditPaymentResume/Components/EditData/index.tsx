import { DropDown } from "../../../ModalTemplate/DropdownElement/ModalDropDown";
import styles from "../../styles.module.scss";

const select = {
  id: "convenio",
  name: "Convênio",
  options: ["Unimed", "Amil", "Alianz", "Exemplo"],
}

export default function EditData() {
  return (
    <>
      <div className={styles.InputWrapper}>
        <label className={styles.Label} htmlFor="name">
          Nome completo
        </label>
        <input className={styles.Input} type="text" id="name" placeholder="Nome do paciente" />
      </div>
      <div className={styles.InputWrapper}>
        <label className={styles.Label} htmlFor="CPF">
          CPF
        </label>
        <input className={styles.Input} type="text" id="CPF" placeholder="000.000.000 - 00" />
      </div>
      <div className={styles.InputWrapper}>
        <label className={styles.Label} htmlFor="Identidade">
        Identidade
        </label>
        <input className={styles.Input} type="text" id="Identidade" placeholder="00.000 - 00" />
      </div>
      <div className={styles.InputWrapper}>
        <label className={styles.Label} htmlFor="born">
          Data de nascimento
        </label>
        <input className={styles.Input} type="text" id="born" placeholder="00/00/00" style={{"width": "111px"}}/>
      </div>
      <div className={styles.InputWrapper}>
        <label className={styles.Label} htmlFor="personCharge">
        Nome do responsável
        </label>
        <input className={styles.Input} type="text" id="personCharge" placeholder="Nome da mãe" />
      </div>
      <DropDown select={select} i={0} paddingSides="0 68px"/>
      <div className={styles.InputWrapper}>
        <label className={styles.Label} htmlFor="value">
        Valor da Consulta
        </label>
        <input className={styles.Input} type="text"  id="value" placeholder="00,00" />
      </div>
      <div className={styles.InputWrapper}>
        <label className={styles.Label} htmlFor="desconto">
        Desconto
        </label>
        <input className={styles.Input} type="text"  id="desconto" placeholder="00,00" />
      </div>
    </>
  );
}
