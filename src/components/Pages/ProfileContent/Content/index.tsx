/* eslint-disable @typescript-eslint/no-var-requires */
// import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { BsCalendarCheckFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
// import { FaUser } from "react-icons/fa";
// import { RiPencilFill } from "react-icons/ri";
// must go before plugins

import styles from "./styles.module.scss";
import PrincipalData from "./PricipalData";
import ServiceData from "./ServiceData";
import SystemData from "./System";
import PatientData from "./PatientData";
// import { EditUserDataModal } from "@/components/EditUserDataModal";
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
  const [currentTab, setCurrentTab] = useState(1);

  const buttons = ["Principal", "Serviços", "Sistema", "Pacientes"];

  return (
    <div className={styles.container}>
      <div className={styles.buttonsSection}>
        <button className={`${styles.buttonBlue}`}>
          <BsCalendarCheckFill />
          Perfil principal
        </button>
        <button className={`${styles.buttonBlue} ${styles.outline}`}>
          <FaUserFriends />
          Perfil de profissinal
        </button>
      </div>

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

      <div className={`${styles.buttonsSection} ${styles.centerButton}`}>
        <button className={`${styles.buttonOrange}`}>Editar dados</button>
        <button className={`${styles.buttonOrange} ${styles.outline}`}>Alterar senha</button>
      </div>
    </div>
  );
}
