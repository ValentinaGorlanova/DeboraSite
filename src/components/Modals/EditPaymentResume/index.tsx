/* eslint-disable react/prop-types */
import React, { ReactNode, useState } from "react";
import { styled } from "@stitches/react";
import { Cross2Icon } from "@radix-ui/react-icons";

import { Dialog, DialogTitle, DialogTrigger, DialogClose, DialogContent } from "../ModalTemplate";

import styles from "./styles.module.scss";
import EditData from "./Components/EditData";
import EditContact from "./Components/EditContact";


// Your app...
const Flex = styled("div", { display: "flex" });

interface ModalDataProps {
  children: ReactNode;
  initialTab: number;
}

export function EditPaymentResume({ children, initialTab }: ModalDataProps) {
  const [activeTab, setActiveTab] = useState(initialTab);
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Editar</DialogTitle>
        <div className={styles.TabsContainer}>
          <button className={`${styles.SelectTabButton} ${activeTab === 0 ? styles.active : styles.ghost}`} onClick={() => setActiveTab(0)}>
          Dados principais
          </button>
          <button className={`${styles.SelectTabButton} ${activeTab === 1 ? styles.active : styles.ghost}`} onClick={() => setActiveTab(1)}>
          Contato
          </button>
        </div>

        {activeTab === 0 && <EditData />}
        {activeTab === 1 && <EditContact />}

        {/* end */}
        <Flex css={{ marginTop: 25, justifyContent: "center" }}>         
          <DialogClose asChild>
            <button className={styles.Button}>Salvar cadastro</button>
          </DialogClose> :
          <DialogClose asChild>
          <button className={styles.IconButton} aria-label="Close">
            <Cross2Icon />
          </button>
        </DialogClose>
        </Flex>
      </DialogContent>
    </Dialog>
  );
}
