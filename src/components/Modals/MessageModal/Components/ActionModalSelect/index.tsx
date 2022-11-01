import { FaUserFriends, FaUsers } from "react-icons/fa";
import styles from "./styles.module.scss";

interface ActionModalSelectType {
  onSelect: (value: boolean) => void;
}

export default function ActionModalSelect({ onSelect }: ActionModalSelectType) {
  return (
    <div className={styles.actions}>
      <div className={styles.actionOption}>
        <label htmlFor="message">
          <FaUserFriends />
        </label>

        <button id="message" onClick={() => onSelect(false)}>
          Conversar
        </button>
      </div>

      <div className={styles.actionOption}>
        <label htmlFor="group">
          <FaUsers />
        </label>

        <button id="group" onClick={() => onSelect(true)}>
          Criar Grupo
        </button>
      </div>
    </div>
  );
}
