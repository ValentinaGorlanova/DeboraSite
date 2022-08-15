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

  function handleChangeDay(value: number) {
    const newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    if (selectDayOfWeek === "day") newDate.setDate(date.getDate() + value);
    if (selectDayOfWeek === "month") newDate.setMonth(date.getMonth() + value);
    if (selectDayOfWeek === "week") newDate.setDate(date.getDate() + (value === 1 ? 7 : -7));

    setDate(newDate);
  }

  return (
    <>
      <NewQueryModal show={showModal} onClose={() => setShowModal(!showModal)} />
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
          <RenderHeaderCalendar selectOption={selectDayOfWeek} date={date} />
        </div>

        <RenderBodyOfCalendar optionSelect={selectDayOfWeek} date={date} onShowModal={() => setShowModal(!showModal)} />
      </div>
    </>
  );
}
