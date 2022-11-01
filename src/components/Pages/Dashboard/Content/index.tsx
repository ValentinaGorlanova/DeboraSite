import NextLink from "next/link";

import { AiFillClockCircle } from "react-icons/ai";
import { RiUser3Fill, RiPhoneFill } from "react-icons/ri";

import styles from "./styles.module.scss";
import CalendarWithQuery from "@/components/CalendarWithQuery";

import IconConsultationDashboard from "@/components/Icons/IconConsultationDashboard";
import IconFinancesDashboard from "@/components/Icons/IconFinancesDashboard";
import IconPromptuaryDashboard from "@/components/Icons/IconPromptuaryDashboard";

import NewRequestModal from "@/components/Modals/NewRequestModal";

import { useUserContext } from "@/lib/UserContext";

export default function Content() {
  const { userData } = useUserContext();

  const CardData = [
    {
      id: 1,
      title: "Consultas do dia",
      icon: <IconConsultationDashboard />,
      total: 5,
    },
    {
      id: 2,
      title: "Prontuário do dia",
      icon: <IconPromptuaryDashboard />,
      total: 5,
    },
    {
      id: 2,
      title: "Financeiro do dia",
      icon: <IconFinancesDashboard />,
      total: 10,
    },
  ];

  const solicitationsData = [
    {
      id: 1,
      name: "Gabriela Silva",
      createdAt: "5",
      phone: "(99)99999 9999",
      link: "#",
    },
    {
      id: 2,
      name: "Daniel Rocha",
      createdAt: "2",
      phone: "(99)98888 1111",
      link: "#",
    },
    {
      id: 2,
      name: "Silvia Guimarães ",
      createdAt: "1",
      phone: "(99)98833 8425",
      link: "#",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Banner  */}
      <div className={styles.bannerDashboard}>
        <h1 className={styles.firstTitle}>Olá, Dra. {userData.displayName}</h1>

        <div className={styles.containerSub}>
          <div>
            <h1 className={styles.secondTitle}>Olá, Dra. {userData.displayName}</h1>
            <p>Saiba quais são os seu principais compromissos do dia.</p>
          </div>

          <img src="/peoples.png" alt="" />
        </div>
      </div>

      <div className={`${styles.row} ${styles.calendarArea}`}>
        <div className={styles.showCalendar}>
          <h1>Veja seu calendário</h1>
          <NextLink href="/admin/calendar">
            <a>Ir para agenda</a>
          </NextLink>
        </div>

        <div className={styles.calendarQuerySection}>
          <CalendarWithQuery />
        </div>
      </div>

      <div className={`${styles.row} ${styles.queryArea}`}>
        {/* Section Cards */}
        <div className={styles.CardsWrapper}>
          {CardData.map((card) => (
            <div className={styles.card} key={card.id}>
              <h1 className={styles.title}>{card.title}</h1>
              <div className={styles.description}>
                {card.icon}
                <span>{card.total}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Section new solicitations */}
        <div className={styles.solicitations}>
          <h1 className={styles.title}>Novas solicitações</h1>
          <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur </p>

          <div className={styles.contentWrapper}>
            <div className={styles.contentHeader}>
              <p>Nome</p> <p>Solicitado</p> <p>Contato</p>
            </div>
            {solicitationsData.map((item) => (
              <div className={styles.contentSolicitations} key={item.id}>
                <NewRequestModal>
                  <ul>
                    <li>
                      <RiUser3Fill /> <span className={styles.name}>{item.name}</span>
                    </li>
                    <li>
                      <AiFillClockCircle /> <span>{item.createdAt} horas atrás</span>
                    </li>
                    <li>
                      <RiPhoneFill />
                      <span> {item.phone}</span>
                    </li>
                    <li>
                      <span>
                        <a href={item.link}>Saiba mais</a>
                      </span>
                    </li>
                  </ul>
                </NewRequestModal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
