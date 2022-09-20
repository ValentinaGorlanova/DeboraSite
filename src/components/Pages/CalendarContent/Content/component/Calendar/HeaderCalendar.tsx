import styles from "./styles.module.scss";

import { getWeek, getMonthList, WeekDayType } from "@/utils/Calendar";
import { useCalendarContext } from "@/lib/CalendarContext";

interface WeekMonthProp {
  selectOption: string;
}

export default function RenderDayWeekOrMonth({ selectOption }: WeekMonthProp) {
  const { currentDate, handleChangeMonthWithClick, handleChangeWeekWithClick } = useCalendarContext();

  const numberWeek = getWeek(currentDate);
  const weekDayNames = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];

  const month = getMonthList(currentDate);

  function handleChangeWeek(weekDay: WeekDayType) {
    let monthNumber = currentDate.getMonth();

    if (weekDay.grayColor) {
      if (weekDay.nextMonth) monthNumber += 1;
      else if (weekDay.oldMonth) monthNumber -= 1;
    }

    handleChangeWeekWithClick(weekDay.dayNumber, monthNumber);
  }

  if (selectOption === "week")
    return (
      <>
        {numberWeek.map((weekDay, i) => (
          <div
            className={`${styles.calendarSmallContainerDayOfWeek} ${weekDay.grayColor ? styles.weekGrayColor : ""} ${
              currentDate.getDate() === weekDay.dayNumber ? styles.calendarDayActive : null
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
        <p>{currentDate.toLocaleDateString("pt-BR", { weekday: "short" })}</p> <span>{currentDate.getDate()}</span>
      </div>
    );

  return (
    <>
      {month.map((monthName) => (
        <div
          className={`${styles.calendarSmallContainerDayOfWeek} ${monthName.activate ? styles.calendarDayActive : null}`}
          key={monthName.name}
          onClick={() => handleChangeMonthWithClick(monthName.number)}
        >
          <p>{monthName.name}</p>
        </div>
      ))}
    </>
  );
}
