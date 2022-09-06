import { useState, useEffect, ChangeEvent } from "react";
import { patients } from "../../../../mocks";
import styles from "./styles.module.scss";

export default function InputSearch() {
  const [name, setName] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const [filterNameList, setFilterNameList] = useState<Array<string>>(patients);

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

  useEffect(() => {
    const filteredNames = patients.filter((patient) => patient.toLowerCase().includes(name.toLowerCase()));
    setFilterNameList(filteredNames);
  }, [name]);

  return (
    <div className={styles.inputContainer}>
      <input type="text" className={styles.search} value={name} onChange={handleInputName} onFocus={() => setIsFocus(true)} onBlur={handleFocusOut} />

      <div className={`${styles.values} ${isFocus ? styles.show : ""}`}>
        {filterNameList.length > 0 ? (
          filterNameList.map((patient) => (
            <div key={patient} onClick={() => handleSelectSugestion(patient)} className={styles.option}>
              {patient}
            </div>
          ))
        ) : (
          <div className={styles.option}>Nenhum paciente!</div>
        )}
      </div>
    </div>
  );
}
