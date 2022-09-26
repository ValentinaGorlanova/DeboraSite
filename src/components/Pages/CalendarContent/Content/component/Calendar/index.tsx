import { useState } from "react";
import NewQueryModal from "../NewQueryModal";
import styles from "./styles.module.scss";

import RenderHeaderCalendar from "./HeaderCalendar";
import RenderBodyOfCalendar from "./BodyCalendar";
import { ArrowLeftIcon } from "@/components/Icons/ArrowLeftIcon";
import { ArrowRightIcon } from "@/components/Icons/ArrowRightIcon";

import { useCalendarContext } from "@/lib/CalendarContext";

interface CalendarProp {
  dayDefault?: boolean;
}

export default function Calendar({ dayDefault }: CalendarProp) {
  const [showModal, setShowModal] = useState(false);
  const [dateSelect, setDateSelect] = useState(new Date(0, 0, 0));

  const { currentDate, selectDayOfWeek, handleChangeDay } = useCalendarContext();

  function handleShowModal(dateSelected: Date) {
    setShowModal(!showModal);
    setDateSelect(dateSelected);
  }

  return (
    <>
      <NewQueryModal show={showModal} date={dateSelect} onClose={() => setShowModal(!showModal)} />
      <div className={styles.calendarContainer}>
        <div className={styles.calendarContainerHeader}>
          <button onClick={() => handleChangeDay(-1)}>
            <ArrowLeftIcon />
          </button>
          <span>{`${currentDate.toLocaleDateString("pt-BR", { month: "long" })} ${currentDate.getFullYear()}`}</span>

          <button onClick={() => handleChangeDay(1)}>
            <ArrowRightIcon />
          </button>
        </div>

        <div className={`${styles.DayOfWeeksContainer} ${selectDayOfWeek === "month" ? styles.bold : ""}`}>
          <RenderHeaderCalendar selectOption={dayDefault ? "day" : selectDayOfWeek} />
        </div>

        <RenderBodyOfCalendar optionSelect={selectDayOfWeek} onShowModal={(dateSelected) => handleShowModal(dateSelected)} />
      </div>
    </>
  );
}
