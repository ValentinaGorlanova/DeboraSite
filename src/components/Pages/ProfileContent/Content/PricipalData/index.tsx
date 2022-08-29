import { BsFillCameraFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import styles from "./styles.module.scss";

export default function PrincipalData() {
  return (
    <>
      <div>
        <div className={styles.userContainer}>
          <FaUser />

          <div className={styles.logoCamera}>
            <BsFillCameraFill />
          </div>
        </div>
      </div>

      <div className={styles.column}>
        <div>
          <h3>Nome Completo</h3>
          <p>Debora Barros</p>
        </div>

        <div>
          <h3>CRP</h3>
          <p>000 000 0</p>
        </div>

        <div>
          <h3>CPF</h3>
          <p>000 000 000</p>
        </div>

        <div>
          <h3>Endereço</h3>
          <p>R. Aureliano Guimerães, 172/150 - Conjunto 819 - 8 andar - Vila Andrade</p>
          <p>São Paulo - SP</p>
        </div>
      </div>

      <div className={styles.column}>
        <div>
          <h3>Data de nascimento</h3>
          <p>00/00/00</p>
        </div>

        <div>
          <h3>Email</h3>
          <p>nome-contato@gmail.com</p>
        </div>

        <div>
          <h3>Telefone</h3>
          <p>+55 (11) 99999-9999</p>
        </div>
      </div>
    </>
  );
}
