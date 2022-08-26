/* eslint-disable @typescript-eslint/no-var-requires */
import { useState } from "react";
// import Calendar from "react-calendar";

import { FaBell } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import { DropdownNotifications } from "../../DropdownMenu";

import CalendarWithQuery from "../../CalendarWithQuery";

// import { Calendar } from "react-widgets/cjs";
// import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
// import "react-widgets/styles.css";

import { menu } from "../SidebarMenu";
import styles from "./Calendar.module.scss";
// import "react-calendar/dist/Calendar.css";

export function CalendarSection() {
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
  function onChange(dates: any) {
    setDate(dates);
  }
  return (
    <div className={styles.calendarSection}>
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
      {/* Calendar component */}
      <div className={styles.showCalendar}>
        <h1>Veja seu calendário</h1> <a href="/admin/calendar">Ir para agenda</a>
      </div>

      <CalendarWithQuery />

      {/* Menu Tablet */}
      <button className={styles.buttonMenu} onClick={handleClick}>
        <img src="/toggle.svg" alt="aa" />
      </button>
      {open && (
        <>
          <div className={styles.overlay} onClick={handleClick}>
            overlay
          </div>
          <div className={styles.menuTablet}>
            <header className={styles.header}>
              <img className={styles.logo} src="/logoMobile.png" alt="logo" />

              <button className={styles.buttonClose} onClick={handleClick}>
                <RiCloseFill size={28} />
              </button>
            </header>

            <ul>
              {menu.map((item, index) => (
                <a href="#" key={item.name} onClick={handleClick}>
                  <li>
                    <span> {item.icon} </span>
                    {item.name}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
