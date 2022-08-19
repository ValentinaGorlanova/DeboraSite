import { MouseEvent, useEffect, useRef } from "react";
import { GrFormClose } from "react-icons/gr";
import { BsCalendarFill, BsFillTrashFill } from "react-icons/bs";
import { MdAccessTime } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { FaPen } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./styles.module.scss";

import { useWindowDimension } from "@/hooks/useWindow";

interface SmallModalProp {
  onClose: () => void;
}

export default function SmallModal({ onClose }: SmallModalProp) {
  const modalRef = useRef<HTMLDivElement>(null);
  const windowDimenssion = useWindowDimension();

  useEffect(() => {
    if (!modalRef.current || window.innerWidth < 501) return;

    const divParent = modalRef.current.offsetParent as HTMLDivElement;
    const x = divParent.offsetLeft + divParent.clientWidth + 240;

    modalRef.current.style.left = x > window.innerWidth ? "-235px" : `${divParent.clientWidth}px`;
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
  }, [windowDimenssion.width]);

  function handleCloseModal(e: MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    onClose();
  }

  return (
    <div className={styles.bgModal} ref={modalRef}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={handleCloseModal}>
          <GrFormClose />
        </button>

        <div className={styles.headerModal}>
          <h2>Gabriel Silva</h2>
          <p>
            <span className={styles.status}></span>
            Confirmado
          </p>
        </div>

        <div className={styles.bodyModal}>
          <div className={styles.field}>
            <div>
              <BsCalendarFill />
            </div>
            <p>Quarta, 01 Maio 2022</p>
          </div>

          <div className={`${styles.field} ${styles.align}`}>
            <div>
              <MdAccessTime />
            </div>
            <p>09h00 - 09h40</p>
            <div className={styles.orange}>
              <p>40 min</p>
            </div>
          </div>

          <div className={styles.field}>
            <div>
              <BsCalendarFill />
            </div>
            <p>Terceira consulta</p>
          </div>

          <div className={styles.field}>
            <div>
              <HiLocationMarker />
            </div>
            <p>Online</p>
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

          <button className={styles.trashButton}>
            <BsFillTrashFill />
          </button>

          <button className={styles.large}>
            Entrar em contato
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}
