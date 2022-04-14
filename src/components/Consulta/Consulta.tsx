import React from 'react'
import styles from "./consulta.module.scss"

export function Consulta() {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@500&family=Playfair+Display&family=Readex+Pro:wght@300;400&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@500&family=Readex+Pro:wght@300;400&display=swap" rel="stylesheet" />
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
                </div>
            </div>
        </>
    )
}

