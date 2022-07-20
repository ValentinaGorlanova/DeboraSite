import { AiOutlineSearch } from "react-icons/ai";

import styles from "./styles.module.scss";
import { ArrowLeftIcon } from "@/components/Icons/ArrowLeftIcon";
import { ArrowRightIcon } from "@/components/Icons/ArrowRightIcon";
import { PencilIcon } from "@/components/Icons/PencilIcon";
import { NoteIcon } from "@/components/Icons/NoteIcon";
import { CalendarIcon } from "@/components/Icons/CalendarIcon";

export function Content() {
  return (
    <div className={styles.container}>
      {/* Input Seach */}
      <div className={styles.InputSearch}>
        <input type="text" placeholder="Pesquise por pacientes" />
        <button className={styles.buttonSearch}>
          <AiOutlineSearch size={20} />
        </button>
      </div>

      <div className={styles.SubmenuButtons}>
        <div className={styles.buttons}>
          <button className={styles.filled}>Sessoes por dia</button>
          <button className={styles.outline}>Agenda geral</button>
        </div>

        <select name="options" id="options">
          <option value="" disabled selected>
            Opcoes e ferramentas
          </option>
          <option value="saab">Teste</option>
          <option value="mercedes">Teste</option>
          <option value="audi">Teste</option>
        </select>
      </div>
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
            </div>
            <div className={styles.Day}>
              <span>08h00</span>
            </div>
            <div className={styles.Day}>
              <span>09h00</span>
            </div>
            <div className={styles.Day}>
              <span>10h00</span>
            </div>
            <div className={styles.Day}>
              <span>11h00</span>
            </div>
            <div className={styles.Day}>
              <span>12h00</span>
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
        <div className={styles.SectionsContainer}>
          <div className={styles.SectionDate}>
            <CalendarIcon />
            <span>Sessoes do dia 01/05/2022</span>
          </div>
          <div className={styles.Sections}>
            <div>
              <p>Paciente</p>
              <span>Gabriel Silva</span>
            </div>
            <div>
              <p>Profissional</p>
              <span>Debora Barros</span>
            </div>
            <div>
              <p>Data</p>
              <span>01/05/22</span>
            </div>
            <div>
              <p>Horario</p>
              <span>9h00 - 9h40</span>
            </div>

            <div>
              <p>Notas</p>
              <div style={{ display: "flex" }}>
                <NoteIcon />
                <PencilIcon />
              </div>
            </div>
          </div>
          <div className={styles.Sections}>
            <div>
              <p>Paciente</p>
              <span>Gabriel Silva</span>
            </div>
            <div>
              <p>Profissional</p>
              <span>Debora Barros</span>
            </div>
            <div>
              <p>Data</p>
              <span>01/05/22</span>
            </div>
            <div>
              <p>Horario</p>
              <span>9h00 - 9h40</span>
            </div>

            <div>
              <p>Notas</p>
              <div style={{ display: "flex" }}>
                <NoteIcon />
                <PencilIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
