import { GrFormClose } from "react-icons/gr";
import styles from "./styles.module.scss";

interface SmallModalProp {
  show: boolean;
  onClose: () => void;
}

export default function SmallModal({ show, onClose }: SmallModalProp) {
  return (
    <div className={`${styles.bgModal} ${show ? styles.show : ""}`}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <GrFormClose />
        </button>

        <div className={styles.headerModal}>
          <h2>Gabriel Silva</h2>
          <p>
            <span className={styles.status}></span>
            Confirmado
          </p>
        </div>
      </div>
    </div>
  );
}
