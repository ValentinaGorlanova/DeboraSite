import { BiSearch } from "react-icons/bi";
import styles from "./styles.module.scss";

interface SearchInputProps {
  placeholder?: string;
}

export default function SearchInput({ placeholder }: SearchInputProps) {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.icon}>
        <BiSearch />
      </div>
      <input type="text" name="search" placeholder={placeholder} className={styles.input} />
    </div>
  );
}
