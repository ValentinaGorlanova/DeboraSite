/* eslint-disable @typescript-eslint/no-var-requires */
import { useState } from "react";
// import Calendar from "react-calendar";
import { AiFillClockCircle } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
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

  return (
    <div className={styles.calendarSection}>
      {/* Profile */}
      <div className={styles.profile}>
        <div className={styles.iconBell}>
          <FaBell size={22} />
          <div className={styles.count}>2</div>
        </div>

        <div className={styles.avatar}>
          <img src="/profile_calendar.png" alt="" />
        </div>

        <FiChevronDown size={24} />
      </div>
      {/* Calendar component */}
      <div className={styles.showCalendar}>
        <h1>Veja seu calendário</h1> <a href="#">Ir para agenda</a>
      </div>
      <div className={styles.calendarContainer}>
        {/* <Calendar className={styles.calendar} value={date} onChange={setDate} /> */}
        {/* {date.toDateString()} */}
        {/* <Calendar /> */}
      </div>
      {/* Next consultations */}
      <div className={styles.containerNextConsultations}>
        <h1>Próximas consultas</h1>

        <div className={styles.nextConsultations}>
          <div className={styles.left}>
            <p className={styles.day}>dia</p>
            <div className={styles.number}>1</div>
          </div>
          <div className={styles.rigth}>
            <p className={styles.title}>Consulta</p>
            <p className={styles.name}>Felipe Araújo</p>
            <p className={styles.icon}>
              <AiFillClockCircle /> 13h15
            </p>
            <p className={styles.total}>
              1 de 5 <FiChevronRight />
            </p>
          </div>
        </div>

        <div className={styles.nextConsultations}>
          <div className={styles.left}>
            <p className={styles.day}>dia</p>
            <div className={styles.number}>1</div>
          </div>
          <div className={styles.rigth}>
            <p className={styles.title}>Consulta</p>
            <p className={styles.name}>Felipe Araújo</p>
            <p className={styles.icon}>
              <AiFillClockCircle /> 13h15
            </p>
            <p className={styles.total}>
              1 de 5 <FiChevronRight />
            </p>
          </div>
        </div>
      </div>
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
