import React from 'react'
import styles from './especialidade.module.scss'

export function Especialidade() {
    return (
        <>
            <div className={styles.especialidade} id="especialidade">
                <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@500&family=Playfair+Display&family=Readex+Pro:wght@300;400&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@500&family=Readex+Pro:wght@300;400&display=swap" rel="stylesheet" />
                <div className={styles.left}>
                    <img src="/Banner1.png" alt="" />
                    <img src="/especialidade.png" alt="" className={styles.content} />
                    <div className={styles.title}>
                        Especialidades atendidas
                    </div>
                    <div className={styles.des}>
                        Psicoterapia Individual Adolescentes <br />Psicoterapia Individual Adultos
                        <br />Psicoterapia de Casal <br /> Avaliação Psicológica para Cirurgias <br />
                        Atendimento a funcionários de empresas <span> privadas on site</span> <br />

                    </div>
                    <div className={styles.des1}>
                        Atendimento Presencial <br />Atendimento Online
                    </div>
                    <div className={styles.vector}>
                        <img src="/vector1.svg" alt="" />
                        <img src="/vector1.svg" alt="" />
                        <img src="/vector1.svg" alt="" />
                        <img src="/vector1.svg" alt="" />
                        <img src="/vector1.svg" alt="" />
                    </div>
                    <div className={styles.vector2}>
                        <img src="/vector1.svg" alt="" />
                        <img src="/vector1.svg" alt="" />

                    </div>
                </div>
            </div>
        </>
    )

}

