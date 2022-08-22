import { ChangeEvent, useState } from "react";
import { BsFillTrashFill, BsArrowLeft } from "react-icons/bs";
import styles from "./styles.module.scss";

interface LockedItemPropType {
  onDelete: () => void;
}

function LockedItem({ onDelete }: LockedItemPropType) {
  const [lockType, setLockType] = useState("date");

  function handleSelect(select: ChangeEvent<HTMLSelectElement>) {
    const element = select.target as HTMLSelectElement;
    setLockType(element.value);
  }

  return (
    <div className={styles.lockedItem}>
      <div>
        <select onChange={(sel) => handleSelect(sel)}>
          <option defaultValue="date" value="date">
            Por data
          </option>
          <option value="time">Domingo</option>
          <option value="time">Segunda-feira</option>
          <option value="time">Terça-feira</option>
          <option value="time">Quarta-feira</option>
          <option value="time">Quinta-feira</option>
          <option value="time">Sexta-feira</option>
          <option value="time">Sábado</option>
        </select>
      </div>

      <div className={styles.lockedFields}>
        {lockType !== "date" ? (
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
        <button onClick={onDelete}>
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  );
}

interface LockTimeProps {
  onClickButton: () => void;
}

export default function LockTime({ onClickButton }: LockTimeProps) {
  const [lockList, setLockList] = useState([0, 1]);

  function handleAddNewLock() {
    const newLock = lockList.length !== 0 ? lockList[lockList.length - 1] + 1 : 0;
    setLockList([...lockList, newLock]);
  }

  function handleDeleteLock(index: number) {
    const array = lockList;
    array.splice(index, 1);

    setLockList([...array]);
  }

  return (
    <>
      <h2>Bloquear horários</h2>

      <div>
        <button className={styles.backButton} onClick={onClickButton}>
          <BsArrowLeft />
        </button>
      </div>

      <div className={styles.section}>
        <button className={styles.newLockTime} onClick={handleAddNewLock}>
          Adicionar novo bloqueio
        </button>
      </div>

      <div className={styles.lockedArea}>
        <p className={styles.titleLocked}>Horários bloqueados</p>

        <div>
          {lockList.length !== 0 ? (
            lockList.map((lock, i) => <LockedItem key={lock} onDelete={() => handleDeleteLock(i)} />)
          ) : (
            <div className={styles.message}>
              <h3>Nenhum bloqueio disponível</h3>
              <p>Adione bloqueios no botão acima.</p>
            </div>
          )}
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.saveButton}>Salvar alterações</button>
      </div>
    </>
  );
}
