import { DialogTitle } from "@/components/Modals/ModalTemplate";
import { DropDown } from '@/components/Modals/ModalTemplate/DropdownElement/ModalDropDown'
import styles from '../../styles.module.scss'

export const contactWith = {
    id: "selecione",
    name: "Selecione",
    options: ["Telefone", "Whatsapp", "E-mail", "Outro"],
  }

export default function SendInvoice () {
    return(
        <>
        <DialogTitle>Enviar Nota Fiscal</DialogTitle>
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
        <div className={styles.TabsContainer}>
            <button className={`${styles.SelectTabButton} ${styles.active}`}>
            Modo de envio
            </button>
        </div>
        <h5 className={styles.h5}>Selecione para onde a nota fiscal será enviada</h5> 
            <div className={styles.flex_block}>
            <div className={styles.flex_item}>
                <DropDown label={false} select={contactWith} i={0} />
            </div>
            <div className={styles.flex_item}>
            <input 
                className={styles.Input} 
                type="text" id="other" 
                placeholder="Escreva aqui"
                />
            </div>
            </div>
        </>
    )
}