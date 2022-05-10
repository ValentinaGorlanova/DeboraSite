import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

export function SectionCount() {
  const [years, setYears] = useState<number>(0);
  const [patients, setPatients] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [sizeWidth, setSizeWidth] = useState<number>(0);
  const [offSetTop, setoffSetTop] = useState<number>(0);
  const [offsetY, setOffsetY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set pageYOffset Page
    const onScroll = () => setOffsetY(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Set Width Page
    const onSizePage = () => setSizeWidth(window.innerWidth);
    window.removeEventListener("scroll", onSizePage);
    window.addEventListener("scroll", onSizePage, { passive: true });

    if (ref && ref.current) {
      setoffSetTop(ref.current.offsetTop);
    }

    if (
      (offsetY >= 1187 && offSetTop <= 2100 && sizeWidth > 1024) ||
      (offsetY >= 1263 && offSetTop <= 2493 && sizeWidth <= 1024) ||
      (offsetY >= 2000 && offSetTop <= 3500 && sizeWidth <= 500)
    ) {
      const coutYears = years < 15 ? years + 1 : years;
      setTimeout(() => {
        setYears(coutYears);
      }, 150);

      const coutPatients = patients < 300 ? patients + 1 : patients;
      setTimeout(() => {
        setPatients(coutPatients);
      }, 7);

      const coutHours = hours < 12 ? hours + 1 : hours;
      setTimeout(() => {
        setHours(coutHours);
      }, 200);
    } else {
      setYears(0);
      setPatients(0);
      setHours(0);
    }
  }, [years, offsetY, patients, hours, sizeWidth, offSetTop]);

  return (
    <div className={styles.container}>
      <div className={styles.content} ref={ref}>
        <div>
          <h1>
            + de {years} anos <br /> <span> de experiência</span>
          </h1>
        </div>
        <div>
          <h1>
            {" "}
            +{patients} pacientes <br /> <span> atendidos</span>
          </h1>
        </div>
        <div>
          <h1>
            {" "}
            +{hours}.000 horas <br /> <span> em consulta</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
