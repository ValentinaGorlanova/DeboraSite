import { useState } from "react";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import { BsArrowLeftShort } from "react-icons/bs";
import styles from "./styles.module.scss";

import { SidebarMenu } from "./components/SidebarMenu";
import InputSearch from "./components/InputSearch";
import Navigation from "./components/Navigation";
import CalendarSection from "./components/Calendar";

interface PropsLayout {
  children?: ReactElement;
}

export default function Layout({ children }: PropsLayout) {
  const router = useRouter();
  
//modified
  return (
    <div className={styles.dashboard}>
      <SidebarMenu />

      <main className={styles.contentArea}>
        <header className={styles.header}>
          <div className={styles.flex}>
            <button className={styles.backButtom}>
              <BsArrowLeftShort />
            </button>
            {router.pathname == '/admin/dashboard' ? <InputSearch /> :  <Navigation/>}
          </div>

          <CalendarSection />
        </header>

        {children}
      </main>
    </div>
  );
}
