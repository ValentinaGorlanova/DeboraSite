import styles from "./styles.module.scss";

import { getDaysOfMonth } from "@/utils/Calendar";

interface BodyCalenderProps {
  optionSelect: string;
  date: Date;
}

export default function RenderBodyOfCalendar({ optionSelect, date }: BodyCalenderProps) {
  const daysOfMonth = getDaysOfMonth(date);

  if (optionSelect !== "month")
    return (
      <div className={styles.Days}>
        <div className={styles.Day}>
          <span>07h00</span>

          <div className={styles.dailyWrapper}>
            <div className={styles.dailyCard}>
              <p>Gabriel Silvas</p>
              <p>09h00 - 09h40</p>
            </div>
            <div className={styles.dailyCard}>
              <p>Gabriel Silva</p>
              <p>09h00 - 09h40</p>
            </div>
            <div className={styles.dailyCard}>
              <p>Gabriel Silva</p>
              <p>09h00 - 09h40</p>
            </div>
          </div>
        </div>

        <div className={styles.Day}>
          <span>08h00</span>
          <div className={styles.dailyWrapper}>
            <div className={styles.dailyCard}>
              <p>Gabriel Silvas</p>
              <p>09h00 - 09h40</p>
            </div>
          </div>
        </div>
        <div className={`${styles.Day} ${styles.emptyLine}`}>
          <span>09h00</span>
          <div className={styles.dailyWrapper}></div>
        </div>
        <div className={`${styles.Day} ${styles.emptyLine}`}>
          <span>10h00</span>
          <div className={styles.dailyWrapper}></div>
        </div>
        <div className={`${styles.Day} ${styles.emptyLine}`}>
          <span>11h00</span>
          <div className={styles.dailyWrapper}></div>
        </div>
        <div className={`${styles.Day} ${styles.emptyLine}`}>
          <span>12h00</span>
          <div className={styles.dailyWrapper}></div>
        </div>
      </div>
    );

  return (
    <div className={styles.monthContainer}>
      {daysOfMonth.map((day) => {
        return (
          <div className={`${styles.monthDay} ${day.grayColor ? styles.green : ""}`} key={day.key}>
            <span className={styles.numberDay}>{day.dayNumber}</span>
          </div>
        );
      })}
    </div>
  );
}
