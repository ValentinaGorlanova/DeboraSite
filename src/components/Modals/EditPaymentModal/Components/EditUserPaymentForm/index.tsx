import styles from "../../styles.module.scss";

export default function EditUserPaymentForm() {
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
      <div className={styles.InputWrapper}>
        <label className={styles.Label} htmlFor="CRP">
          Telefone
        </label>
        <input className={styles.Input} type="text" id="CRP" placeholder="(00) 0 0000 0000" />
      </div>
      <div className={styles.InputWrapper}>
        <label className={styles.Label} htmlFor="WA">
          Whatsapp
        </label>
        <input className={styles.Input} type="text" id="WA" placeholder="(00) 0 0000 0000" />
      </div>
      <div className={styles.InputWrapper} style={{"paddingRight": "0",}}>
        <label className={styles.Label} htmlFor="Email">
          Email
        </label>
        <input 
        className={styles.Input} 
        type="text" id="Email" 
        placeholder="nome_sobrenome@email.com"
        style={{"width": "267px"}} 
        />
      </div>
    </>
  );
}
