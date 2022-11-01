import ProfissionalItem from "../ProfissionalItem";
import styles from "./styles.module.scss";

import InputSearch from "@/components/SearchInput";

export default function StartConversation() {
  return (
    <div className={styles.container}>
      <InputSearch placeholder="Pesquise por profissionais" />

      <div className={styles.userSearchResult}>
        <ProfissionalItem />
        <ProfissionalItem />
        <ProfissionalItem />
        <ProfissionalItem />
      </div>
    </div>
  );
}
