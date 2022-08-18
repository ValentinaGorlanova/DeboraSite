import { BsArrowLeftShort } from "react-icons/bs";
import { CalendarSection } from "./Calendar/CalendarSection";
import { Content } from "./Content";
import { SidebarMenu } from "./SidebarMenu";
import styles from "./styles.module.scss";

import InputSearch from "./Content/component/InputSearch";
import { ConfigContextProvider } from "@/lib/configContext";

export function CalendarContent() {
  return (
    <ConfigContextProvider>
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

          <Content />
        </main>
      </div>
    </ConfigContextProvider>
  );
}
