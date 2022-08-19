import { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import styles from "./styles.module.scss";

function LockedItem() {
  const [typeLock, setTypeLock] = useState("date");

  function handleSelect(select: any) {
    const element = select.target as HTMLSelectElement;
    setTypeLock(element.value);
  }

  return (
    <div className={styles.lockedItem}>
      <div>
        <select onChange={(sel) => handleSelect(sel)}>
          <option defaultValue="date" value="date">
            Por data
          </option>
          <option value="time">Domingo</option>
        </select>
      </div>

      <div className={styles.lockedFields}>
        {typeLock !== "date" ? (
          <>
            <input type="time" />
            <p>Até</p>
            <input type="time" />
          </>
        ) : (
          <>
            <input type="date" />
            <p>Até</p>
            <input type="date" />
          </>
        )}
      </div>

      <div className={styles.bottomButton}>
        <button>
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  );
}

export default function LockTime() {
  return (
    <>
      <h2>Bloquear horarios</h2>

      <div className={styles.section}>
        <button className={styles.newLockTime}>Adicionar novo bloqueio</button>
      </div>

      <div className={styles.lockedArea}>
        <p className={styles.titleLocked}>Horarios bloqueados</p>

        <div>
          <LockedItem />
          <LockedItem />
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.saveButton}>Salvar alterações</button>
      </div>
    </>
  );
}
