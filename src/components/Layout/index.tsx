import { ReactElement } from "react";

import { BsArrowLeftShort } from "react-icons/bs";
import styles from "./styles.module.scss";

import { SidebarMenu } from "./components/SidebarMenu";
import InputSearch from "./components/InputSearch";
import CalendarSection from "./components/Calendar";

interface PropsLayout {
  children?: ReactElement;
}

export default function Layout({ children }: PropsLayout) {
  return (
    <div className={styles.dashboard}>
      <SidebarMenu />

      <main className={styles.contentArea}>
        <header className={styles.header}>
          <div className={styles.flex}>
            <button className={styles.backButtom}>
              <BsArrowLeftShort />
            </button>

            <InputSearch />
          </div>

          <CalendarSection />
        </header>

        {children}
      </main>
    </div>
  );
}
