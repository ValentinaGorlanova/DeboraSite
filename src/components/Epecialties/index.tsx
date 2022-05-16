import React from "react";
import styles from "./styles.module.scss";

export function Epecialties() {
  return (
    <div className={styles.container} id="especialties">
      <div className={styles.left}>
        <img src="overlay.png" alt="Escrevendo" />
      </div>
      <div className={styles.rigth}>
        <div className={styles.content}>
          <h1>Especialidades atendidas</h1>
          <ul>
            <li>
              <img src="/iconEspecialtiesWhite.svg" alt="" />
              <p>Psicoterapia Individual Adolescentes</p>
            </li>
            <li>
              <img src="/iconEspecialtiesWhite.svg" alt="" />
              <p>Psicoterapia Individual Adultos</p>
            </li>
            <li>
              <img src="/iconEspecialtiesWhite.svg" alt="" />
              <p>Psicoterapia de Casal</p>
            </li>
            <li>
              <img src="/iconEspecialtiesWhite.svg" alt="" />
              <p>Avaliação Psicológica para Cirurgias</p>
            </li>
            <li>
              <img src="/iconEspecialtiesWhite.svg" alt="" />
              <p>Atendimento a funcionários de empresas privadas on site</p>
            </li>
            <li>
              <img src="/iconEspecialtiesWhite.svg" alt="" />
              <p>Atendimento Presencial</p>
            </li>
            <li>
              <img src="/iconEspecialtiesWhite.svg" alt="" />
              <p>Atendimento Online</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
