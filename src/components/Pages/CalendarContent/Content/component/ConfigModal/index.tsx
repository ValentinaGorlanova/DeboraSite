import { ReactElement, useState } from "react";
import { GrClose } from "react-icons/gr";
import styles from "./styles.module.scss";

import ConfigOptions from "./ConfigOptions";
import LockTime from "./LockTime";

interface ModalConfigProp {
  children?: ReactElement;
}

export default function ConfigModal({ children }: ModalConfigProp) {
  const [showModal, setShowModal] = useState(false);

  const [lockTime, setLockTime] = useState(false);

  function handlerLockTime() {
    setLockTime(!lockTime);
  }

  function handleCloseModal() {
    setLockTime(false);
    setShowModal(false);
  }

  return (
    <>
      <div onClick={() => setShowModal(!showModal)}>{children}</div>

      <div className={`${styles.bgModal} ${showModal ? styles.show : ""}`}>
        <div className={styles.modal}>
          <button className={styles.closeButton} onClick={handleCloseModal}>
            <GrClose />
          </button>

          {!lockTime ? <ConfigOptions onClickButton={() => handlerLockTime()} /> : <LockTime onClickButton={() => handlerLockTime()} />}
        </div>
      </div>
    </>
  );
}
