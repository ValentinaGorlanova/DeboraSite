/* eslint-disable react/prop-types */
import { ReactNode, useState } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { AiOutlineWhatsApp } from "react-icons/ai";

import { DayCard } from "../../Pages/CalendarContent/Content/mocks";
import { Dialog, DialogTitle, DialogTrigger, DialogClose, DialogContent } from "../ModalTemplate";
import SelectStatus from "../../SelectStatus";

import styles from "./styles.module.scss";

interface DialogProps {
  children: ReactNode;
  dataQuery: DayCard;
}

function EditAppointmentModal({ children, dataQuery }: DialogProps) {
  const [step, setStep] = useState(1);

  const splitDate = dataQuery.date.split("/");
  const startHour = dataQuery.hour.replace("h", ":");
  const endHour = dataQuery.hourEnd.replace("h", ":");

  return (
    <Dialog>
      <DialogTrigger asChild style={{ cursor: "pointer" }}>
        {children}
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Editar consulta</DialogTitle>
        <div className={styles.Flex}>
          <div>
            <p className={styles.SubTitle}>Quem e o cliente dessa sessão?</p>
            <div className={styles.DataWrapper}>
              <span className={styles.LabelData}>{dataQuery.name}</span>
              <AiOutlineWhatsApp size={24} color="#3A4D65" />
            </div>
          </div>

          <div>
            <div className={styles.DataWrapper}>
              <p className={styles.SubTitle}>Quem e o profissional?</p>
            </div>
            <div className={styles.DataWrapper}>
              <select name="options" id="options">
                <option value="" disabled selected>
                  Debora Barros
                </option>
                <option value="saab">Debora Barros</option>
                <option value="mercedes">Debora Barros</option>
                <option value="audi">Debora Barros</option>
              </select>
            </div>
          </div>

          <div className={`${styles.DataWrapper} ${styles.column}`}>
            <p className={styles.SubTitle}>Data e Horario</p>
            <div className={styles.InputsWrapper}>
              <input className={styles.DateInput} type="date" id="start" name="date" value={`${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`} />

              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <input className={styles.HourInput} type="time" id="start" name="start" value={startHour} />
                <div />
                <input className={styles.HourInput} type="time" id="end" name="end" value={endHour} />
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", marginBottom: "10px" }}>
            <p className={styles.SubTitle}>Essa consulta será:</p>
            <form>
              <input type="radio" id="Presencial" name="Presencial" value="Presencial" />
              <span className={styles.RadioLabel}>Presencial</span>
              <input type="radio" id="Online" name="Online" value="Online" />
              <span className={styles.RadioLabel}>Online</span>
            </form>
          </div>

          <div className={styles.RadioContainer}>
            <div>
              <input type="radio" id="Online" name="Online" value="Online" />
              <span className={styles.RadioLabel}>Atualizar somente essa consulta</span>
            </div>

            <div>
              <input type="radio" id="Online" name="Online" value="Online" />
              <span className={styles.RadioLabel}>Atualizar todas as recorrencias</span>
            </div>
          </div>

          <div style={{ marginTop: "20px" }}>
            <span className={styles.StatusLabel}>
              Status de consulta:
              <SelectStatus toTop />
            </span>
          </div>
        </div>
        <DialogClose asChild>
          <button className={styles.IconButton} aria-label="Close">
            <Cross2Icon />
          </button>
        </DialogClose>
        <DialogClose asChild>
          <div className={styles.ButtonsContainer}>
            <button className={styles.ButtonsModal} type="button" onClick={() => setStep(2)}>
              Salvar alterações
            </button>
          </div>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}

export default EditAppointmentModal;
