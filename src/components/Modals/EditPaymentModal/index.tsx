/* eslint-disable react/prop-types */
import React, { ReactNode, useState } from "react";
import { styled } from "@stitches/react";
import { Cross2Icon } from "@radix-ui/react-icons";

import { Dialog, DialogTitle, DialogTrigger, DialogClose, DialogContent } from "../ModalTemplate";

import styles from "./styles.module.scss";
import EditUserPaymentForm from "./Components/EditUserPaymentForm";
import CreateBillingData from "./Components/EditBillingData";

const Flex = styled("div", { display: "flex" });

interface ModalDataProps {
  children: ReactNode;
  initialTab: number;
  resetTab: () => void;
}

export function EditPaymentModal({ children, initialTab, resetTab }: ModalDataProps ) {
  const [activeTab, setActiveTab] = useState(initialTab);
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Pagamento</DialogTitle>
        <div className={styles.TabsContainer}>
          <button className={`${styles.SelectTabButton} ${activeTab === 0 ? styles.active : styles.ghost}`} onClick={() => setActiveTab(0)}>
            Dados pessoais
          </button>
          <button className={`${styles.SelectTabButton} ${activeTab === 1 ? styles.active : styles.ghost}`} onClick={() => setActiveTab(1)}>
          Informações de cobrança
          </button>
        </div>

        {activeTab === 0 && <EditUserPaymentForm />}
        {activeTab === 1 && <CreateBillingData />}

        {/* end */}
        <Flex css={{ marginTop: 25, justifyContent: "center" }}>
          {activeTab === 0 ?          
            <button className={styles.Button}
            onClick={() => setActiveTab(1)}
            >Próximo</button>
          :
            <button className={styles.Button}
            onClick={resetTab}
            >
              Ir para resumo</button>
          }
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
