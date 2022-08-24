import { HiClock } from "react-icons/hi";
import SelectStatus from "../../../../../SelectStatus";
import { DayCard } from "../../mocks";
import styles from "./styles.module.scss";

import { PencilIcon } from "@/components/Icons/PencilIcon";
import { NoteIcon } from "@/components/Icons/NoteIcon";
import EditAppointmentModal from "@/components/EditAppointmentModal";
import AnnotationModal from "@/components/AnnotationModal";

import { sliceName } from "@/utils/SliceName";

interface SectionCardProps {
  showStatus: boolean;
  query: DayCard;
}

export default function SectionCard({ showStatus, query }: SectionCardProps) {
  return (
    <div className={styles.Sections}>
      <div className={styles.gridArea1}>
        <p>Paciente</p>
        <span>{sliceName(query.name)}</span>
      </div>

      <div className={styles.gridArea2}>
        <p>Profissional</p>
        <span>{sliceName(query.doctor)}</span>
      </div>

      <div className={styles.hiddenOnMobile}>
        <p>Data</p>
        <span>{query.date}</span>
      </div>

      <div className={styles.gridArea3}>
        <p className={styles.hiddenOnMobile}>Horário</p>
        <span>
          <HiClock className={styles.iconClock} /> {query.hour} - {query.hourEnd}
        </span>
      </div>

      <div className={`${styles.statusContainer} ${showStatus ? "" : styles.hiddenStatus}`}>
        <p>Status</p>
        <SelectStatus />
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
