import styles from "../../styles.module.scss";

export default function EditContact() {

  return (
    <>
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
      <div className={styles.InputWrapper}>
        <label className={styles.Label} htmlFor="cep">
          CEP
        </label>
        <input className={styles.Input} type="text" id="cep" placeholder="00000-00" />
      </div>
      <div className={styles.InputWrapper} style={{"paddingRight": "0",}}>
        <label className={styles.Label} htmlFor="street">
          Rua
        </label>
        <input className={styles.Input} type="text" id="street" placeholder="nome da rua"  />
      </div>
      <div className={styles.InputWrapper}>
        <label className={styles.Label} htmlFor="district">
        Bairro
        </label>
        <input className={styles.Input} type="text" id="district" placeholder="nome do bairro" />
      </div>
      <div className={styles.InputWrapper}>
        <label className={styles.Label} htmlFor="city">
          Cidade
        </label>
        <input className={styles.Input} type="text" id="city" placeholder="cidade"/>
      </div>
      <div className={styles.InputWrapper}>
        <label className={styles.Label} htmlFor="state">
        Estado
        </label>
        <input className={styles.Input} type="text" id="state" placeholder="estado" />
      </div>
    </>
  );
}
