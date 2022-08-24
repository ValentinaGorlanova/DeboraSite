import { MouseEvent, useState } from "react";
import SmallModal from "../SmallModal";
import { object, DayCard, ObjectType } from "../../mocks";
import styles from "./styles.module.scss";

import { getDaysOfMonth, getHourOfDay } from "@/utils/Calendar";
import { useConfigContext } from "@/lib/configContext";

import { sliceName } from "@/utils/SliceName";

interface BodyCalenderProps {
  optionSelect: string;
  date: Date;
  onShowModal: (date: Date) => void;
}

export default function RenderBodyOfCalendar({ optionSelect, date, onShowModal }: BodyCalenderProps) {
  const daysOfMonth = getDaysOfMonth(date);
  const schedule = object[date.getMonth() as keyof ObjectType];

  const { time } = useConfigContext();

  const hourCalendarWeek = getHourOfDay(time.start, time.end, time.interval);
  const scheduleDay = schedule[date.getDate()];

  const [showSmallModall, setShowSmallModall] = useState(-1);

  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth();

  function handleShowModal(dayNumber: number) {
    onShowModal(new Date(date.getFullYear(), date.getMonth(), dayNumber));
  }

  function handleShowSmallModal(e: MouseEvent<HTMLDivElement>, index: number) {
    e.stopPropagation();
    setShowSmallModall(index);
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
              <div className={styles.Day} key={hour} onClick={() => handleShowModal(date.getDate())}>
                <span>{hour}</span>

                <div className={styles.dailyWrapper}>
                  {scheduleDay &&
                    scheduleDay.map(
                      (day: DayCard) =>
                        day.hour.replace("h", ":") === hour && (
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
    <div className={styles.monthContainer}>
      {daysOfMonth.map((day) => {
        return (
          <div
            className={`${styles.monthDay} ${day.dayNumber === currentDay && date.getMonth() === currentMonth ? styles.currentCalendarDay : ""} ${
              day.grayColor ? styles.grayColor : ""
            }`}
            key={day.key}
            onClick={() => handleShowModal(day.dayNumber)}
          >
            <span className={styles.numberDay}>{day.dayNumber}</span>

            {schedule && schedule[day.dayNumber] && filterByFirstNotChecked(schedule[day.dayNumber]) && (
              <div
                className={styles.dailyCard}
                onClick={(e) => handleShowSmallModal(e, day.dayNumber)}
                onMouseEnter={(e) => handleShowSmallModal(e, day.dayNumber)}
              >
                <p>{sliceName(filterByFirstNotChecked(schedule[day.dayNumber])?.name)}</p>
                <p className={styles.hidden}>
                  {filterByFirstNotChecked(schedule[day.dayNumber])?.hour} - {filterByFirstNotChecked(schedule[day.dayNumber])?.hourEnd}
                </p>
                {showSmallModall === day.dayNumber && (
                  <SmallModal patient={filterByFirstNotChecked(schedule[day.dayNumber])} onClose={() => setShowSmallModall(-1)} />
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
