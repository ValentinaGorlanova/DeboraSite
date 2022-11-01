import { useState } from "react";
import ProfissionalItem from "../ProfissionalItem";
import styles from "./styles.module.scss";

export default function CreateGroup() {
  const [isSelectUserToCreateGroup, setIsSelectUserToCreateGroup] = useState(false);

  return (
    <div className={styles.container}>
      {!isSelectUserToCreateGroup && (
        <form action="#" method="POST">
          <div>
            <p className={styles.titleField}>Nome do grupo</p>
            <input type="text" name="groupname" placeholder="Digite o nome do grupo" />
          </div>

          <div>
            <p className={styles.titleField}>Descrição</p>
            <textarea>Digite uma breve descrição</textarea>
            <p className={styles.smallLegend}>Não se preocupe, você poderá alterar essas configurações depois</p>
          </div>

          <div className={styles.alignButton} onClick={() => setIsSelectUserToCreateGroup(true)}>
            <button className={styles.button}>Adicionar participantes</button>
          </div>
        </form>
      )}

      {isSelectUserToCreateGroup && (
        <>
          <div className={styles.usersList}>
            <label className={styles.userOption}>
              <input type="checkbox" name="usergrouplist" />
              <ProfissionalItem />
            </label>

            <label className={styles.userOption}>
              <input type="checkbox" name="usergrouplist" />
              <ProfissionalItem />
            </label>

            <label className={styles.userOption}>
              <input type="checkbox" name="usergrouplist" />
              <ProfissionalItem />
            </label>

            <label className={styles.userOption}>
              <input type="checkbox" name="usergrouplist" />
              <ProfissionalItem />
            </label>
          </div>

          <div className={styles.alignButton}>
            <button className={styles.button}>Criar Grupo</button>
          </div>
        </>
      )}
    </div>
  );
}
