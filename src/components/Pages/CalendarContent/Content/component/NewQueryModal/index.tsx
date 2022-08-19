/* eslint-disable react/jsx-no-useless-fragment */
import { useState } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import NewQueryForm from "./newQueryForm";
import NewPatientForm from "./NewPatientForm";

import styles from "./styles.module.scss";

interface ModalProp {
  show: boolean;
  date: Date;
  onClose: () => void;
}

export default function NewQueryModal({ show, date, onClose }: ModalProp) {
  const [showNewPatient, setShowNewPatient] = useState(false);

  function handleChangeForm() {
    setShowNewPatient(!showNewPatient);
  }

  return (
    <div className={`${styles.bgModal} ${show ? styles.show : ""}`}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={() => onClose()}>
          <Cross2Icon />
        </button>

        <form action="#" className={styles.form}>
          {showNewPatient ? (
            <NewPatientForm onBack={() => handleChangeForm()} />
          ) : (
            <NewQueryForm date={date} onShowNewPacient={() => handleChangeForm()} />
          )}
        </form>
      </div>
    </div>
  );
}
