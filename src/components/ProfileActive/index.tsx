/* eslint-disable react/prop-types */
import React, { ReactNode } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";

import { Dialog, DialogTitle, DialogTrigger, DialogClose, DialogContent } from "../Modals/ModalTemplate";
import styles from "./styles.module.scss";

interface ModalDataProps {
  children: ReactNode;
}

export function ProfileActive({ children }: ModalDataProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Dasativar perfil</DialogTitle>

        <p className={styles.Message}>Essa função vai desativar esse perfil e ele não ficara mais visível no sistema principal</p>

        <div className={styles.ButtonsContainer}>
          <button className={styles.Button}>Cancelar ação</button>
          <button className={`${styles.Button} ${styles.fill}`}>Desativar perfil</button>
        </div>

        {/* end */}
        <DialogClose asChild></DialogClose>
        <DialogClose asChild>
          <button className={styles.IconButton} aria-label="Close">
            <Cross2Icon />
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
