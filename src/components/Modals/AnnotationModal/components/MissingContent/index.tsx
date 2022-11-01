import { UploadImage } from "../../../../Images/UploadImage";

import styles from "./styles.module.scss";

export default function MissingContent() {
  return (
    <div className={styles.MissingContent}>
      <UploadImage />

      <div>
        <p>Você ainda não anexou nenhum arquivo para esse paciente.</p>
        <p>Adicinone arquivos no botão acima</p>
      </div>
    </div>
  );
}
