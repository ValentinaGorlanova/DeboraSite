import Link from 'next/link';
import { useRouter } from "next/router";
import { menu } from '../SidebarMenu'
import styles from "./styles.module.scss";

import Home from "@/components/Icons/Home";

export default function Navigation() {
  const router = useRouter();

  return (
    <div className={styles.navigation}>
        <Link href='/admin/dashboard'>
            <a className={styles.home}>
            <Home />
            <span>Tela inicial</span>
            </a>
        </Link>
        {menu.map((item, i) => {
            if(router.pathname === item.link) {
                return(
                    <div className={styles.current_link} key={i}>
                        /{item.icon}
                        { item.name }
                    </div>
                    
                )
            }
        })}       
    </div>
  );
}