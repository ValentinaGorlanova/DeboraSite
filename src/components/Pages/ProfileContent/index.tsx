import { CalendarSection } from "./Calendar/CalendarSection";
import { Content } from "./Content";
import { SidebarMenu } from "./SidebarMenu";
import styles from "./styles.module.scss";

export function ProfileContent() {
  return (
    <div className={styles.dashboard}>
      <SidebarMenu />
      <Content />
      <CalendarSection />
    </div>
  );
}
