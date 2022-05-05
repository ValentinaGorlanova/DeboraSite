import styles from "./header.module.scss";

export function Header() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@500&family=Playfair+Display&family=Readex+Pro:wght@300;400&display=swap"
        rel="stylesheet"
      />
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@500&family=Readex+Pro:wght@300;400&display=swap" rel="stylesheet" />
      <div className={styles.header}>
        <div className={styles.right}>
          <img src="/logo.png" alt="" className={styles.image} />
        </div>
        <div className={styles.left}>
          <ul className={styles.nav_elements}>
            <li>
              <a href="#sobremim" className={styles.navLinks}>
                Sobre mim
              </a>{" "}
            </li>
            <li>
              <a href="#especialidade" className={styles.navLinks}>
                {" "}
                Especialidades
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#contato" className={styles.navLinks}>
                Contato
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#instagram" className={styles.navLinks}>
                Instagram
              </a>{" "}
            </li>
          </ul>
          <button type="button">
            {" "}
            <a href="#id" className={styles.navBtn}>
              <span>Agende sua consulta</span>
            </a>{" "}
          </button>
        </div>
        <div className={styles.togglebtn}>
          <div className={styles.bar0}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>
    </>
  );
}
