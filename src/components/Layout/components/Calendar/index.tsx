/* eslint-disable @typescript-eslint/no-var-requires */
import { useState } from "react";
// import Calendar from "react-calendar";
import { FaBell, FaUser, FaUsers, FaCalendarAlt } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { FiChevronDown } from "react-icons/fi";
// import { Calendar } from "react-widgets/cjs";
// import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
// import "react-widgets/styles.css";
import NextLink from "next/link";
import { DropdownNotifications } from "../../../DropdownMenu";
import styles from "./Calendar.module.scss";
// import "react-calendar/dist/Calendar.css";

import { useUserContext } from "@/lib/UserContext";

export default function CalendarSection() {
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const { userData } = useUserContext();

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
          <img src={userData.photoURL || "/profile_calendar.png"} alt="" />
        </div>

        <div className={styles.dropDownMenuContainer} onClick={() => setOpenSubMenu(!openSubMenu)}>
          <FiChevronDown size={24} />

          <div className={`${styles.dropDownMenu} ${openSubMenu ? styles.open : ""}`}>
            <ul>
              <li>
                <NextLink href="/admin/profile">
                  <a>
                    <FaUser /> Perfil
                  </a>
                </NextLink>
              </li>

              <li>
                <NextLink href="#">
                  <a>
                    <FaUsers /> Pacientes
                  </a>
                </NextLink>
              </li>

              <li>
                <NextLink href="/admin/calendar">
                  <a>
                    <FaCalendarAlt /> Calendário
                  </a>
                </NextLink>
              </li>

              <li>
                <NextLink href="/logout">
                  <a>
                    <ImExit /> Sair
                  </a>
                </NextLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
