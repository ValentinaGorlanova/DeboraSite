import { AiFillClockCircle } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";

import SmallCalendar from "../SmallCalendar";
import styles from "./styles.module.scss";

export default function CalendarWithQuery() {
  return (
    <>
      <div className={styles.calendarContainer}>
        <SmallCalendar />
      </div>
      {/* Next consultations */}
      <div className={styles.containerNextConsultations}>
        <h1>Próximas consultas</h1>

        <div className={styles.nextConsultations}>
          <div className={styles.left}>
            <p className={styles.day}>dia</p>
            <div className={styles.number}>1</div>
          </div>
          <div className={styles.rigth}>
            <p className={styles.title}>Consulta</p>
            <p className={styles.name}>Felipe Araújo</p>
            <p className={styles.icon}>
              <AiFillClockCircle /> 13h15
            </p>
            <p className={styles.total}>
              1 de 5 <FiChevronRight />
            </p>
          </div>
        </div>

        <div className={styles.nextConsultations}>
          <div className={styles.left}>
            <p className={styles.day}>dia</p>
            <div className={styles.number}>1</div>
          </div>
          <div className={styles.rigth}>
            <p className={styles.title}>Consulta</p>
            <p className={styles.name}>Felipe Araújo</p>
            <p className={styles.icon}>
              <AiFillClockCircle /> 13h15
            </p>
            <p className={styles.total}>
              1 de 5 <FiChevronRight />
            </p>
          </div>
        </div>

        <div className={styles.nextConsultations}>
          <div className={styles.left}>
            <p className={styles.day}>dia</p>
            <div className={styles.number}>1</div>
          </div>
          <div className={styles.rigth}>
            <p className={styles.title}>Consulta</p>
            <p className={styles.name}>Felipe Araújo</p>
            <p className={styles.icon}>
              <AiFillClockCircle /> 13h15
            </p>
            <p className={styles.total}>
              1 de 5 <FiChevronRight />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
