import { useState } from "react";
import { FaUser } from "react-icons/fa";
import styles from '../styles.module.scss'

interface PacienteProps {
    item: {
        name: string;
        srcImg: string;
    },
    i: number;
    str: string;
    handleClick: () => void;
}

export default function RenderPaciente ({ item, i, str, handleClick }: PacienteProps)  {

    const [disabled, setDisabled] = useState(false)

    return (
    <button className={styles.flex_item} key={i}
    onClick={handleClick}>
        <div>
            {item.srcImg ? <img src={item.srcImg} alt="avatar" /> : <FaUser/>}
        </div>
        <p>{item.name}</p>
    </button>
    )
}