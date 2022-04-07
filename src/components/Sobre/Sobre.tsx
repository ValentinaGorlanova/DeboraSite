import React from 'react'
import styles from './sobre.module.scss'

export function Sobre() {
  return (
    <>

      <h1 className={styles.sobre} id="sobremim">Sobre mim</h1>
      <h3 className={styles.info}>
        Profissional graduada em Psicologia pela Universidade de Santo Amaro (UNISA) há mais de 15 anos, com carreira constituída nas áreas Organizacional e Clínica.<br/><br/>
        Paulista, mãe da Carol, da gata Chantilly e futura esposa do Gustavo.
        Apaixonada pela carreira que escolhi, acredito que todos estamos em constante evolução pessoal e que o melhor caminho para essa evolução é o autoconhecimento.
      </h3>
      <img src="/foto.png" alt="" className={styles.foto} />

    </>
  )
}

