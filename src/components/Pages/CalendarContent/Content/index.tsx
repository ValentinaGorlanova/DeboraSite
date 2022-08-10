/* eslint-disable @typescript-eslint/no-var-requires */
import { useState } from "react";
// must go before plugins

import { BsFillCalendar2Fill } from "react-icons/bs";
import styles from "./styles.module.scss";
import SectionCard from "./component/SectionCard";
import CardImage from "./component/CardImage";
import { ArrowLeftIcon } from "@/components/Icons/ArrowLeftIcon";
import { ArrowRightIcon } from "@/components/Icons/ArrowRightIcon";

import { CalendarIcon } from "@/components/Icons/CalendarIcon";

// The import order DOES MATTER here. If you change it, you'll get an error!
// const EventCalendar = require("react-event-calendar");

export function Content() {
  const [currentTab, setCurrentTab] = useState(1);
  const [selectDayOfWeek, setSelectDayOfWeek] = useState("week");
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
            <option value="">Debora Barros</option>
          </select>
        </div>

        <select name="options" id="options" className={currentTab === 2 ? styles.mobHidden : ""}>
          <option value="">Opcoes e ferramentas</option>
          <option value="">Opcoes e ferramentas</option>
          <option value="">Opcoes e ferramentas</option>
          <option value="">Opcoes e ferramentas</option>
        </select>
      </div>
      {/* aaaaaaaaaaaaa */}
      {currentTab === 2 && (
        <div className={styles.ProfissionalSelect}>
          <p>Escolha um profissional</p>
          <select name="options" id="options">
            <option value="">Debora Barros</option>
          </select>
        </div>
      )}

      <div className={`${styles.SubmenuButtons} ${currentTab === 1 ? styles.buttonsDesktop : ""}`}>
        <div className={styles.buttons}>
          <button className={currentTab === 1 ? styles.filled : styles.outline} onClick={() => setCurrentTab(1)}>
            Sessões por dia
          </button>
          <button className={currentTab === 1 ? styles.outline : styles.filled} onClick={() => setCurrentTab(2)}>
            Agenda geral
          </button>
        </div>

        {currentTab === 1 ? (
          <select name="options" id="options">
            <option value="" disabled selected>
              Opcões e ferramentas
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
          <div className={styles.calendarContainer}>
            <div className={styles.calendarContainerHeader}>
              <button>
                <ArrowLeftIcon />
              </button>
              <span>Maio 2022</span>
              <button>
                <ArrowRightIcon />
              </button>
            </div>
            <div className={styles.calendarContainerDayOfWeek}>
              <p>qua</p> <span>01</span>
            </div>
            <div className={styles.Days}>
              <div className={styles.Day}>
                <span>07h00</span>

                <div className={styles.dailyWrapper}>
                  <div className={styles.dailyCard}>
                    <p>Gabriel Silvas</p>
                    <p>09h00 - 09h40</p>
                  </div>
                  <div className={styles.dailyCard}>
                    <p>Gabriel Silva</p>
                    <p>09h00 - 09h40</p>
                  </div>
                  <div className={styles.dailyCard}>
                    <p>Gabriel Silva</p>
                    <p>09h00 - 09h40</p>
                  </div>
                </div>
              </div>

              <div className={`${styles.Day} ${styles.emptyLine}`}>
                <span>08h00</span>
                <div className={styles.dailyWrapper}></div>
              </div>
              <div className={`${styles.Day} ${styles.emptyLine}`}>
                <span>09h00</span>
                <div className={styles.dailyWrapper}></div>
              </div>
              <div className={`${styles.Day} ${styles.emptyLine}`}>
                <span>10h00</span>
                <div className={styles.dailyWrapper}></div>
              </div>
              <div className={`${styles.Day} ${styles.emptyLine}`}>
                <span>11h00</span>
                <div className={styles.dailyWrapper}></div>
              </div>
              <div className={`${styles.Day} ${styles.emptyLine}`}>
                <span>12h00</span>
                <div className={styles.dailyWrapper}></div>
              </div>
            </div>
          </div>
          {/* <div className={styles.DaySections}>
          <div className={styles.DaySectionsTitle}>
            <CalendarIcon />
            <span>Sessoes do dia 01/05/2022</span>
          </div>
          <div className={styles.MissingSections}>
            <img src="/daySection.svg" alt="" />
            <div className={styles.MissingSectionsText}>
              <p>Voce ainda nao tem nenhuma consulta agendada para esse dia!</p>
              <p>Adicione consultas no calendario ao lado.</p>
            </div>
          </div> 
        </div> */}
          <div className={`${styles.SubmenuButtons} ${styles.buttonsMobile}`}>
            <div className={styles.buttons}>
              <button className={currentTab === 1 ? styles.filled : styles.outline} onClick={() => setCurrentTab(1)}>
                <CalendarIcon />
                Sessoes por dia
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
              <span>Sessoes do dia 01/05/2022</span>
            </div>

            <SectionCard />
            <SectionCard />
            <CardImage />
          </div>
          {/* <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" /> */}
        </div>
      ) : (
        <div className={styles.Content}>
          <div className={styles.calendarContainer}>
            <div className={styles.calendarContainerHeader}>
              <button>
                <ArrowLeftIcon />
              </button>
              <span>Maio 2022</span>

              <button>
                <ArrowRightIcon />
              </button>
            </div>

            <div className={styles.DayOfWeeksContainer}>
              {selectDayOfWeek === "week" ? (
                <>
                  <div className={`${styles.calendarSmallContainerDayOfWeek} `}>
                    <p>dom</p> <span>28</span>
                  </div>
                  <div className={`${styles.calendarSmallContainerDayOfWeek} `}>
                    <p>seg</p> <span>29</span>
                  </div>
                  <div className={`${styles.calendarSmallContainerDayOfWeek} `}>
                    <p>ter</p> <span>30</span>
                  </div>
                  <div className={`${styles.calendarSmallContainerDayOfWeek} ${styles.calendarDayActive}`}>
                    <p>quar</p> <span>01</span>
                  </div>
                  <div className={`${styles.calendarSmallContainerDayOfWeek} `}>
                    <p>qui</p> <span>02</span>
                  </div>
                  <div className={`${styles.calendarSmallContainerDayOfWeek} `}>
                    <p>sex</p> <span>03</span>
                  </div>
                  <div className={`${styles.calendarSmallContainerDayOfWeek} `}>
                    <p>sab</p> <span>04</span>
                  </div>
                </>
              ) : (
                <div className={styles.calendarContainerDayOfWeek}>
                  <p>qua</p> <span>01</span>
                </div>
              )}
            </div>

            <div className={styles.Days}>
              <div className={styles.Day}>
                <span>07h00</span>

                <div className={styles.dailyWrapper}>
                  <div className={styles.dailyCard}>
                    <p>Gabriel Silvas</p>
                    <p>09h00 - 09h40</p>
                  </div>
                  <div className={styles.dailyCard}>
                    <p>Gabriel Silva</p>
                    <p>09h00 - 09h40</p>
                  </div>
                  <div className={styles.dailyCard}>
                    <p>Gabriel Silva</p>
                    <p>09h00 - 09h40</p>
                  </div>
                </div>
              </div>

              <div className={styles.Day}>
                <span>08h00</span>
                <div className={styles.dailyWrapper}>
                  <div className={styles.dailyCard}>
                    <p>Gabriel Silvas</p>
                    <p>09h00 - 09h40</p>
                  </div>
                </div>
              </div>
              <div className={`${styles.Day} ${styles.emptyLine}`}>
                <span>09h00</span>
                <div className={styles.dailyWrapper}></div>
              </div>
              <div className={`${styles.Day} ${styles.emptyLine}`}>
                <span>10h00</span>
                <div className={styles.dailyWrapper}></div>
              </div>
              <div className={`${styles.Day} ${styles.emptyLine}`}>
                <span>11h00</span>
                <div className={styles.dailyWrapper}></div>
              </div>
              <div className={`${styles.Day} ${styles.emptyLine}`}>
                <span>12h00</span>
                <div className={styles.dailyWrapper}></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div></div>
    </div>
  );
}
