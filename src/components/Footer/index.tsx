// import Link from "next/link";
import Link from "next/link";
import styles from "./styles.module.scss";

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <img src="/logoFooter.png" alt="Logo Debora" />
          <p>Copyright © 2022 Debora Barros - Todos os Direitos Reservados</p>
        </div>
        <div className={styles.right}>
          <p>Desenvolvido por:</p>
          <Link href="https://gethash.com.br/">
            <img src="/logoGet.png" alt="Logo GetHasch" />
          </Link>
        </div>
      </div>
    </div>
  );
}
