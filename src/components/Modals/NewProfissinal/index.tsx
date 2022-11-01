/* eslint-disable react/prop-types */
import React, { ReactNode, useState } from "react";
import { styled } from "@stitches/react";
import { Cross2Icon } from "@radix-ui/react-icons";

import { Dialog, DialogTitle, DialogTrigger, DialogClose, DialogContent } from "../ModalTemplate";

import styles from "./styles.module.scss";

import FormUser from "./Components/FormUser";
import DataUser from "./Components/DataUser";
import UserList from "./Components/UserList";
import AccessUser from "./Components/AccessUser";

// Your app...
const Flex = styled("div", { display: "flex" });

interface ModalDataProps {
  children: ReactNode;
}

export function NewProfissinal({ children }: ModalDataProps) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Cadastrar novo profissional</DialogTitle>
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

        {activeTab === 0 && <FormUser />}
        {activeTab === 1 && <DataUser />}
        {activeTab === 2 && <AccessUser />}
        {activeTab === 3 && <UserList />}

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
