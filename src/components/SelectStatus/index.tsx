import { useState } from "react";
import { BsFillCheckCircleFill, BsFillCalendarXFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import styles from "./styles.module.scss";

interface SelectStatusProp {
  toTop?: boolean;
}

export default function SelectStatus({ toTop }: SelectStatusProp) {
  const values = [
    { icon: <BsFillCheckCircleFill />, text: "Presente", color: "#05cc30" },
    { icon: <AiFillCloseCircle />, text: "Ausente", color: "#cc8d05" },
    { icon: <BsFillCalendarXFill />, text: "Cancelou", color: "#cc0505" },
    { icon: <IoMdClose />, text: "Desfazer", color: "#1e1e1e" },
  ];

  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState<number>(-1);

  function handleClick() {
    setShowOptions(!showOptions);
  }

  function handleClose() {
    setShowOptions(false);
  }

  function handleSelect(value: number) {
    setSelected(value);
    handleClose();
  }

  return (
    <div className={styles.selectContainer} onMouseLeave={handleClose}>
      <div className={styles.iconContainer} onClick={handleClick} style={{ color: selected === -1 ? "#000" : values[selected].color }}>
        {selected === -1 ? <span className={styles.status}></span> : values[selected].icon}
      </div>

      {showOptions && (
        <ul className={`${styles.itemsContainer} ${toTop ? styles.top : ""}`}>
          {values.map((value, i) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <li key={value.text} onClick={() => handleSelect(i)}>
              {value.icon} {value.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
