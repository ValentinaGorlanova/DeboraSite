import { useState, ChangeEvent } from "react";
import { patients } from "../../../../mocks";
import styles from "./styles.module.scss";

export default function InputSearch() {
  const [name, setName] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  function handleInputName(event: ChangeEvent<HTMLInputElement>) {
    const inputElement = event.target as HTMLInputElement;
    setName(inputElement.value);
  }

  function handleSelectSugestion(autoCompleteWith: string) {
    setName(autoCompleteWith);
  }

  function handleFocusOut() {
    setTimeout(() => setIsFocus(false), 250);
  }

  return (
    <div className={styles.inputContainer}>
      <input type="text" className={styles.search} value={name} onChange={handleInputName} onFocus={() => setIsFocus(true)} onBlur={handleFocusOut} />

      <div className={`${styles.values} ${isFocus ? styles.show : ""}`}>
        {patients.map(
          (patient) =>
            patient.toLowerCase().includes(name.toLowerCase()) && (
              <div key={patient} onClick={() => handleSelectSugestion(patient)} className={styles.option}>
                {patient}
              </div>
            )
        )}
      </div>
    </div>
  );
}
