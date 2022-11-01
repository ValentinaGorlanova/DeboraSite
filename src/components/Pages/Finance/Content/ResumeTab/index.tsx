import { EditPaymentResume } from "@/components/Modals/EditPaymentResume";

import { FaEdit, FaPrint } from 'react-icons/fa'
import { TfiReload } from 'react-icons/tfi'

import styles from './styles.module.scss'

interface ResetTabProps {
    resetTab: () => void;
}


export default function ResumeTab  ({resetTab}: ResetTabProps )  {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.side_btns_container}>
                    <EditPaymentResume initialTab={0}>
                        <div>
                            <button className={styles.side_btn}>
                                <FaEdit size={"24px"} fill={'#273a51'}/>
                            </button>
                            <p>Editar</p>
                        </div>
                    </EditPaymentResume>
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
                <div className={styles.grid_block}>
                    <div className={styles.item}>
                        <h4>Nome completo</h4>
                        <p>Gabriela Silva</p>
                    </div>
                    <div className={styles.item}>
                        <h4>Identidade</h4>
                        <p>000 000 0</p>
                    </div>
                    <div className={styles.item}>
                        <h4>CPF</h4>
                        <p>000.000.000 - 00</p>
                    </div>
                    <div className={styles.item}>
                        <h4>Data de nascimento</h4>
                        <p>00/00/00</p>
                    </div>
                    <div className={styles.item}>
                        <h4>Nome do responsável</h4>
                        <p>Dábora Barros</p>
                    </div>
                    <div className={styles.item}>
                        <h4>Email</h4>
                        <p>nome-contato@email.com</p>
                    </div>
                    <div className={styles.item}>
                        <h4>Telefone</h4>
                        <p>+55  (11) 99999 999</p>
                    </div>
                    <div className={styles.item}>
                        <h4>Whatsapp</h4>
                        <p>+55  (11) 99999 999</p>
                    </div>
                    <div className={styles.item}>
                        <h4>Valor da consulta</h4>
                        <p>00,00</p>
                    </div>
                    <div className={styles.item}>
                        <h4>Desconto</h4>
                        <p>00,00</p>
                    </div>
                    <div className={styles.item}>
                        <h4>Convênio</h4>
                        <p>Nome do convênio</p>
                    </div>
                    <div className={styles.item}>
                        <h4>Endereço</h4>
                        <p>R. Aureliano Guimarães, 172/150 - Conjunto 819 - 8 andar - Vila Andradea - 00000-000<br/>
                        São Paulo - SP</p>
                    </div>
                </div>

                <button 
                className={styles.btn_orange}
                onClick={resetTab}
                >
                    Emitir Nota Fiscal
                </button>
            </div>
        </>
    )
}