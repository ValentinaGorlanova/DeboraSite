import styles from "./styles.module.scss";

import { getWeek } from "@/utils/Calendar";

interface WeekMonthProp {
  selectOption: string;
  date: Date;
}

export default function RenderDayWeekOrMonth({ selectOption, date }: WeekMonthProp) {
  const numberWeek = getWeek(date);
  const weekDayNames = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];

  if (selectOption === "week")
    return (
      <>
        {numberWeek.map((number, i) => (
          <div className={`${styles.calendarSmallContainerDayOfWeek} ${date.getDate() === number ? styles.calendarDayActive : null}`} key={number}>
            <p>{weekDayNames[i]}</p> <span>{number}</span>
          </div>
        ))}
      </>
    );

  if (selectOption === "day")
    return (
      <div className={styles.calendarContainerDayOfWeek}>
        <p>{date.toLocaleDateString("pt-BR", { weekday: "short" })}</p> <span>{date.getDate()}</span>
      </div>
    );

  return (
    <>
      <div className={`${styles.calendarSmallContainerDayOfWeek} `}>
        <p>dom</p>
      </div>
      <div className={`${styles.calendarSmallContainerDayOfWeek} `}>
        <p>seg</p>
      </div>
      <div className={`${styles.calendarSmallContainerDayOfWeek} `}>
        <p>ter</p>
      </div>
      <div className={`${styles.calendarSmallContainerDayOfWeek} ${styles.calendarDayActive}`}>
        <p>qua</p> <span>01</span>
      </div>
      <div className={`${styles.calendarSmallContainerDayOfWeek} `}>
        <p>qui</p>
      </div>
      <div className={`${styles.calendarSmallContainerDayOfWeek} `}>
        <p>sex</p>
      </div>
      <div className={`${styles.calendarSmallContainerDayOfWeek} `}>
        <p>sab</p>
      </div>
    </>
  );
}
