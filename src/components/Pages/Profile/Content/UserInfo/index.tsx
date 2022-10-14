import { useState } from "react";

import { FaPen } from "react-icons/fa";
import { RiRotateLockFill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";

import PrincipalData from "../PricipalData";
import ServiceData from "../ServiceData";
import SystemData from "../System";
import PatientData from "../PatientData";
import ClinicalRecord from "../ClinicalRecord";
import History from "../History";

import styles from "./styles.module.scss";
import { ProfileActive } from "@/components/ProfileActive";

interface RenderTabProp {
  tab: number;
  showOptions?: boolean;
}

function RenderTab({ tab, showOptions }: RenderTabProp) {
  switch (tab) {
    case 0:
      return <PrincipalData />;

    case 1:
      return <ServiceData />;

    case 2:
      return <SystemData showOptions={showOptions} />;

    case 3:
      return <PatientData />;

    case 4:
      return <ClinicalRecord />;

    case 5:
      return <History />;

    default:
      return <p>Tab not found</p>;
  }
}

interface UserInfoProp {
  tab: number;
  hiddenTitle?: boolean;
  setTab: (i: number) => void;
}

export default function UserInfo({ tab, hiddenTitle, setTab }: UserInfoProp) {
  const [secondTab, setSecondTab] = useState(false);

  const buttonsFirst = [
    { text: "Principal", tab: 0 },
    { text: "Serviços", tab: 1 },
    { text: "Sistema", tab: 2 },
    { text: "Pacientes", tab: 3 },
  ];

  const buttonsSecond = [
    { text: "Principal", tab: 4 },
    { text: "Histórico pessoal", tab: 5 },
    { text: "Informações relevantes", tab: 6 },
  ];

  return (
    <>
      <div className={`${styles.informationHeader} ${hiddenTitle ? styles.informationHeaderWithButton : ""}`}>
        {!hiddenTitle && <h2>Pessoa física</h2>}

        <div className={styles.buttonsContainer}>
          {!secondTab &&
            buttonsFirst.map((button) => (
              <button
                key={button.text}
                className={`${styles.buttonTop} ${tab === button.tab ? styles.active : ""}`}
                onClick={() => setTab(button.tab)}
              >
                {button.text}
              </button>
            ))}

          {secondTab &&
            buttonsSecond.map((button) => (
              <button
                key={button.text}
                className={`${styles.buttonTop} ${tab === button.tab ? styles.active : ""}`}
                onClick={() => setTab(button.tab)}
              >
                {button.text}
              </button>
            ))}
        </div>

        {hiddenTitle && (
          <div className={styles.rowButtons}>
            <button>
              <FaPen />
            </button>

            <ProfileActive>
              <button>
                <RiRotateLockFill />
              </button>
            </ProfileActive>

            <button
              onClick={() => {
                setTab(4);
                setSecondTab(true);
              }}
            >
              <IoMdCloseCircle />
            </button>
          </div>
        )}
      </div>

      <div className={styles.information}>
        <div
          className={styles.informationData}
          style={{
            background: `${hiddenTitle ? "none" : "#f7f7f7"}`,
            boxShadow: `${hiddenTitle ? "none" : "box-shadow: 2px 2px 4px rgba(113, 173, 173, 0.11), 4px 4px 32px rgba(198, 216, 216, 0.5)"}`,
          }}
        >
          <RenderTab tab={tab} showOptions={hiddenTitle} />
        </div>
      </div>
    </>
  );
}
