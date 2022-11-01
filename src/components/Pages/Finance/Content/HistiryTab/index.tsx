import { FaPrint } from 'react-icons/fa'
import { TfiReload } from 'react-icons/tfi'

import styles from './styles.module.scss';


export default function HistoryTab()  {
    return (
        <>
            <div className={styles.container}>   
                <div className={styles.side_btns_container}>
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
            <div className={styles.item}>
                    <h3>00/00/00</h3>
                    <div className={styles.flex_block}>
                        <div>
                            <p className={styles.status}><strong>Status:</strong> Pago</p>
                            <p>Nome: <span>Gabriela Silva</span></p>
                            <p>CPF: <span>000 000 - 00</span></p>
                            <p>RG: <span>00000 00</span></p>
                            <p>Nome do responsável: <span>Gabriela Silva</span></p>
                            </div>
                        <div>
                            <p className={styles.status}><strong>Data da Consulta: </strong>00/00/00</p>
                            <p>Atendimento: <span>Psicologia</span></p>
                            <p>Médico Responsável: <span>Débora Barros</span></p>
                            <p>CRP:<span>000000</span></p>
                            <p>Convênio: <span>Unimed</span></p>
                        </div>
                        <div>
                        <p  className={styles.status}><strong>Valor:</strong> 00.00</p>
                            <p>Valor: <span>00,00</span></p>
                            <p>Desconto: <span>00,00</span></p>
                            <p>Tipo de pagamento: <span>Crédito</span></p>
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <h3>00/00/00</h3>
                    <div className={styles.flex_block}>
                        <div>
                            <p className={styles.status}><strong>Status:</strong> Pago</p>
                            <p>Nome: <span>Gabriela Silva</span></p>
                            <p>CPF: <span>000 000 - 00</span></p>
                            <p>RG: <span>00000 00</span></p>
                            <p>Nome do responsável: <span>Gabriela Silva</span></p>
                            </div>
                        <div>
                            <p className={styles.status}><strong>Data da Consulta: </strong>00/00/00</p>
                            <p>Atendimento: <span>Psicologia</span></p>
                            <p>Médico Responsável: <span>Débora Barros</span></p>
                            <p>CRP:<span>000000</span></p>
                            <p>Convênio: <span>Unimed</span></p>
                        </div>
                        <div>
                        <p  className={styles.status}><strong>Valor:</strong> 00.00</p>
                            <p>Valor: <span>00,00</span></p>
                            <p>Desconto: <span>00,00</span></p>
                            <p>Tipo de pagamento: <span>Crédito</span></p>
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <h3>00/00/00</h3>
                    <div className={styles.flex_block}>
                        <div>
                            <p className={styles.status}><strong>Status:</strong> Pago</p>
                            <p>Nome: <span>Gabriela Silva</span></p>
                            <p>CPF: <span>000 000 - 00</span></p>
                            <p>RG: <span>00000 00</span></p>
                            <p>Nome do responsável: <span>Gabriela Silva</span></p>
                            </div>
                        <div>
                            <p className={styles.status}><strong>Data da Consulta: </strong>00/00/00</p>
                            <p>Atendimento: <span>Psicologia</span></p>
                            <p>Médico Responsável: <span>Débora Barros</span></p>
                            <p>CRP:<span>000000</span></p>
                            <p>Convênio: <span>Unimed</span></p>
                        </div>
                        <div>
                        <p  className={styles.status}><strong>Valor:</strong> 00.00</p>
                            <p>Valor: <span>00,00</span></p>
                            <p>Desconto: <span>00,00</span></p>
                            <p>Tipo de pagamento: <span>Crédito</span></p>
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <h3>00/00/00</h3>
                    <div className={styles.flex_block}>
                        <div>
                            <p className={styles.status}><strong>Status:</strong> Pago</p>
                            <p>Nome: <span>Gabriela Silva</span></p>
                            <p>CPF: <span>000 000 - 00</span></p>
                            <p>RG: <span>00000 00</span></p>
                            <p>Nome do responsável: <span>Gabriela Silva</span></p>
                            </div>
                        <div>
                            <p className={styles.status}><strong>Data da Consulta: </strong>00/00/00</p>
                            <p>Atendimento: <span>Psicologia</span></p>
                            <p>Médico Responsável: <span>Débora Barros</span></p>
                            <p>CRP:<span>000000</span></p>
                            <p>Convênio: <span>Unimed</span></p>
                        </div>
                        <div>
                        <p  className={styles.status}><strong>Valor:</strong> 00.00</p>
                            <p>Valor: <span>00,00</span></p>
                            <p>Desconto: <span>00,00</span></p>
                            <p>Tipo de pagamento: <span>Crédito</span></p>
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <h3>00/00/00</h3>
                    <div className={styles.flex_block}>
                        <div>
                            <p className={styles.status}><strong>Status:</strong> Pago</p>
                            <p>Nome: <span>Gabriela Silva</span></p>
                            <p>CPF: <span>000 000 - 00</span></p>
                            <p>RG: <span>00000 00</span></p>
                            <p>Nome do responsável: <span>Gabriela Silva</span></p>
                            </div>
                        <div>
                            <p className={styles.status}><strong>Data da Consulta: </strong>00/00/00</p>
                            <p>Atendimento: <span>Psicologia</span></p>
                            <p>Médico Responsável: <span>Débora Barros</span></p>
                            <p>CRP:<span>000000</span></p>
                            <p>Convênio: <span>Unimed</span></p>
                        </div>
                        <div>
                        <p  className={styles.status}><strong>Valor:</strong> 00.00</p>
                            <p>Valor: <span>00,00</span></p>
                            <p>Desconto: <span>00,00</span></p>
                            <p>Tipo de pagamento: <span>Crédito</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}