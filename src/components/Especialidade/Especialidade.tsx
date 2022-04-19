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
                    <img src="/overlay.png" alt="" className={styles.content} />
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
                    <h3 className={styles.text}>
                        Abordagens utilizadas
                    </h3>

                    <h5 className={styles.text1}>
                        A Terapia Cognitivo Comportamental ou TCC é uma abordagem da psicoterapia baseada na combinação de conceitos do Behaviorismo radical com teorias cognitivas. A TCC entende a forma como o ser humano interpreta os acontecimentos como aquilo que nos afeta, e não os acontecimentos em si. <br /><br />
                        Essa abordagem é bastante específica, clara e direta. É utilizada para tratar diversos transtornos mentais de forma eficiente. Seu objetivo principal é identificar padrões de comportamento, pensamento, crenças e hábitos que estão na origem dos problemas,  indicando, a partir disso, técnicas para alterar essas percepções de forma positiva. A TCC se destina tanto ao tratamento dos diferentes transtornos psicológicos e emocionais como a depressão, ansiedade, transtornos psicossomáticos, transtornos alimentares, fobias, traumas, dependência química, além das questões que envolvem nossa vida como um todo.
                    </h5>

                    <img src="/img.png" alt="" className={styles.abordagemImg} />
                </div>
            </div>
        </>
    )

}

