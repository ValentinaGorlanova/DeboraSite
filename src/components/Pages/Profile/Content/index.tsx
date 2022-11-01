/* eslint-disable @typescript-eslint/no-var-requires */
// import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { BsCalendarCheckFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";

// import { FaUser } from "react-icons/fa";
// import { RiPencilFill } from "react-icons/ri";
// must go before plugins

import styles from "./styles.module.scss";
import UserInfo from "./UserInfo";
import CardUser from "./CardUser";
import { EditUserDataModal } from "@/components/Modals/EditUserDataModal";
import EditPassword from "@/components/Modals/EditPassword";
import { NewProfissinal } from "@/components/Modals/NewProfissinal";
// import DropFile from "@/components/DropFile";
// The import order DOES MATTER here. If you change it, you'll get an error!
// const EventCalendar = require("react-event-calendar");

export function Content() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentTab, setCurrentTab] = useState(0);

  const [showOneCard, setShowOneCard] = useState(false);

  function handleChangeTab(page: number) {
    setCurrentPage(page);
    setCurrentTab(0);
    setShowOneCard(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.buttonsSection}>
        <button className={`${styles.buttonBlue} ${currentPage !== 0 ? styles.outline : ""}`} onClick={() => handleChangeTab(0)}>
          <BsCalendarCheckFill />
          Perfil principal
        </button>
        <button className={`${styles.buttonBlue} ${currentPage !== 1 ? styles.outline : ""}`} onClick={() => handleChangeTab(1)}>
          <FaUserFriends />
          Perfil de profissional
        </button>
      </div>

      {currentPage === 0 && (
        <>
          <UserInfo tab={currentTab} setTab={(tabIndex) => setCurrentTab(tabIndex)} />

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
          <div className={`${styles.informationHeader} ${styles.grid}`}>
            <h2>Profissionais Cadastrados</h2>

            <div className={styles.selectsContainer}>
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
            </div>

            <NewProfissinal>
              <button className={`${styles.buttonOrange} ${styles.buttonNew}`}>Cadastrar profissional</button>
            </NewProfissinal>
          </div>

          <div className={styles.profinalContainer}>
            {!showOneCard ? (
              <>
                <CardUser handleSelect={() => setShowOneCard(true)} />
                <CardUser handleSelect={() => setShowOneCard(true)} />
                <CardUser handleSelect={() => setShowOneCard(true)} />
              </>
            ) : (
              <UserInfo tab={currentTab} setTab={(tabIndex) => setCurrentTab(tabIndex)} hiddenTitle />
            )}
          </div>
        </>
      )}
    </div>
  );
}
