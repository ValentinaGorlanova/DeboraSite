import styles from "../../styles.module.scss";

import DropFile from "@/components/Modals/DropFile";

export default function EditUserData() {
  return (
    <>
      <div className={styles.InputWrapper}>
        <label className={styles.Label} htmlFor="role">
          Cargo
        </label>
        <input className={styles.Input} type="text" id="role" placeholder="Cargo do profissional" />
      </div>

      <div className={styles.LabelAndCheckboxContainer}>
        <label className={styles.Label} htmlFor="checkbox">
          Abordagens utilizadas
        </label>
        <div className={styles.CheckboxContainer}>
          <input type="checkbox" name="item" />
          <span className={styles.CheckboxLabel}>Terapia Cognitiva Comportamental</span>
        </div>
      </div>
      <div className={styles.LabelAndCheckboxContainer}>
        <label className={styles.Label} htmlFor="checkbox">
          Convenios
        </label>
        <div className={styles.CheckboxContainer}>
          <input type="checkbox" name="item" />
          <div className={styles.CheckboxLabel}>Nome de convênio</div>
        </div>
      </div>
      <div className={styles.UploadContainerWrapper}>
        <label className={styles.Label} htmlFor="checkbox">
          Adicionar curriculo
        </label>
        <DropFile onDropFile={(file) => file} />
      </div>
      <div className={styles.AccountDetailsWrapper}>
        <label className={styles.Label} htmlFor="checkbox">
          Dados bancarios
        </label>
        <p>Codigo Pix</p>
        <p>Conta bancaria</p>
      </div>
    </>
  );
}
