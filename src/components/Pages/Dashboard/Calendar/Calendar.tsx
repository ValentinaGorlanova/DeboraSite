import { useState } from "react";
import { FaBell } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import { menu } from "../SidebarMenu";

import styles from "./Calendar.module.scss";

export function Calendar() {
  const [open, setOpen] = useState(false);

  // Open menu
  function handleClick() {
    setOpen((state) => !state);

    console.log("menu: ", menu);
  }

  return (
    <div className={styles.calendar}>
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
