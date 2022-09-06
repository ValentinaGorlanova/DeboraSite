import { Dispatch, SetStateAction, useState } from "react";
import NewQueryModal from "../NewQueryModal";
import styles from "./styles.module.scss";

import RenderHeaderCalendar from "./HeaderCalendar";
import RenderBodyOfCalendar from "./BodyCalendar";
import { ArrowLeftIcon } from "@/components/Icons/ArrowLeftIcon";
import { ArrowRightIcon } from "@/components/Icons/ArrowRightIcon";

interface CalendarProp {
  selectDayOfWeek: string;
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
}

export default function Calendar({ selectDayOfWeek, date, setDate }: CalendarProp) {
  const [showModal, setShowModal] = useState(false);
  const [dateSelect, setDateSelect] = useState(new Date(0, 0, 0));

  function handleChangeDay(value: number) {
    const newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    if (selectDayOfWeek === "day") newDate.setDate(date.getDate() + value);
    if (selectDayOfWeek === "month") newDate.setMonth(date.getMonth() + value);
    if (selectDayOfWeek === "week") newDate.setDate(date.getDate() + value);

    setDate(newDate);
  }

  function handleShowModal(dateSelected: Date) {
    setShowModal(!showModal);
    setDateSelect(dateSelected);
  }

  function handleChangeMonthWithClick(monthNumber: number) {
    const newDate = new Date(date.getFullYear(), monthNumber, date.getDate());
    setDate(newDate);
  }

  function handleChangeWeekWithClick(weekDayNumber: number, monthNumber: number) {
    const newDate = new Date(date.getFullYear(), monthNumber, weekDayNumber);
    setDate(newDate);
  }

  return (
    <>
      <NewQueryModal show={showModal} date={dateSelect} onClose={() => setShowModal(!showModal)} />
      <div className={styles.calendarContainer}>
        <div className={styles.calendarContainerHeader}>
          <button onClick={() => handleChangeDay(-1)}>
            <ArrowLeftIcon />
          </button>
          <span>{`${date.toLocaleDateString("pt-BR", { month: "long" })} ${date.getFullYear()}`}</span>

          <button onClick={() => handleChangeDay(1)}>
            <ArrowRightIcon />
          </button>
        </div>

        <div className={`${styles.DayOfWeeksContainer} ${selectDayOfWeek === "month" ? styles.bold : ""}`}>
          <RenderHeaderCalendar
            selectOption={selectDayOfWeek}
            date={date}
            changeWeek={(weekDay, monthNumber) => handleChangeWeekWithClick(weekDay, monthNumber)}
            changeMonth={(monthNumber) => handleChangeMonthWithClick(monthNumber)}
          />
        </div>

        <RenderBodyOfCalendar optionSelect={selectDayOfWeek} date={date} onShowModal={(dateSelected) => handleShowModal(dateSelected)} />
      </div>
    </>
  );
}
