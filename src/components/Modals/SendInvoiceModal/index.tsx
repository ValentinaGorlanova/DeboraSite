import React, { ReactNode, useState } from "react";

import SendInvoise from "./Components/SendModal";
import Sended from "./Components/Sended";
import { Cross2Icon } from "@radix-ui/react-icons";

import { Dialog, DialogTrigger, DialogClose, DialogContent } from "../ModalTemplate";


import styles from "./styles.module.scss";

interface ModalDataProps {
  children: ReactNode;
}

export function SendInvoiceModal({ children }: ModalDataProps) {
  const [activeTab, setActiveTab] = useState(0);
 
  return (
    <Dialog>
    <DialogTrigger asChild>{children}</DialogTrigger>
    <DialogContent 
    style={{
      width: '640px',
      padding: '32px 60px',
      }}>
        {activeTab === 0 && <SendInvoise/>}
        {activeTab === 1 && <Sended/>}
        <p className={styles.check}>Você não selecionou um Modo de envio</p>
        { activeTab === 0  ? 
        <button className={styles.Button}
        onClick={() => setActiveTab(1)}
        >Enviar Nota Fiscal</button> : 
        <DialogClose asChild>
          <button className={styles.Button}
          onClick={() => setActiveTab(0)}
          >Ok</button>
        </DialogClose>
        }
        <DialogClose asChild>
          <button 
          className={styles.IconButton} 
          aria-label="Close"
          onClick={() => setActiveTab(0)}>
            <Cross2Icon />
          </button>
      </DialogClose>
    </DialogContent>
  </Dialog>
  );
}