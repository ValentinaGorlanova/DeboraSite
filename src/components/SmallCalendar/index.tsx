import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

import { ArrowRightIcon } from "@/components/Icons/ArrowRightIcon";
import { ArrowLeftIcon } from "@/components/Icons/ArrowLeftIcon";

import { getDaysOfMonth, getWeek } from "@/utils/Calendar";

import { useWindowDimension } from "@/hooks/useWindow";

export default function SmallCalendar() {
  const currentDate = new Date();
  const [amountDate, setAmountDate] = useState(currentDate);

  const windowDimension = useWindowDimension();

  const [daysMonth, setDaysMonth] = useState(getDaysOfMonth(amountDate));

  useEffect(() => {
    if (windowDimension.width > 660 && windowDimension.width < 1024) setDaysMonth(getWeek(amountDate));
    else setDaysMonth(getDaysOfMonth(amountDate));
  }, [windowDimension, amountDate]);

  function handleChangeMonth(value: number) {
    if (windowDimension.width > 660 && windowDimension.width < 1024) {
      const newMonth = new Date(amountDate.getFullYear(), amountDate.getMonth(), amountDate.getDate() + value);
      setAmountDate(newMonth);
    } else {
      const newMonth = new Date(amountDate.getFullYear(), amountDate.getMonth() + value, amountDate.getDate());
      setAmountDate(newMonth);
    }
  }

  function handleChangeDay(day: number) {
    const newMonth = new Date(amountDate.getFullYear(), amountDate.getMonth(), day);
    setAmountDate(newMonth);
  }

  return (
    <div className={styles.smallCalendar}>
      <div className={styles.headerCalendar}>
        <button onClick={() => handleChangeMonth(-1)}>
          <ArrowLeftIcon />
        </button>
        <p>
          {amountDate.toLocaleDateString("pt-BR", { month: "long" })} {amountDate.getFullYear()}
        </p>
        <button onClick={() => handleChangeMonth(1)}>
          <ArrowRightIcon />
        </button>
      </div>

      <div className={`${styles.daysContainer} ${windowDimension.width > 660 && windowDimension.width < 1024 ? styles.twoLines : ""}`}>
        <p>DOM</p>
        <p>SEG</p>
        <p>TER</p>
        <p>QUA</p>
        <p>QUI</p>
        <p>SEX</p>
        <p>SAB</p>

        {daysMonth.map((day) => (
          <div
            key={day.key}
            className={`${styles.dayCalendar} ${day.dayNumber === amountDate.getDate() && !day.grayColor ? styles.activeDay : ""} 
            ${day.grayColor ? styles.grayColor : ""}`}
            onClick={() => handleChangeDay(day.dayNumber)}
          >
            {day.dayNumber}
          </div>
        ))}
      </div>
    </div>
  );
}
