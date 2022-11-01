import InputSearch from '@/components/Layout/components/InputSearch'
import { useState } from 'react';

import RenderPaciente from './Paciente';
import { AddPatientModal } from './Modal';
import { FaUser } from "react-icons/fa";
import styles from './styles.module.scss';

import { pacienteExample } from '../../Content';

interface HandleClickProps{
    handleClick : () => void; 
    disabledTab?: boolean
}

export default function SearchTab({handleClick, disabledTab }: HandleClickProps) {

    const [term, setTerm] = useState('0');

    const setValue = (str: string) => {
        setTerm(str)
    }

    return (
        <>
        <div className={styles.pacientes}>
            <h5>Selecione um paciente para abrir o histórico clínico e atendimentos</h5>
            <InputSearch class_name="jc_start" setValue={setValue} isEmpty={ !disabledTab ? false : true}/>
            <div className={styles.flex_block}>
            {term ? pacienteExample.map((item, i) => {
                if (item.name.indexOf(term) > -1) {
                    return <RenderPaciente item={item} i={i} str={term} handleClick={handleClick}/>
                }
            })
            : null}
            </div>
        </div>
        
        
        <div className={styles.pacientes}>
            <h5>Ultimos Atendimentos</h5>
            <div className={styles.flex_block}>
           
                    <button className={`${styles.flex_item}`}>
                        <div>
                            <FaUser />
                        </div>
                        <p>Nome Paciente</p>
                    </button>

                    <button className={`${styles.flex_item}`}>
                        <div>
                            <FaUser />
                        </div>
                        <p>Nome Paciente</p>
                    </button>
   
                    <button className={`${styles.flex_item}`}>
                        <div>
                            <FaUser />
                        </div>
                        <p>Nome Paciente</p>
                    </button>

                    <button className={`${styles.flex_item}`}>
                        <div>
                            <FaUser />
                        </div>
                        <p>Nome Paciente</p>
                    </button>

                    <button className={`${styles.flex_item}`}>
                        <div>
                            <FaUser />
                        </div>
                        <p>Nome Paciente</p>
                    </button>

                    <button className={`${styles.flex_item}`}>
                        <div>
                            <FaUser />
                        </div>
                        <p>Nome Paciente</p>
                    </button>

            </div>
            <AddPatientModal initialTab={0}>
                <button className={styles.btn_orange}>
                Adicionar Paciente
                </button>
            </AddPatientModal>
        </div>
    </>
    )
}