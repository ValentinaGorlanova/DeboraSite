import { useEffect, useRef } from "react";
import { GrFormClose } from "react-icons/gr";
import { BsCalendarFill, BsFillTrashFill } from "react-icons/bs";
import { MdAccessTime } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { FaPen } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./styles.module.scss";

import { useWindowDimension } from "@/hooks/useWindow";

interface SmallModalProp {
  show: boolean;
  pos: { x: number; y: number };
  onClose: () => void;
}

export default function SmallModal({ show, onClose, pos }: SmallModalProp) {
  const modalRef = useRef<HTMLDivElement>(null);
  const windowDimensions = useWindowDimension();

  useEffect(() => {
    const element = modalRef.current;

    if (element && windowDimensions.width > 500) {
      const y = pos.y + 250 > window.innerHeight ? pos.y - 260 : pos.y;
      const x = pos.x + 225 > window.innerWidth ? pos.x - 250 : pos.x;

      element.style.top = `${y}px`;
      element.style.left = `${x}px`;
    }

    if (element && windowDimensions.width <= 500) {
      element.style.top = "0px";
      element.style.left = "0px";
    }
  }, [pos, windowDimensions]);

  return (
    <div className={`${styles.bgModal} ${show ? styles.show : ""}`} ref={modalRef}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
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
