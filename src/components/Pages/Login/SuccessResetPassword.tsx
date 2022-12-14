import styles from "./Success.module.scss";

export function SuccessResetPassword() {
  return (
    <div className={styles.container}>
      <div className={styles.imagesLeft}>
        <img className={styles.img1} src="/imgLoginLeft1.png" alt="Figura ponto de interrogação" />
        <img src="/imgLoginLeft.png" alt="Figura de mulher sentada em um sofá azul" />
      </div>
      <img className={styles.imageRight} src="/imgLoginRight.png" alt="Figura de homem sentado em um sofá azul" />

      <div className={styles.content}>
        <h1>Sua senha foi alterada com sucesso</h1>
        <img src="/imgSendEmail.png" alt="Figura de um envelope azul" />
      </div>
    </div>
  );
}
