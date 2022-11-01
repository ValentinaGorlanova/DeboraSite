import React, { ReactNode, useState } from "react";

import SendInvoice from "../SendInvoiceModal/Components/SendModal";
import Sended from "../SendInvoiceModal/Components/Sended";
import { EmitInvoice } from "./Components/EmitModal";
import Emited from "./Components/Emited";
import { Cross2Icon } from "@radix-ui/react-icons";

import { Dialog, DialogTrigger, DialogClose, DialogContent } from "../ModalTemplate";


import styles from "./styles.module.scss";

interface ModalDataProps {
  children: ReactNode;
}


export function EmitInvoiceModal({ children }: ModalDataProps) {
  const [activeTab, setActiveTab] = useState(0);

  function changeBtns (num: number) {
    switch (num) {
      case 0:
        return (
          <button className={styles.Button}
          onClick={() => setActiveTab(1)}
          >Emitir Nota Fiscal</button>
        )
      case 3:
        return (
          <DialogClose asChild>
            <button className={styles.Button}
            onClick={() => setActiveTab(0)}
            >Ok</button>
          </DialogClose>
        )
      default:
        return(
          <div className={styles.btns}>
          <DialogClose asChild 
          style={
            activeTab === 2 ? { display: 'none'} : { display: 'inline'}
           }>
            <button className={styles.Button2}
            onClick={() => setActiveTab(0)}
            >Agora não</button>
          </DialogClose> 
            <button className={styles.Button}
            onClick={() => activeTab === 2 ? setActiveTab(3) : setActiveTab(2)}
            >Enviar Nota Fiscal
            </button> 
        </div>
        )
      }
    }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent 
        style={{
          width: '640px',
          padding: '32px 60px'
          }}>
          {activeTab === 0 && <EmitInvoice/>}
          {activeTab === 1 && <Emited/>}
          {activeTab === 2 && <SendInvoice/>}
          {activeTab === 3 && <Sended/>}
          
          {changeBtns(activeTab)}  
            
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