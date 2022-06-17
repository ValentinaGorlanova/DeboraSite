import { Calendar } from "./Calendar/Calendar";
import { Content } from "./Content";
import { SidebarMenu } from "./SidebarMenu";
import styles from "./styles.module.scss";

export function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <SidebarMenu />
      <Content />
      <Calendar />
    </div>
  );
}
