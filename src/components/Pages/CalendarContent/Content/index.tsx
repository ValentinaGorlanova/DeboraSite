/* eslint-disable @typescript-eslint/no-var-requires */
import { useState } from "react";
// must go before plugins

import { BsFillCalendar2Fill } from "react-icons/bs";
import styles from "./styles.module.scss";
import SectionCard from "./component/SectionCard";
import CardImage from "./component/CardImage";

import CalendarComponent from "./component/Calendar";
import ConfigModal from "./component/ConfigModal";
import { object, ObjectType } from "./mocks";
import { CalendarIcon } from "@/components/Icons/CalendarIcon";

import { useConfigContext } from "@/lib/configContext";

// The import order DOES MATTER here. If you change it, you'll get an error!
// const EventCalendar = require("react-event-calendar");

export function Content() {
  const [currentTab, setCurrentTab] = useState(1);
  const [selectDayOfWeek, setSelectDayOfWeek] = useState("week");

  const [currentDate, setCurrentDate] = useState(new Date());
  const { showQueryStatus } = useConfigContext();

  const schedule = object[currentDate.getMonth() as keyof ObjectType];
  const scheduleDay = schedule[currentDate.getDate()];

  const events = [
    {
      start: "2015-07-20",
      end: "2015-07-02",
      eventClasses: "optionalEvent",
      title: "test event",
      description: "This is a test description of an event",
    },
    {
      start: "2015-07-19",
      end: "2015-07-25",
      title: "test event",
      description: "This is a test description of an event",
      data: "you can add what ever random data you may want to use later",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Input Seach */}

      <div className={`${styles.MobileSelects} ${currentTab === 2 ? styles.showProfissinal : ""}`}>
        <div className={styles.ProfissionalSelect}>
          <p>Escolha um profissional</p>
          <select name="options" id="options">
            <option value="">Débora Barros</option>
          </select>
        </div>

        <select name="options" id="options" className={currentTab === 2 ? styles.mobHidden : ""}>
          <option value="">Opções e ferramentas</option>
          <option value="">Opções e ferramentas</option>
          <option value="">Opções e ferramentas</option>
          <option value="">Opções e ferramentas</option>
        </select>
      </div>
      {/* aaaaaaaaaaaaa */}
      {currentTab === 2 && (
        <div className={styles.buttonsConfig}>
          <div className={styles.ProfissionalSelect}>
            <p>Escolha um profissional</p>
            <select name="options" id="options">
              <option value="">Débora Barros</option>
            </select>
          </div>

          <ConfigModal>
            <button className={styles.button}>Configurar Agenda</button>
          </ConfigModal>
        </div>
      )}

      <div className={`${styles.SubmenuButtons} ${currentTab === 1 ? styles.buttonsDesktop : ""}`}>
        <div className={styles.buttons}>
          <button className={currentTab === 1 ? styles.filled : styles.outline} onClick={() => setCurrentTab(1)}>
            <CalendarIcon />
            Sessões por dia
          </button>
          <button className={currentTab === 1 ? styles.outline : styles.filled} onClick={() => setCurrentTab(2)}>
            <BsFillCalendar2Fill />
            Agenda geral
          </button>
        </div>

        {currentTab === 1 ? (
          <select name="options" id="options">
            <option value="" disabled selected>
              Opções e ferramentas
            </option>
            <option value="saab">Teste</option>
            <option value="mercedes">Teste</option>
            <option value="audi">Teste</option>
          </select>
        ) : (
          <div className={styles.asideSelects}>
            <select name="options" id="options" className={currentTab === 2 ? styles.hidden : ""}>
              <option value="" disabled selected>
                Opções e ferramentas
              </option>
              <option value="saab">Teste</option>
              <option value="mercedes">Teste</option>
              <option value="audi">Teste</option>
            </select>

            <select name="options" id="options" onChange={(e) => setSelectDayOfWeek(e.target.value)}>
              <option value="week" selected>
                Semana
              </option>
              <option value="day">Dia</option>
              <option value="month">Mês</option>
            </select>
          </div>
        )}
      </div>

      {currentTab === 1 ? (
        <div className={styles.Content}>
          <CalendarComponent selectDayOfWeek="day" date={currentDate} setDate={setCurrentDate} />
          <div className={`${styles.SubmenuButtons} ${styles.buttonsMobile}`}>
            <div className={styles.buttons}>
              <button className={currentTab === 1 ? styles.filled : styles.outline} onClick={() => setCurrentTab(1)}>
                <CalendarIcon />
                Sessões por dia
              </button>
              <button className={currentTab === 1 ? styles.outline : styles.filled} onClick={() => setCurrentTab(2)}>
                <BsFillCalendar2Fill />
                Agenda geral
              </button>
            </div>
          </div>

          <div className={styles.SectionsContainer}>
            <div className={styles.SectionDate}>
              <CalendarIcon />
              <span>Sessões do dia {currentDate.toLocaleDateString("pt-BR")}</span>
            </div>

            {scheduleDay ? scheduleDay.map((query) => <SectionCard query={query} showStatus={showQueryStatus} key={query.name} />) : <CardImage />}
          </div>
          {/* <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" /> */}
        </div>
      ) : (
        <div className={styles.Content}>
          <CalendarComponent selectDayOfWeek={selectDayOfWeek} date={currentDate} setDate={setCurrentDate} />
        </div>
      )}

      <div></div>
    </div>
  );
}
