/* eslint-disable @typescript-eslint/no-var-requires */
import { useState } from "react";
// import Calendar from "react-calendar";
import { FaBell } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
// import { Calendar } from "react-widgets/cjs";
// import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
// import "react-widgets/styles.css";
import { menu } from "../SidebarMenu";
import { DropdownNotifications } from "../../../Pages/DropdownMenu";
import styles from "./Calendar.module.scss";
// import "react-calendar/dist/Calendar.css";

export default function CalendarSection() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  // useState(() => {
  //   setDate(...date.[0], nextDay(new Date(), 1));
  // }, []);
  // Open menu
  function handleClick() {
    setOpen((state) => !state);

    console.log("menu: ", menu);
  }

  return (
    <div className={styles.calendarSection}>
      <div />

      {/* Profile */}
      <div className={styles.profile}>
        <DropdownNotifications>
          <div className={styles.iconBell}>
            <FaBell size={22} />
            <div className={styles.count}>2</div>
          </div>
        </DropdownNotifications>
        <div className={styles.avatar}>
          <img src="/profile_calendar.png" alt="" />
        </div>

        <FiChevronDown size={24} />
      </div>
    </div>
  );
}
