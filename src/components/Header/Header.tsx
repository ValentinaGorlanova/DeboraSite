import { useState } from "react";
import Link from "next/link";
import { Button } from "../Button";
import styles from "./header.module.scss";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src="/logo_header.svg" alt="" className={styles.image} />
          <img src="/logoMobile.png" alt="" className={styles.imageMobile} />
        </div>
        <div className={styles.left}>
          <ul className={styles.nav_elements}>
            <li>
              <a href="#aboutme" className={styles.navLinks}>
                Sobre mim
              </a>
            </li>
            <li>
              <a href="#especialties" className={styles.navLinks}>
                Especialidades
              </a>{" "}
            </li>
            <li>
              <a href="#contact" className={styles.navLinks}>
                Contato
              </a>{" "}
            </li>
            <li>
              <a href="https://www.instagram.com/debora_barrospsico/" className={styles.navLinks} target="_blank" rel="noreferrer">
                Instagram
              </a>{" "}
            </li>
            <Link href="#consult">
              <li>
                <Button title="Agende sua consulta" />
              </li>
            </Link>
          </ul>
        </div>

        {/* ### Header Menu Mobile ###\ */}

        <Link href="#">
          <a className={styles.buttonMenuMobile} onClick={() => setOpenMenu(!openMenu)}>
            <img src="/header/buttonMenuMobile.svg" alt="Botão Menu Mobile" />
          </a>
        </Link>

        {openMenu && (
          <>
            <div className={styles.overlay} onClick={() => setOpenMenu(!openMenu)} />
            <div className={styles.containerMenuMobile}>
              <ul>
                <Link href="#">
                  <li>
                    <img src="/header/iconHome.svg" alt="Icone Home" />
                    <p>Inicio</p>
                  </li>
                </Link>

                <Link href="#">
                  <li>
                    <img src="/header/iconAbout.svg" alt="Icone About" />
                    <p>Sobre mim</p>
                  </li>
                </Link>

                <Link href="#">
                  <li>
                    <img src="/header/iconEspec.svg" alt="Icone Especialidades" />
                    <p>Especialidades</p>
                  </li>
                </Link>

                <Link href="#">
                  <li>
                    <img src="/header/iconInstagram.svg" alt="Icone Instagram" />
                    <p>Instagram</p>
                  </li>
                </Link>

                <Link href="#">
                  <li>
                    {" "}
                    <img src="/header/iconAgenda.svg" alt="Icone Agendar consulta" />
                    <p>Agende sua consulta</p>
                  </li>
                </Link>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
