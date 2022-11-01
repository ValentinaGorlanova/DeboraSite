import { FaUserAlt } from "react-icons/fa";
import styles from "./styles.module.scss";

export default function ProfissionalItem() {
  return (
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        <FaUserAlt />
      </div>

      <p>Usuario</p>
    </div>
  );
}
