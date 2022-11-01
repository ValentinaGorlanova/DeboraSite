/* eslint-disable react/prop-types */
import React, { ReactNode, useState } from "react";
import { styled } from "@stitches/react";
import { Cross2Icon } from "@radix-ui/react-icons";

import { Dialog, DialogTitle, DialogTrigger, DialogClose, DialogContent } from "../ModalTemplate";

import styles from "./styles.module.scss";
import EditUserForm from "./Components/EditUserForm";
import EditUserData from "./Components/EditUserData";
import AccessConfig from "./Components/AccessConfig";
import QueryList from "./Components/QueryList";

// Your app...
const Flex = styled("div", { display: "flex" });

interface ModalDataProps {
  children: ReactNode;
  initialTab: number;
}

export function EditUserDataModal({ children, initialTab }: ModalDataProps) {
  const [activeTab, setActiveTab] = useState(initialTab);
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Editar dados</DialogTitle>
        <div className={styles.TabsContainer}>
          <button className={`${styles.SelectTabButton} ${activeTab === 0 ? styles.active : styles.ghost}`} onClick={() => setActiveTab(0)}>
            Dados principais
          </button>
          <button className={`${styles.SelectTabButton} ${activeTab === 1 ? styles.active : styles.ghost}`} onClick={() => setActiveTab(1)}>
            Serviços
          </button>
          <button className={`${styles.SelectTabButton} ${activeTab === 2 ? styles.active : styles.ghost}`} onClick={() => setActiveTab(2)}>
            Sistema
          </button>
          <button className={`${styles.SelectTabButton} ${activeTab === 3 ? styles.active : styles.ghost}`} onClick={() => setActiveTab(3)}>
            Pacientes
          </button>
        </div>

        {activeTab === 0 && <EditUserForm />}
        {activeTab === 1 && <EditUserData />}
        {activeTab === 2 && <AccessConfig />}
        {activeTab === 3 && <QueryList />}

        {/* end */}
        <Flex css={{ marginTop: 25, justifyContent: "flex-end" }}>
          <DialogClose asChild>
            <button className={styles.Button}>Salvar cadastro</button>
          </DialogClose>
        </Flex>
        <DialogClose asChild>
          <button className={styles.IconButton} aria-label="Close">
            <Cross2Icon />
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
