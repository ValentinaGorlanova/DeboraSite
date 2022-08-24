import { MouseEvent, useEffect, useRef, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { BsCalendarFill, BsFillTrashFill } from "react-icons/bs";
import { MdAccessTime } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { FaPen } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { DayCard } from "../../mocks";
import styles from "./styles.module.scss";

import { convertDate } from "@/utils/Calendar";

import { useWindowDimension } from "@/hooks/useWindow";

interface SmallModalProp {
  onClose: () => void;
  patient: DayCard | undefined;
}

export default function SmallModal({ onClose, patient }: SmallModalProp) {
  const modalRef = useRef<HTMLDivElement>(null);
  const windowDimenssion = useWindowDimension();

  const [showDeleteMessage, setShowDeleteMessage] = useState(false);

  useEffect(() => {
    if (!modalRef.current || window.innerWidth < 501) return;

    const divParent = modalRef.current.offsetParent as HTMLDivElement;
    const x = divParent.offsetLeft + divParent.clientWidth + 240;

    modalRef.current.style.left = x > window.innerWidth ? "-235px" : `${divParent.clientWidth}px`;
    modalRef.current.style.transformOrigin = x > window.innerWidth ? "right" : "left";
    modalRef.current.classList.add(styles.fadeIn);
  }, []);

  useEffect(() => {
    if (!modalRef.current) return;

    if (windowDimenssion.width !== 0 && windowDimenssion.width < 501) {
      modalRef.current.style.left = "0px";
      return;
    }

    const divParent = modalRef.current.offsetParent as HTMLDivElement;
    if (!divParent) return;

    const x = divParent.offsetLeft + divParent.clientWidth + 240;
    modalRef.current.style.left = x > window.innerWidth ? "-235px" : `${divParent.clientWidth}px`;
    modalRef.current.style.transformOrigin = x > window.innerWidth ? "right" : "left";
    modalRef.current.classList.add(styles.fadeIn);
  }, [windowDimenssion.width]);

  function handleCloseModal(e: MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    onClose();
  }

  return (
    <div className={styles.bgModal} ref={modalRef}>
      <div className={styles.modal} onMouseLeave={onClose}>
        {!showDeleteMessage ? (
          <>
            <button className={styles.closeButton} onClick={handleCloseModal}>
              <GrFormClose />
            </button>

            <div className={styles.headerModal}>
              <h2>{patient?.name}</h2>
              <p>
                <span className={styles.status}></span>
                {patient?.status}
              </p>
            </div>

            <div className={styles.bodyModal}>
              <div className={styles.field}>
                <div>
                  <BsCalendarFill />
                </div>
                <p>{convertDate(patient?.date)}</p>
              </div>

              <div className={`${styles.field} ${styles.align}`}>
                <div>
                  <MdAccessTime />
                </div>
                <p>
                  {patient?.hour} - {patient?.hourEnd}
                </p>
                <div className={styles.orange}>
                  <p>50 min</p>
                </div>
              </div>

              <div className={styles.field}>
                <div>
                  <BsCalendarFill />
                </div>
                <p>{patient?.query}</p>
              </div>

              <div className={styles.field}>
                <div>
                  <HiLocationMarker />
                </div>
                <p>{patient?.mode}</p>
              </div>

              <div className={styles.field}>
                <div>
                  <BsCalendarFill />
                </div>
                <p>30</p>
              </div>
            </div>

            <div className={`${styles.footer} ${styles.align}`}>
              <button className={styles.penButton}>
                <FaPen />
              </button>

              <button className={styles.trashButton} onClick={() => setShowDeleteMessage(true)}>
                <BsFillTrashFill />
              </button>

              <button className={styles.large}>
                Entrar em contato
                <IoIosArrowForward />
              </button>
            </div>
          </>
        ) : (
          <div className={styles.deleteMessage}>
            <p>Deseja deletar essa consulta?</p>

            <button className={styles.orange}>Sim</button>
            <button onClick={() => setShowDeleteMessage(false)}>Não</button>
          </div>
        )}
      </div>
    </div>
  );
}
