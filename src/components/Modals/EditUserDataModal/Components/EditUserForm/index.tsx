import styles from "../../styles.module.scss";

export default function EditUserForm() {
  return (
    <>
      <div className={styles.InputWrapper}>
        <label className={styles.Label} htmlFor="name">
          Nome completo
        </label>
        <input className={styles.Input} type="text" id="name" placeholder="Nome do profissional" />
      </div>
      <div className={styles.InputWrapper}>
        <label className={styles.Label} htmlFor="CPF">
          CPF
        </label>
        <input className={styles.Input} type="text" id="CPF" placeholder="000.000.000 - 00" />
      </div>
      <div className={styles.InputWrapper}>
        <label className={styles.Label} htmlFor="CRP">
          CRP
        </label>
        <input className={styles.Input} type="text" id="CRP" placeholder="00.000 - 00" />
      </div>
      <div className={styles.InputWrapper}>
        <label className={styles.Label} htmlFor="CRP">
          Telefone
        </label>
        <input className={styles.Input} type="text" id="CRP" placeholder="(00) 0 0000 0000" />
      </div>
      <div className={styles.InputWrapper}>
        <label className={styles.Label} htmlFor="Email">
          Email
        </label>
        <input className={styles.Input} type="text" id="Email" placeholder="nome@email.com" />
      </div>
      <div className={styles.InputWrapper}>
        <label className={styles.Label} htmlFor="born">
          Data de nascimento
        </label>
        <input className={styles.Input} type="text" id="born" placeholder="00/00/00" />
      </div>
    </>
  );
}
