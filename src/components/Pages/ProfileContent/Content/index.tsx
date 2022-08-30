/* eslint-disable @typescript-eslint/no-var-requires */
// import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { BsCalendarCheckFill, BsFillCameraFill } from "react-icons/bs";
import { FaUserFriends, FaUser } from "react-icons/fa";
// import { FaUser } from "react-icons/fa";
// import { RiPencilFill } from "react-icons/ri";
// must go before plugins

import styles from "./styles.module.scss";
import PrincipalData from "./PricipalData";
import ServiceData from "./ServiceData";
import SystemData from "./System";
import PatientData from "./PatientData";
import { EditUserDataModal } from "@/components/EditUserDataModal";
import EditPassword from "@/components/EditPassword";
// import DropFile from "@/components/DropFile";
// The import order DOES MATTER here. If you change it, you'll get an error!
// const EventCalendar = require("react-event-calendar");

interface RenderTabProp {
  tab: number;
}
function RenderTab({ tab }: RenderTabProp) {
  switch (tab) {
    case 0:
      return <PrincipalData />;

    case 1:
      return <ServiceData />;

    case 2:
      return <SystemData />;

    case 3:
      return <PatientData />;

    default:
      return <p>Tab not found</p>;
  }
}

export function Content() {
  const [currentTab, setCurrentTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const buttons = ["Principal", "Serviços", "Sistema", "Pacientes"];

  return (
    <div className={styles.container}>
      <div className={styles.buttonsSection}>
        <button className={`${styles.buttonBlue} ${currentPage === 0 ? styles.outline : ""}`} onClick={() => setCurrentPage(0)}>
          <BsCalendarCheckFill />
          Perfil principal
        </button>
        <button className={`${styles.buttonBlue} ${currentPage === 1 ? styles.outline : ""}`} onClick={() => setCurrentPage(1)}>
          <FaUserFriends />
          Perfil de profissinal
        </button>
      </div>

      {currentPage === 0 && (
        <>
          <div className={styles.informationHeader}>
            <h2>Pessoa fisica</h2>

            <div className={styles.buttonsContainer}>
              {buttons.map((textButton, i) => (
                <button key={textButton} className={`${styles.buttonTop} ${currentTab === i ? styles.active : ""}`} onClick={() => setCurrentTab(i)}>
                  {textButton}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.information}>
            <div className={styles.informationData}>
              <RenderTab tab={currentTab} />
            </div>
          </div>

          {currentTab !== 3 && (
            <div className={`${styles.buttonsSection} ${styles.centerButton}`}>
              <EditUserDataModal initialTab={currentTab}>
                <button className={`${styles.buttonOrange}`}>Editar dados</button>
              </EditUserDataModal>

              <EditPassword>
                <button className={`${styles.buttonOrange} ${styles.outline}`}>Alterar senha</button>
              </EditPassword>
            </div>
          )}
        </>
      )}

      {currentPage === 1 && (
        <>
          <div className={styles.informationHeader}>
            <h2>Profissionais Cadastrados</h2>

            <div>
              <select className={styles.select}>
                <option value="Cargos" selected>
                  Cargo
                </option>
                <option value="Psicologo">Psicologo</option>
                <option value="Psiquiatra">Psiquiatra</option>
                <option value="Nutricionista">Nutricionista</option>
                <option value="Atendente">Atendente</option>
              </select>

              <select className={styles.select}>
                <option value="Ativos" selected>
                  Perfis ativos
                </option>
                <option value="Inativos">Perfis inativos</option>
              </select>

              <button className={styles.buttonOrange}>Cadastrar profissinal</button>
            </div>
          </div>

          <div className={styles.profinalContainer}>
            <div className={styles.profissinalCard}>
              <div className={styles.userContainer}>
                <FaUser />

                <div className={styles.logoCamera}>
                  <BsFillCameraFill />
                </div>
              </div>

              <div>
                <h3>Nome completo</h3>
                <p>Debora Barros</p>
              </div>

              <div>
                <h3>Cargo</h3>
                <p>Psicologo</p>
              </div>

              <div>
                <h3>CRP</h3>
                <p>000 000 000 00</p>
              </div>

              <div>
                <button className={styles.showCurriculun}>Mostrar curriculo</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
