import { AiOutlineSearch } from "react-icons/ai";

import styles from "./styles.module.scss";

export function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.InputSearch}>
        <input type="text" placeholder="Pesquise por pacientes" />
        <button className={styles.buttonSearch}>
          <AiOutlineSearch size={20} />
        </button>
      </div>

      <div className={styles.bannerDashboard}>
        <div>
          <h1>Olá, Dra. Débora Barros</h1>
          <p>Saiba quais são os seu principais compromissos do dia.</p>
        </div>

        <img src="/peoples.png" alt="" />
      </div>
    </div>
  );
}
