import styles from "./styles.module.scss";

import { getWeek, getMonthList, WeekDayType } from "@/utils/Calendar";

interface WeekMonthProp {
  selectOption: string;
  date: Date;
  changeMonth: (monthNumber: number) => void;
  changeWeek: (weekDay: number, monthNumber: number) => void;
}

export default function RenderDayWeekOrMonth({ selectOption, date, changeMonth, changeWeek }: WeekMonthProp) {
  const numberWeek = getWeek(date);
  const weekDayNames = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];

  const month = getMonthList(date);

  function handleChangeMonth(monthNumber: number) {
    changeMonth(monthNumber);
  }

  function handleChangeWeek(weekDay: WeekDayType) {
    let monthNumber = date.getMonth();

    if (weekDay.grayColor) {
      if (weekDay.nextMonth) monthNumber += 1;
      else if (weekDay.oldMonth) monthNumber -= 1;
    }

    changeWeek(weekDay.dayNumber, monthNumber);
  }

  if (selectOption === "week")
    return (
      <>
        {numberWeek.map((weekDay, i) => (
          <div
            className={`${styles.calendarSmallContainerDayOfWeek} ${weekDay.grayColor ? styles.weekGrayColor : ""} ${
              date.getDate() === weekDay.dayNumber ? styles.calendarDayActive : null
            }`}
            key={weekDay.dayNumber}
            onClick={() => handleChangeWeek(weekDay)}
          >
            <p>{weekDayNames[i]}</p> <span>{weekDay.dayNumber}</span>
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
        <div
          className={`${styles.calendarSmallContainerDayOfWeek} ${monthName.activate ? styles.calendarDayActive : null}`}
          key={monthName.name}
          onClick={() => handleChangeMonth(monthName.number)}
        >
          <p>{monthName.name}</p>
        </div>
      ))}
    </>
  );
}
