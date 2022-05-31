// import Link from "next/link";
import { ModalLogin } from "./ModalLogin";
import styles from "./styles.module.scss";

export function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.imagesLeft}>
        <img className={styles.img1} src="/imgLoginLeft1.png" alt="Figura ponto de interrogação" />
        <img src="/imgLoginLeft.png" alt="Figura de mulher sentada em um sofá azul" />
      </div>
      <img className={styles.imageRight} src="/imgLoginRight.png" alt="Figura de homem sentado em um sofá azul" />

      <ModalLogin />
    </div>
  );
}
