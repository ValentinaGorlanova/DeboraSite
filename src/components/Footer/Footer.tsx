import Link from "next/link";
import styles from "./footer.module.scss";

export function Footer() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500&family=Epilogue:ital,wght@0,300;0,500;0,600;0,700;1,400&family=Montserrat:wght@300;400;500&family=Mukta:wght@300;400;500&family=Playfair+Display&family=Readex+Pro:wght@300;400&display=swap"
        rel="stylesheet"
      />
      <div className={styles.container}>
        <Link href="/">
          <img src="/logo1.png" alt="" className={styles.logo} />
        </Link>
        <h5 className={styles.copy}>Copyright © 2022 Dra.Deborah Barros - Todos os Direitos Reservados</h5>

        <h5 className={styles.credit}>Desenvolvido por:</h5>
        <Link href="https://gethash.com.br">
          <img src="/logo2.png" alt="gethash" className={styles.logo1} />
        </Link>
      </div>
    </>
  );
}
