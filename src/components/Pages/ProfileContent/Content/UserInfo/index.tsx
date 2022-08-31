import PrincipalData from "../PricipalData";
import ServiceData from "../ServiceData";
import SystemData from "../System";
import PatientData from "../PatientData";
import styles from "./styles.module.scss";

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
  const buttons = ["Principal", "Serviços", "Sistema", "Pacientes"];

  return (
    <>
      <div className={styles.informationHeader}>
        {!hiddenTitle && <h2>Pessoa fisica</h2>}

        <div className={styles.buttonsContainer}>
          {buttons.map((textButton, i) => (
            <button key={textButton} className={`${styles.buttonTop} ${tab === i ? styles.active : ""}`} onClick={() => setTab(i)}>
              {textButton}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.information}>
        <div className={styles.informationData}>
          <RenderTab tab={tab} showOptions={hiddenTitle} />
        </div>
      </div>
    </>
  );
}
