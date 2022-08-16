import styles from "./styles.module.scss";

import { getWeek, getMonthList } from "@/utils/Calendar";

interface WeekMonthProp {
  selectOption: string;
  date: Date;
}

export default function RenderDayWeekOrMonth({ selectOption, date }: WeekMonthProp) {
  const numberWeek = getWeek(date);
  const weekDayNames = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];

  const month = getMonthList(date);

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
      {month.map((monthName) => (
        <div className={`${styles.calendarSmallContainerDayOfWeek} ${monthName.activate ? styles.calendarDayActive : null}`} key={monthName.name}>
          <p>{monthName.name}</p>
        </div>
      ))}
      {/* <div className={`${styles.calendarSmallContainerDayOfWeek} ${styles.calendarDayActive}`}>
        <p>qua</p> <span>01</span>
      </div> */}
    </>
  );
}
