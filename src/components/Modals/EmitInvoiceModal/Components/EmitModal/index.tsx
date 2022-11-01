import React from "react";
import { styled } from "@stitches/react";

import { DialogTitle } from "@/components/Modals/ModalTemplate";

import styles from "../../styles.module.scss";


export function EmitInvoice() {
 
  return (
    <>
        <DialogTitle>Emitir Nota Fiscal</DialogTitle>
        <div className={styles.TabsContainer}>
          <button className={`${styles.SelectTabButton} ${styles.active}`}>
            Dados pessoais
          </button>
        </div>
        <h5 className={styles.h5}>Confira os dados do paciente</h5> 
        <div className={styles.flex_block}>
          <div className={styles.flex_item}>
            <h4>Nome completo</h4>
            <p>Gabriela Silva</p>
          </div>
          <div className={styles.flex_item}>
            <h4>Valor Pago</h4>
            <p>00,00</p>
          </div>
          <div className={styles.flex_item}>
            <h4>CPF</h4>
            <p>000.000.000-00</p>
          </div>
          <div className={styles.flex_item}>
            <h4>Atendimento</h4>
            <p>0000000</p>
          </div>
        </div>
      </>
  );
}


