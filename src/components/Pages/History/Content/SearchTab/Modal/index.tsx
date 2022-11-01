import React, { ReactNode, useState } from "react";

import { Cross2Icon } from "@radix-ui/react-icons";

import { Dialog, DialogTrigger, DialogClose, } from "@/components/Modals/ModalTemplate";
import PacienteData from "./Components/PasienteData"
import CancelModal from "./Components/CancelModal";

import styles from "./style.module.scss";

interface ModalDataProps {
  children: ReactNode;
  initialTab: number;
}

export function AddPatientModal({ children, initialTab }: ModalDataProps) {

  const [activeTab, setActiveTab] = useState(initialTab);

  const handleClick = () => {
    activeTab === 0 ? setActiveTab(1) : setActiveTab(0)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      {activeTab === 0 && <PacienteData handleClick={handleClick}/>}
      {activeTab === 1 && <CancelModal handleClick={handleClick}/>}

      <DialogClose asChild>
          <button className={styles.IconButton} aria-label="Close">
            <Cross2Icon />
          </button>
        </DialogClose>

    </Dialog>
  );
}
