import { SendInvoiceModal } from "@/components/Modals/SendInvoiceModal";
import { EmitInvoiceModal } from "@/components/Modals/EmitInvoiceModal";

import { FaPrint } from 'react-icons/fa'
import { TfiReload } from 'react-icons/tfi'
import styles from './styles.module.scss'

interface ResetTabProps {
    resetTab: () => void;
}


export default function InvoiceTab  ({resetTab}: ResetTabProps )  {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.side_btns_container}>
                        <div>
                        <button 
                        className={styles.btn_orange}
                        onClick={resetTab}
                        >
                            Voltar para o Resumo
                        </button>
                        </div>
                    <div>
                        <button className={styles.side_btn}>
                            <TfiReload size={"20px"} strokeWidth={1}  stroke={'#273a51'}/>
                        </button>
                        <p>Atualizar</p>
                    </div>
                    <div>
                        <button className={styles.side_btn}>
                            <FaPrint size={"20px"}  fill={'#273a51'}/>
                        </button>
                        <p>Imprimir</p>
                    </div>
                </div>
                <h5>Selecione o atendimento para emitir e enviar a nota fiscal</h5>
                <div className={styles.item}>
                    <h3>00/00/00</h3>
                    <div className={styles.flex_block}>
                        <div>
                            <p className={styles.status}><strong>Status:</strong> Pago</p>
                            <p>Atendimento: <span>Psicologia</span></p>
                            <p>Médico Responsável: <span>Débora Barros</span></p>
                            <p>CRP:<span>000000</span></p>
                            <p>Convênio: <span>Unimed</span></p>
                            </div>
                        <div>
                            <p className={styles.value}><strong>Valor:</strong> 00.00</p>
                            <p>Valor: <span>00,00</span></p>
                            <p>Desconto: <span>00,00</span></p>
                            <p>Tipo de pagamento: <span>Crédito</span></p>
                        </div>
                        <div>
                            <EmitInvoiceModal>
                                <button 
                                className={styles.btn_orange2}
                                >
                                    Emitir Nota Fiscal
                                </button>
                            </EmitInvoiceModal>
                            <SendInvoiceModal>
                                <button 
                                className={styles.btn_orange}
                                >
                                    Enviar Nota Fiscal
                                </button>
                            </SendInvoiceModal>
                        </div>

                    </div>
                </div>
                <div className={styles.item}>
                    <h3>00/00/00</h3>
                    <div className={styles.flex_block}>
                        <div>
                            <p className={styles.status}><strong>Status:</strong> Pago</p>
                            <p>Atendimento: <span>Psicologia</span></p>
                            <p>Médico Responsável: <span>Débora Barros</span></p>
                            <p>CRP:<span>000000</span></p>
                            <p>Convênio: <span>Unimed</span></p>
                            </div>
                        <div>
                            <p className={styles.value}><strong>Valor:</strong> 00.00</p>
                            <p>Valor: <span>00,00</span></p>
                            <p>Desconto: <span>00,00</span></p>
                            <p>Tipo de pagamento: <span>Crédito</span></p>
                        </div>
                        <div>
                            <EmitInvoiceModal>
                                <button 
                                className={styles.btn_orange2}
                                >
                                    Emitir Nota Fiscal
                                </button>
                            </EmitInvoiceModal>
                            <SendInvoiceModal>
                                <button 
                                className={styles.btn_orange}
                                >
                                    Enviar Nota Fiscal
                                </button>
                            </SendInvoiceModal>
                        </div>

                    </div>
                </div>
                <div className={styles.item}>
                    <h3>00/00/00</h3>
                    <div className={styles.flex_block}>
                        <div>
                            <p className={styles.status}><strong>Status:</strong> Pago</p>
                            <p>Atendimento: <span>Psicologia</span></p>
                            <p>Médico Responsável: <span>Débora Barros</span></p>
                            <p>CRP:<span>000000</span></p>
                            <p>Convênio: <span>Unimed</span></p>
                            </div>
                        <div>
                            <p className={styles.value}><strong>Valor:</strong> 00.00</p>
                            <p>Valor: <span>00,00</span></p>
                            <p>Desconto: <span>00,00</span></p>
                            <p>Tipo de pagamento: <span>Crédito</span></p>
                        </div>
                        <div>
                            <EmitInvoiceModal>
                                <button 
                                className={styles.btn_orange2}
                                >
                                    Emitir Nota Fiscal
                                </button>
                            </EmitInvoiceModal>
                            <SendInvoiceModal>
                                <button 
                                className={styles.btn_orange}
                                >
                                    Enviar Nota Fiscal
                                </button>
                            </SendInvoiceModal>
                        </div>

                    </div>
                </div>
            </div>
                        
                    
                    
        </>
    )
}