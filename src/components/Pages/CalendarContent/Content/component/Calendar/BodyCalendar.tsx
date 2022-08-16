import { MouseEvent, useState } from "react";
import SmallModal from "../SmallModal";
import styles from "./styles.module.scss";

import { object, DayCard, ObjectType } from "./mocks";
import { getDaysOfMonth } from "@/utils/Calendar";

interface BodyCalenderProps {
  optionSelect: string;
  date: Date;
  onShowModal?: () => void;
}

type PosArgs = { x: number; y: number };

export default function RenderBodyOfCalendar({ optionSelect, date, onShowModal }: BodyCalenderProps) {
  const daysOfMonth = getDaysOfMonth(date);
  const schedule = object[date.getMonth() as keyof ObjectType];

  const hourCalendarWeek = ["07h00", "08h00", "09h00", "10h00", "11h00", "12h00", "13h00", "14h00", "15h00", "16h00", "17h00"];
  const scheduleDay = schedule[date.getDate()];

  const [showSmallModall, setShowSmallModall] = useState({
    show: false,
    pos: { x: 0, y: 0 },
  });

  function handleShowModal(value: boolean, smallModal: boolean, pos: PosArgs) {
    if (!value)
      setShowSmallModall({
        show: smallModal,
        pos,
      });
    if (onShowModal && value) onShowModal();
  }

  function handleShowSmallModal(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    const divElement = e.target as HTMLDivElement;

    handleShowModal(false, true, { x: divElement.offsetLeft, y: divElement.offsetTop });
  }

  function filterByFirstNotChecked(daysCards: Array<DayCard>) {
    return daysCards.find((dayCard) => dayCard.ckecked === false);
  }

  if (optionSelect !== "month")
    return (
      <div className={styles.Days}>
        {hourCalendarWeek &&
          hourCalendarWeek.map((hour) => {
            return (
              <div className={styles.Day} key={hour}>
                <span>{hour}</span>

                <div className={styles.dailyWrapper}>
                  {scheduleDay &&
                    scheduleDay.map(
                      (day: DayCard) =>
                        day.hour === hour && (
                          <div className={styles.dailyCard} key={day.name}>
                            <p>{day.name}</p>
                            <p>
                              {day.hour} - {day.hourEnd}
                            </p>
                          </div>
                        )
                    )}
                </div>
              </div>
            );
          })}
      </div>
    );

  return (
    <>
      <SmallModal show={showSmallModall.show} pos={showSmallModall.pos} onClose={() => handleShowModal(false, false, { x: 0, y: 0 })} />
      <div className={styles.monthContainer}>
        {daysOfMonth.map((day) => {
          return (
            <div
              className={`${styles.monthDay} ${day.grayColor ? styles.grayColor : ""}`}
              key={day.key}
              onClick={() => handleShowModal(true, false, { x: 0, y: 0 })}
            >
              <span className={styles.numberDay}>{day.dayNumber}</span>

              {schedule && schedule[day.dayNumber] && filterByFirstNotChecked(schedule[day.dayNumber]) && (
                <div className={styles.dailyCard} onClick={handleShowSmallModal}>
                  <p>{filterByFirstNotChecked(schedule[day.dayNumber])?.name}</p>
                  <p>
                    {filterByFirstNotChecked(schedule[day.dayNumber])?.hour} - {filterByFirstNotChecked(schedule[day.dayNumber])?.hourEnd}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
