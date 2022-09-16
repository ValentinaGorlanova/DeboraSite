import { BsFillCameraFill } from "react-icons/bs";
import { FaUser, FaPen } from "react-icons/fa";
import { RiRotateLockFill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";

import styles from "./styles.module.scss";

import { ProfileActive } from "@/components/ProfileActive";

interface CardUserProp {
  handleSelect: () => void;
}

export default function CardUser({ handleSelect }: CardUserProp) {
  return (
    <div className={styles.profissinalCard}>
      <div className={styles.userContainer}>
        <FaUser />

        <div className={styles.logoCamera}>
          <BsFillCameraFill />
        </div>
      </div>

      <div className={styles.info1} onClick={handleSelect}>
        <h3>Nome completo</h3>
        <p>Débora Barros</p>
      </div>

      <div className={styles.info2}>
        <h3>Cargo</h3>
        <p>Psicologo</p>
      </div>

      <div>
        <h3>CRP</h3>
        <p>000 000 000 00</p>
      </div>

      <div>
        <button className={styles.showCurriculun}>Mostrar curriculo</button>
      </div>

      <div className={styles.rowButtons}>
        <button>
          <FaPen />
        </button>

        <ProfileActive>
          <button>
            <RiRotateLockFill />
          </button>
        </ProfileActive>
        <button>
          <IoMdCloseCircle />
        </button>
      </div>
    </div>
  );
}
