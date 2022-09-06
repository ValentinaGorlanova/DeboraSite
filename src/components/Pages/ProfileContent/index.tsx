import { SidebarMenu } from "./SidebarMenu";
import { CalendarSection } from "./Calendar/CalendarSection";
import { Content } from "./Content";
import styles from "./styles.module.scss";

export function ProfileContent() {
  return (
    <div className={styles.dashboard}>
      <SidebarMenu />

      <div className={styles.rightContainer}>
        <Content />
        <CalendarSection />
      </div>
    </div>
  );
}
