import React, { ReactNode, useState } from "react";
import { styled } from "@stitches/react";

import { Cross2Icon } from "@radix-ui/react-icons";

import { Dialog, DialogTrigger, DialogClose, DialogContent } from "@/components/Modals/ModalTemplate";

import styles from "./style.module.scss";

interface ModalDataProps {
  children: ReactNode;
}

const Flex = styled("div", { 
    display: "flex" ,
    maxWidth: "370px",
    margin: "32px auto 0"
  });

export function AddPatientModal({ children }: ModalDataProps) {

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
            <div className={styles.container}>
                <h3>
                Informaçõe salvas com sucesso!
                </h3>
            </div>

            <Flex css={{ justifyContent: "center" }}>         
                <DialogClose asChild>
                    <button className={styles.Button}>Ok
                    </button>
                </DialogClose>
            </Flex>
        </DialogContent>

      <DialogClose asChild>
          <button className={styles.IconButton} aria-label="Close">
            <Cross2Icon />
          </button>
        </DialogClose>

    </Dialog>
  );
}