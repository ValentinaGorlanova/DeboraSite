import { GrClose, GrCheckmark } from "react-icons/gr";
import styles from "./styles.module.scss";

interface CheckButtonProp {
  checked: boolean;
  onChange: () => void;
}

export default function CheckButton({ checked, onChange }: CheckButtonProp) {
  return (
    <div className={`${styles.checkboxContainer} ${checked ? styles.activate : ""}`} onClick={() => onChange()}>
      <div className={`${styles.circle} ${checked ? styles.activate : ""}`}>{checked ? <GrCheckmark /> : <GrClose fill="#cde0fd" />}</div>
    </div>
  );
}
