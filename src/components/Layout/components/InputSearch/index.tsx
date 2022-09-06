import { AiOutlineSearch } from "react-icons/ai";
import styles from "./styles.module.scss";

export default function InputSearch() {
  return (
    <div className={styles.InputSearch}>
      <input type="text" placeholder="Pesquise por pacientes" />

      <button className={styles.buttonSearch}>
        <AiOutlineSearch size={20} />
      </button>
    </div>
  );
}
