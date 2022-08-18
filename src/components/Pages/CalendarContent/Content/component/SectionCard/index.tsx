import { HiClock } from "react-icons/hi";
import styles from "./styles.module.scss";

import { PencilIcon } from "@/components/Icons/PencilIcon";
import { NoteIcon } from "@/components/Icons/NoteIcon";
import EditAppointmentModal from "@/components/EditAppointmentModal";
import AnnotationModal from "@/components/AnnotationModal";

interface SectionCardProps {
  showStatus: boolean;
}

export default function SectionCard({ showStatus }: SectionCardProps) {
  return (
    <div className={styles.Sections}>
      <div className={styles.gridArea1}>
        <p>Paciente</p>
        <span>Gabriel Silva</span>
      </div>

      <div className={styles.gridArea2}>
        <p>Profissional</p>
        <span>Debora Barros</span>
      </div>

      <div className={styles.hiddenOnMobile}>
        <p>Data</p>
        <span>01/05/22</span>
      </div>

      <div className={styles.gridArea3}>
        <p className={styles.hiddenOnMobile}>Horario</p>
        <span>
          <HiClock className={styles.iconClock} /> 9h00 - 9h40
        </span>
      </div>

      <div className={`${styles.statusContainer} ${showStatus ? "" : styles.hiddenStatus}`}>
        <p>Status</p>
        <span className={styles.status}></span>
      </div>

      <div className={styles.gridArea4}>
        <p className={styles.hiddenOnMobile}>Notas</p>
        <div style={{ display: "flex" }}>
          <AnnotationModal>
            <div>
              <NoteIcon />
            </div>
          </AnnotationModal>
          <EditAppointmentModal>
            <div>
              <PencilIcon />
            </div>
          </EditAppointmentModal>
        </div>
      </div>
    </div>
  );
}
