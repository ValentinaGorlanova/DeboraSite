/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useCallback, useRef, useState } from "react";
import { Calendar, Close, Configs, Finances, Historic, Home, MenuMobile, Messages, Profile, User } from "./IconsMenuSvg";
import styles from "./SidebarMenu.module.scss";

export function SidebarMenu() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [open, setOpen] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  const [openMenuDropDown, setOpenMenuDropDown] = useState(false);

  const menu = [
    {
      icon: <Home />,
      name: "Inicio",
    },
    {
      icon: <User />,
      name: "Cadastro",
      link: "https://www.google.com.br",
    },
    {
      icon: <Historic />,
      name: "Histórico",
    },
    {
      icon: <Finances />,
      name: "Financeiro",
    },
    {
      icon: <Messages />,
      name: "Mensagens",
    },
    {
      icon: <Configs />,
      name: "Configurações",
    },
    {
      icon: <Close />,
      name: "Sair",
    },
  ];

  const menuMobile = [
    {
      icon: <MenuMobile />,
      name: "Menu",
    },
    {
      icon: <Home />,
      name: "Inicio",
    },
    {
      icon: <Calendar />,
      name: "Calendário",
    },
    {
      icon: <Profile />,
      name: "Perfil",
    },
  ];

  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const logoExpand = useRef<HTMLDivElement | null>(null);
  const logo = useRef<HTMLDivElement | null>(null);

  // console.log("aaaa: ", sidebarRef.current?.style.width);

  const size = sidebarRef.current?.style.width === "80px" ? true : false;

  const handleClick = useCallback(() => {
    setOpen((state) => !state);

    if (sidebarRef.current?.id !== "side") {
      return;
    }

    if (sidebarRef.current && open && size && !menuClicked) {
      console.log("e igual a 80");
      sidebarRef.current.style.width = "224px";
      logo.current.style.display = "none";
      logoExpand.current.style.display = "block";
    } else if (sidebarRef.current && !open && !size && !menuClicked) {
      sidebarRef.current.style.width = "80px";
      logo.current.style.display = "block";
      logoExpand.current.style.display = "none";
    }
  }, [open, menuClicked, size]);

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
      <div id="side" className={styles.sidebarmenu} onClick={handleClick} ref={sidebarRef}>
        <img ref={logo} className={styles.logo} src="/logoMobile.png" alt="logo" />
        <img ref={logoExpand} className={styles.logoExpand} src="/logoDashboard.png" alt="logo" />

        {/* <button onClick={handleClick}>{open ? "Abrir" : "Fechar"}</button> */}

        <ul onClick={() => setMenuClicked((state) => !state)}>
          {menu.map((item, index) => (
            <li key={item.name} className={activeIndex === index ? styles.active : ""}>
              <a href="#" onClick={() => setActiveIndex(index)}>
                {item.icon}
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Menu Mobile */}
      <div className={styles.sidebarmenuMobile}>
        <ul>
          {menuMobile.map((item, index) => (
            <a key={item.name} href="#" onClick={() => setActiveIndex(index)}>
              <li className={activeIndex === index ? styles.active : ""} onClick={() => showtest(index)}>
                <span>{item.icon}</span>
                {item.name}
              </li>

              {/* Menu Dropdown - Submenu */}
              {openMenuDropDown && (
                <div className={styles.test}>
                  {menu.map((t) => (
                    <a href={t.link} key={t.name}>
                      <li onClick={() => showtest(index)}>
                        <span>{t.icon}</span>
                        {t.name}
                      </li>
                    </a>
                  ))}
                </div>
              )}
            </a>
          ))}
        </ul>
      </div>
      {openMenuDropDown && <div className={styles.overlaySubmenuMobile} onClick={() => setOpenMenuDropDown(false)}></div>}
    </>
  );
}
