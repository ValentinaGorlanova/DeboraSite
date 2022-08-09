import styles from './styles.module.scss'

import { AiOutlineSearch } from "react-icons/ai";

export default function InputSearch() {
    return (
        <div className={styles.InputSearch}>
            <input type="text" placeholder="Pesquise por pacientes" />
            
            <button className={styles.buttonSearch}>
                <AiOutlineSearch size={20} />
            </button>
        </div>
    )
}