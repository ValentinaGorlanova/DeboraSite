import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export function SectionCount() {
  const [years, setYears] = useState<number>(0);
  const [patients, setPatients] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [size, setSize] = useState<number>(0);

  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);
  console.log(offset);

  useEffect(() => {
    if (offset >= 1087) {
      const coutYears = years < 15 ? years + 1 : years;
      setTimeout(() => {
        setYears(coutYears);
      }, 150);
    }
  }, [years]);

  useEffect(() => {
    const coutYears = years < 15 ? years + 1 : years;
    setTimeout(() => {
      setYears(coutYears);
    }, 150);
  }, [years]);

  useEffect(() => {
    const coutPatients = patients < 300 ? patients + 1 : patients;

    setTimeout(() => {
      setPatients(coutPatients);
    }, 7);
  }, [patients]);

  useEffect(() => {
    const coutHours = hours < 12 ? hours + 1 : hours;

    setTimeout(() => {
      setHours(coutHours);
    }, 200);
  }, [hours]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
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
