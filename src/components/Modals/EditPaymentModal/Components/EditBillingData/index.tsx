import { DropDown } from "../../../ModalTemplate/DropdownElement/ModalDropDown"

import styles from "../../styles.module.scss";

export const pagInfo = [
  {
    id: "profissional",
    name: "Profissional",
    options: ["Débora Barros", "Ana Cardoso", "Miguel Faria", "Carla Vieira"],
  },
  {
    id: "atendimento",
    name: "Atendimento",
    options: ["Psicólogo", "Clinico Geral", "Oftalmologista", "Psiquitra"],
  },
  {
    id: "convenio",
    name: "Convênio",
    options: ["Unimed", "Amil", "Alianz", "Exemplo"],
  },
  {
    id: "pagTipo",
    name: "Tipo de Pagamento",
    options: ["Cartão de Crédito", "Débito", "Pix", "Dinhero"],
  }
];


export default function CreateBillingData() {

  return (
    <>
    {pagInfo.slice(0, pagInfo.length-1).map((select, i) => <DropDown select={select} i={i} paddingSides="0 84px"/>)}
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
      <div className={styles.InputWrapper}>
        <label className={styles.Label} htmlFor="consultas">
        Consultas
        </label>
        <input className={styles.Input} type="text" id="consultas" placeholder="0" />
      </div>
      <div className={styles.InputWrapper}>
        <label className={styles.Label} htmlFor="total">
        Valor total
        </label>
        <input className={styles.Input} type="text" id="total" placeholder="00,00" />
      </div>

      {pagInfo.map((select, i) => i == pagInfo.length - 1 ? <DropDown select={select} i={i} paddingSides="0 84px"/> : null)}
    </>
  );
}
