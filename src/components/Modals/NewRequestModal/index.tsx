/* eslint-disable react/prop-types */
import { ReactNode, useState } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { RiUser3Fill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillClockCircle } from "react-icons/ai";
// import UseAnimations from "react-useanimations";
// import radioButton from "react-useanimations/lib/radioButton";

import { Dialog, DialogTitle, DialogTrigger, DialogClose, DialogContent } from "../ModalTemplate";
import styles from "./styles.module.scss";

interface DialogProps {
  children: ReactNode;
}

function NewRequestModal({ children }: DialogProps) {
  const [step, setStep] = useState(1);
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      {step === 1 ? (
        <DialogContent>
          <DialogTitle>Detalhes da solicitação</DialogTitle>
          <div className={styles.Flex}>
            <div>
              <p className={styles.SubTitle}>Informacoes pessoais</p>
              <div className={styles.DataWrapper}>
                <RiUser3Fill size={24} color="#3A4D65" />
                <span className={styles.LabelData}>Nome: Gabriela Silva</span>
              </div>
              <div className={styles.DataWrapper}>
                <IoMdMail size={24} color="#3A4D65" />
                <span className={styles.LabelData}>Email: gabriela_silva@gmail.com</span>
              </div>
              <div className={styles.DataWrapper}>
                <BsFillTelephoneFill size={24} color="#3A4D65" />
                <span className={styles.LabelData}>Telefone: (11) 98453 7532</span>
              </div>
              <div className={styles.DataWrapper}>
                <span className={styles.LabelData}>Idade: 30</span>
              </div>

              <p className={styles.SubTitle}>Motivos selecionados</p>
              <div className={styles.DataWrapper}>
                <input type="checkbox" />
                <span className={`${styles.LabelData} ${styles.check}`}>Ansiedade</span>
              </div>
              <div className={styles.DataWrapper}>
                <input type="checkbox" />
                <span className={`${styles.LabelData} ${styles.check}`}>Fobia Social</span>
              </div>
            </div>
            <div className={styles.DateAndHourContainer}>
              <span className={styles.AsideCardTitle}>Data e Horario</span>
              <div className={styles.DataWrapper}>
                <IoMdMail size={18} color="#3A4D65" />
                <span className={`${styles.LabelData} ${styles.small}`}>Quarta, 01 Maio 2022</span>
              </div>
              <div className={styles.DataWrapper}>
                <AiFillClockCircle size={18} color="#3A4D65" />
                <span className={`${styles.LabelData} ${styles.small}`}>Horario: 14h00</span>
              </div>
              <div className={styles.DataWrapper}>
                <AiFillClockCircle size={18} color="#3A4D65" />
                <span className={`${styles.LabelData} ${styles.small}`}>Online</span>
              </div>
              <div className={styles.DataWrapper}>
                <span className={`${styles.LabelData} ${styles.small}`}>Primeira consulta</span>
              </div>
            </div>
          </div>
          <DialogClose asChild>
            <button className={styles.IconButton} aria-label="Close">
              <Cross2Icon />
            </button>
          </DialogClose>
          <div className={styles.ButtonsContainer}>
            <button className={`${styles.ButtonsModal} ${styles.filled}`} type="button" onClick={() => setStep(2)}>
              Aceitar solicitacao
            </button>
            <button className={`${styles.ButtonsModal} ${styles.outline}`} type="button">
              Entrar em contato
            </button>
          </div>
        </DialogContent>
      ) : (
        <DialogContent>
          <DialogTitle>Solicitacao aceita</DialogTitle>
          <div className={`${styles.Flex} ${styles.center}`} style={{ marginBottom: "20px" }}>
            {/* <UseAnimations animation={radioButton} size={46} autoplay /> */}
          </div>

          <DialogClose asChild onClick={() => setStep(1)}>
            <button className={styles.IconButton} aria-label="Close">
              <Cross2Icon />
            </button>
          </DialogClose>
          <div className={styles.ButtonsContainer}>
            <a href="/admin/calendar">
              <button className={`${styles.ButtonsModal} ${styles.filled}`} type="button">
                Ir para agenda
              </button>
            </a>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}

export default NewRequestModal;
