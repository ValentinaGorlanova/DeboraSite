import { FaUserAlt } from "react-icons/fa";
import styles from "./styles.module.scss";

interface ProfissionalItemType {
  activate?: boolean;
  messageCount?: number;
  userName: string;
  hour: string;
  oldMessage: string;

  onClick: () => void;
}

export default function ProfissionalItem({ activate, messageCount, userName, hour, oldMessage, onClick }: ProfissionalItemType) {
  return (
    <div className={`${styles.profissionaisContaier} ${activate ? styles.activate : ""}`} onClick={onClick}>
      <div className={styles.profileContainer}>
        {messageCount && !activate && <span>1</span>}

        <FaUserAlt />
      </div>

      <div className={styles.informations}>
        <div className={styles.top}>
          <h3>{userName}</h3>
          <span>{hour}</span>
        </div>

        <div>
          <p>{oldMessage}</p>
        </div>
      </div>
    </div>
  );
}
