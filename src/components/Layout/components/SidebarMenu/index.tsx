/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useCallback, useRef, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";

import styles from "./SidebarMenu.module.scss";

import Calendar from "@/components/Icons/Calendar";
import Close from "@/components/Icons/Close";
import Configs from "@/components/Icons/Configs";
import Finances from "@/components/Icons/Finances";
import Historic from "@/components/Icons/Historic";
import Home from "@/components/Icons/Home";
import MenuMobile from "@/components/Icons/MenuMobile";
import Messages from "@/components/Icons/Messages";
import Profile from "@/components/Icons/Profile";
import User from "@/components/Icons/User";

export const menu = [
  {
    icon: <Home />,
    name: "Inicio",
    link: "/admin/dashboard",
  },
  {
    icon: <User />,
    name: "Cadastro",
    link: "/admin/profile",
  },
  {
    icon: <Historic />,
    name: "Histórico",
    link: "/admin/history",
  },
  {
    icon: <Finances />,
    name: "Financeiro",
    link: "/admin/finance",
  },
  {
    icon: <Messages />,
    name: "Mensagens",
    link: "/admin/mensagem",
  },
  {
    icon: <Configs />,
    name: "Configurações",
    link: "#",
  },
  {
    icon: <Close />,
    name: "Sair",
    link: "/logout",
  },
];

export function SidebarMenu() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  const [openMenuDropDown, setOpenMenuDropDown] = useState(false);

  const router = useRouter();

  const menuMobile = [
    {
      icon: <MenuMobile />,
      name: "Menu",
    },
    {
      icon: <Home />,
      name: "Inicio",
      link: "/admin/dashboard",
    },
    {
      icon: <Calendar />,
      name: "Calendário",
      link: "/admin/calendar",
    },
    {
      icon: <Profile />,
      name: "Perfil",
      link: "/admin/profile",
    },
  ];

  const logo = useRef<any>(null);

  const showtest = useCallback(
    (index) => {
      if (index === 0 && activeIndex === 0) {
        setOpenMenuDropDown((state) => !state);
      } else {
        setOpenMenuDropDown(false);
      }
    },
    [activeIndex]
  );

  return (
    <>
      <div className={`${styles.sidebarmenu} ${open ? styles.open : ""}`}>
        <img className={`${styles.logo} ${open ? styles.hidden : ""}`} src="/logoMobile.png" alt="logo" onClick={() => setOpen(!open)} />
        <img className={`${styles.logoExpand} ${!open ? styles.hidden : ""}`} src="/logoDashboard.png" alt="logo" onClick={() => setOpen(!open)} />

        {/* <button onClick={handleClick}>{open ? "Abrir" : "Fechar"}</button> */}

        <ul onClick={() => setMenuClicked((state) => !state)}>
          <li className={router.pathname === "/admin/dashboard" ? styles.active : ""}>
            <NextLink href="/admin/dashboard">
              <a data-tooltip="Inicio">
                <Home />
                <span>Inicio</span>
              </a>
            </NextLink>
          </li>

          <li className={router.pathname === "/admin/profile" ? styles.active : ""}>
            <NextLink href="/admin/profile">
              <a data-tooltip="Cadastro">
                <User />
                <span>Cadastro</span>
              </a>
            </NextLink>
          </li>

          <li className={router.pathname === "/admin/history" ? styles.active : ""}>
            <NextLink href="/admin/history">
              <a data-tooltip="Histórico">
                <Historic />
                <span>Histórico</span>
              </a>
            </NextLink>
          </li>

          <li className={router.pathname === "/admin/finance" ? styles.active : ""}>
            <NextLink href="/admin/finance">
              <a data-tooltip="Financeiro">
                <Finances />
                <span>Financeiro</span>
              </a>
            </NextLink>
          </li>

          <li className={router.pathname === "/admin/mensagem" ? styles.active : ""}>
            <NextLink href="/admin/mensagem">
              <a data-tooltip="Mensagens">
                <div className={styles.messageContainer}>
                  <Messages />
                  <span className={styles.circle}></span>
                </div>
                <span>Mensagens</span>
              </a>
            </NextLink>
          </li>

          <li className={router.pathname === "#" ? styles.active : ""}>
            <NextLink href="#">
              <a data-tooltip="Configurações">
                <Configs />
                <span>Configurações</span>
              </a>
            </NextLink>
          </li>

          <li className={router.pathname === "/logout" ? styles.active : ""}>
            <NextLink href="/logout">
              <a data-tooltip="Sair">
                <Close />
                <span>Sair</span>
              </a>
            </NextLink>
          </li>
        </ul>
      </div>

      <div className={`${styles.openOrCloseMenu} ${open ? styles.open : ""}`} onClick={() => setOpen(!open)}>
        {open ? <IoMdArrowDropleft /> : <IoMdArrowDropright />}
      </div>

      {/* Menu Mobile */}
      <div className={styles.sidebarmenuMobile}>
        <ul>
          {menuMobile.map((item, index) => (
            <NextLink href={item.link || "#"} key={item.name}>
              <a href="#">
                <li className={router.pathname === item.link ? styles.active : ""} onClick={() => showtest(index)}>
                  <span>{item.icon}</span>
                  {item.name}
                </li>
              </a>
            </NextLink>
          ))}
        </ul>
      </div>

      <button className={styles.buttonMenu} onClick={() => setOpenMenuDropDown(true)}>
        <HiOutlineMenuAlt2 />
      </button>

      <div className={`${styles.subMenuDropDown} ${openMenuDropDown ? styles.show : ""}`}>
        <div className={styles.headerMenu}>
          <div>
            <img ref={logo} className={styles.logo} src="/logoMobile.png" alt="logo" />
          </div>

          <button className={styles.closeButton} onClick={() => setOpenMenuDropDown(false)}>
            <GrFormClose />
          </button>
        </div>

        {menu.map((t, index) => (
          <NextLink href={t.link || "#"} key={t.name}>
            <a>
              <li onClick={() => showtest(index)}>
                <span>{t.icon}</span>
                {t.name}
              </li>
            </a>
          </NextLink>
        ))}
      </div>
    </>
  );
}
