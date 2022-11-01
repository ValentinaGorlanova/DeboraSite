import { useState } from 'react';
import InputSearch from '@/components/Layout/components/InputSearch'
import { EditPaymentModal } from "@/components/Modals/EditPaymentModal";

import { FaUser } from "react-icons/fa";
import styles from './styles.module.scss'

interface ResetTabProps {
    resetTab: () => void;
}

export default function PaymentTab  ({resetTab}: ResetTabProps)  {

    const [term, setTerm] = useState('');

    const setValue = (str: string) => {
        setTerm(str)
    }

    return (
        <>
            <InputSearch class_name="jc_start" setValue={setValue} isEmpty={false}/>

            <div className={styles.pacientes}>
                <h5>Ultimos Atendimentos</h5>
                <div className={styles.flex_block}>
                    <EditPaymentModal initialTab={0} resetTab={resetTab}>
                        <button className={`${styles.flex_item}`}>
                            <div>
                                <FaUser />
                            </div>
                            <p>Nome Paciente</p>
                        </button>
                    </EditPaymentModal>
                    <EditPaymentModal initialTab={0} resetTab={resetTab}>
                        <button className={`${styles.flex_item}`}>
                            <div>
                                <FaUser />
                            </div>
                            <p>Nome Paciente</p>
                        </button>
                    </EditPaymentModal>
                    <EditPaymentModal initialTab={0} resetTab={resetTab}>
                        <button className={`${styles.flex_item}`}>
                            <div>
                                <FaUser />
                            </div>
                            <p>Nome Paciente</p>
                        </button>
                    </EditPaymentModal>
                    <EditPaymentModal initialTab={0} resetTab={resetTab}>
                        <button className={`${styles.flex_item}`}>
                            <div>
                                <FaUser />
                            </div>
                            <p>Nome Paciente</p>
                        </button>
                    </EditPaymentModal>
                    <EditPaymentModal initialTab={0} resetTab={resetTab}>
                        <button className={`${styles.flex_item}`}>
                            <div>
                                <FaUser />
                            </div>
                            <p>Nome Paciente</p>
                        </button>
                    </EditPaymentModal>
                    <EditPaymentModal initialTab={0} resetTab={resetTab}>
                        <button className={`${styles.flex_item}`}>
                            <div>
                                <FaUser />
                            </div>
                            <p>Nome Paciente</p>
                        </button>
                    </EditPaymentModal>
                </div>
            </div>
        </>
    )
}