import React from 'react'
import { Header } from '../Header/Header'
import styles from './inicio.module.scss'
export function Begin() {
  return (
    <>

      <Header />
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@500&family=Playfair+Display&family=Readex+Pro:wght@300;400&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500&family=Playfair+Display&family=Readex+Pro:wght@300;400&display=swap" rel="stylesheet" />      <div className={styles.inicial}>
        <div className={styles.left} >
          <h1 className={styles.text}>
            A terapia começa antes mesmo do terapeuta. <span>Quando a pessoa percebe que há algo que precisa ser mudado e busca auxílio para isso, já é parte do processo.</span>
          </h1>
          <button><a href="" ><p>Agende sua consulta</p></a> </button>
        </div>


        <div className={styles.img2}>
          <img src="/landing1.png" alt="" />
        </div>
        <div className={styles.img1}>
          <img src="/landing2.png" alt="" />
        </div>

      </div>
      <div className={styles.inicialtext}>
        <img src="/Banner.png" alt="" className={styles.banner} />
        <h1 className={styles.textBanner}>
          Principais queixas e seus sintomas
        </h1>
        <h5 className={styles.ansiedade}>
          Ansiedade
        </h5>
        <h6 className={styles.text_anxiety}>
          Quando em excesso pode apresentar sentimentos físicos e emocionais como: taquicardia, dificuldades respiratórias (falta de ar), boca seca, sudorese, náuseas ou vómitos, diarreia, dor de cabeça, roer as unhas, preocupação excessiva/obsessiva, pensamentos intrusivos negativos, vontade de chorar, preocupação excessiva com a opinião de terceiros.
        </h6>
        <h1 className={styles.depression}>
          Depressão
        </h1>
        <h4 className={styles.depressionText}>
          Os sentimentos abruptos de desamparo ou desesperança, baixo autoestima, perda de interesse pelas coisas, fadiga, irritabilidade, falta de concentração, maior foco no negativo do que no positivo (pessimismo generalizado), dificuldades com o sono e dificuldade no controle das emoções são os sinais mais comuns de depressão. Em casos graves, observa-se mutilações, autoagressões e tentativas de suicídio.
        </h4>
        <h3 className={styles.Luto}>
          Luto (Principalmente devido  a <br />COVID-19)
        </h3>
        <h4 className={styles.LutoText}>
          Alguns fatores podem influenciar a forma como cada pessoa irá vivenciar o seu luto, fatores que podem facilitar ou dificultar este processo, como a qualidade e o tipo de relação com o ente querido, a presença ou ausência de suporte social, as próprias características de personalidade do enlutado e, ainda, as circunstâncias que rodearam a perda, isto é, a forma como a morte ocorreu. O luto não elaborado (tratado) pode levar a depressão ou outros transtornos psicológicos.
        </h4>
        <h3 className={styles.abuso}>
          Abuso de Álcool e Drogas
        </h3>
        <h4 className={styles.abusoText}>
          Um dos sinais de perda do controle é o fato do consumo ou comportamento em questão ser excessivo ou durante mais tempo do que o desejado. Outro sinal importante de abuso é já existirem tentativas de paragem sem sucesso, perda de controle emocional, ausência em compromissos sociais/profissionais, irritabilidade ou agressividade.        </h4>
      </div>
      <img src="/im3.png" alt="" className={styles.leftImg} />
      <div className={styles.textLeft}>
        <h2 className={styles.final}>Quando e por que devo procurar um Psicólogo</h2>
        <img src="/head.svg" alt="" className={styles.head} />
        <p className={styles.paragraph1}> Se você sente as emoções com muita intensidade (raiva, ansiedade)</p>
        <img src="/head.svg" alt="" className={styles.head2} />
        <p className={styles.p2}> Se você passou por uma situação traumática (violência física, sexual e psicológica, acidente, doença, divórcio, luto)</p>
        <img src="/head.svg" alt="" className={styles.head3} />
        <p className={styles.p3}>
          Se você apresenta sintomas de doenças não diagnosticadas (alergias, enxaquecas, taquicardia, sudorese)
        </p>
        <img src="/head.svg" alt="" className={styles.head4} />
        <p className={styles.p4}>
          Se você precisa de válvulas de escape com frequência (medicações controladas, álcool/drogas, sexo, consumismo)
        </p>
        <img src="/head.svg" alt="" className={styles.head5} />
        <p className={styles.p5}>
          Se você tem uma ideia fixa ou uma vontade que não passa (uso indiscriminado de internet, lavar as mãos com frequência, desejo de vingança
        </p>
        <img src="/head.svg" alt="" className={styles.head6} />
        <p className={styles.p6}>
          Se você se sente constantemente desanimado ou sem energia, se as coisas que antes te interessavam perderam a graça.
        </p>
        <img src="/head.svg" alt="" className={styles.head7} />
        <p className={styles.p7}>
          Se você tem problemas nos seus relacionamentos pessoais, profissionais, sexuais (não consegue expor seus sentimentos, desconfiança, ciúme excessivo, isolamento
        </p>
      </div>
      <img src="/contagem.png" className={styles.contagem} /**src="/banner-foto.png"alt=""*/ />

    </>
  )
}

