import styles from "./consulta.module.scss"

export function Consulta() {
    return (
        <>
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500&family=Epilogue:ital,wght@0,300;0,500;0,600;0,700;1,400&family=Montserrat:wght@300;400;500&family=Mukta:wght@300;400;500&family=Playfair+Display:wght@400;500&family=Readex+Pro:wght@300;400&display=swap" rel="stylesheet"/>            <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@500&family=Readex+Pro:wght@300;400&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500&family=Epilogue:ital,wght@0,300;0,500;0,600;0,700;1,400&family=Mukta:wght@300;400;500&family=Playfair+Display&family=Readex+Pro:wght@300;400&display=swap" rel="stylesheet"></link>
            <div className={styles.consulta}>
                <h1 className={styles.text}>
                    Vamos agendar uma consulta?
                </h1>
                <form action="" method='post'>
                    <h3 className={styles.name}>Nome</h3>
                    <input type="text" className={styles.nome} />

                    <h3 className={styles.email}>E-mail</h3>
                    <input type="text" className={styles.mail} />
                    <h3 className={styles.date}>Date da consulta</h3>
                    <input type="date" className={styles.data} />
                    <h3 className={styles.lastname}>Sobrenome</h3>
                    <input type="text" className={styles.sobrenome} />
                    <h3 className={styles.tel}>Telefone para contato</h3>
                    <input type="telephone" className={styles.telefone} />
                    <h3 className={styles.horario}>Horario da consulta</h3>
                    <input type="text" className={styles.horario1} />
                    <h3 className={styles.messagem}>Messagem</h3>
                    <input type="text" className={styles.messagemBox} />
                    <h4 className={styles.type} >Sua consulta sera:</h4>
                    {/* the radio butto */}
                    <input type="radio" id="presencial" name="Check" value="presencial" className={styles.radio1} />
                    <label htmlFor="presencial"  className={styles.presencial}>presencial</label>
                    <input type="radio"  id="online" name="onlineCheck" value="online" className={styles.radio2} />
                    <label htmlFor="online"  className={styles.online}>Online</label>

                </form>
                <h3 className={styles.motivo}>
                    Qual o motivo do contato
                </h3>
                <div className={styles.sintomas}>
                    <input type="checkbox" className={styles.sinto1Box} />
                    <h3 className={styles.sinto1}>
                        Ansiedade
                    </h3>
                    <input type="checkbox" className={styles.sinto2Box} />
                    <h3 className={styles.sinto2}>
                        Depressão
                    </h3>
                    <input type="checkbox" className={styles.sinto3Box} />
                    <h3 className={styles.sinto3}>
                        Sindrome do Pânico
                    </h3>
                    <input type="checkbox" className={styles.sinto4Box} />
                    <h3 className={styles.sinto4}>
                        Alcoolismo
                    </h3>
                    <input type="checkbox" className={styles.sinto5Box} />
                    <h3 className={styles.sinto5}>
                        Dependência Química
                    </h3>
                    <input type="checkbox" className={styles.sinto6Box} />
                    <h3 className={styles.sinto6}>
                        Fobia Social
                    </h3>
                    <input type="checkbox" className={styles.sinto7Box} />
                    <h3 className={styles.sinto7}>
                    Autoconhecimento
                    </h3>
                    <input type="checkbox" className={styles.sinto8Box} />
                    <h3 className={styles.sinto8}>
                    TDAH e Transtornos de Aprendizagem
                    </h3> <input type="checkbox" className={styles.sinto9Box} />
                    <h3 className={styles.sinto9}>
                    Outros:
                    </h3> 
                    
                </div>
                <div className={styles.traco}>  </div>

            </div>
            <div className={styles.btn}>  <span>Enviar Solicitação</span>  </div>
            <h3 className={styles.title}>Depoimentos</h3>
            <h3 className={styles.titleText}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</h3>
            <h3 className={styles.lorem}>lorem ipsum</h3>

        </>
    )
}

