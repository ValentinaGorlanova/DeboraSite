import styles from "./styles.module.scss";

export function Symptoms() {
  return (
    <div className={styles.container}>
      <h1>Principais queixas e seus sintomas</h1>

      <ul>
        <li>
          <h2>Ansiedade</h2>
          <p>
            Quando em excesso pode apresentar sentimentos físicos e emocionais como: taquicardia, dificuldades respiratórias (falta de ar), boca seca,
            sudorese, náuseas ou vómitos, diarreia, dor de cabeça, roer as unhas, preocupação excessiva/obsessiva, pensamentos intrusivos negativos,
            vontade de chorar, preocupação excessiva com a opinião de terceiros.
          </p>
        </li>
        <li>
          <h2>Depressão</h2>
          <p>
            Os sentimentos abruptos de desamparo ou desesperança, baixo autoestima, perda de interesse pelas coisas, fadiga, irritabilidade, falta de
            concentração, maior foco no negativo do que no positivo (pessimismo generalizado), dificuldades com o sono e dificuldade no controle das
            emoções são os sinais mais comuns de depressão. Em casos graves, observa-se mutilações, autoagressões e tentativas de suicídio.
          </p>
        </li>
        <li>
          <h2>
            Luto <span> (Principalmente devido a COVID-19) </span>
          </h2>
          <p>
            Alguns fatores podem influenciar a forma como cada pessoa irá vivenciar o seu luto, fatores que podem facilitar ou dificultar este
            processo, como a qualidade e o tipo de relação com o ente querido, a presença ou ausência de suporte social, as próprias características
            de personalidade do enlutado e, ainda, as circunstâncias que rodearam a perda, isto é, a forma como a morte ocorreu. O luto não elaborado
            (tratado) pode levar a depressão ou outros transtornos psicológicos.
          </p>
        </li>
        <li>
          <h2>Abuso de Álcool e Drogas</h2>
          <p>
            Um dos sinais de perda do controle é o fato do consumo ou comportamento em questão ser excessivo ou durante mais tempo do que o desejado.
            Outro sinal importante de abuso é já existirem tentativas de paragem sem sucesso, perda de controle emocional, ausência em compromissos
            sociais/profissionais, irritabilidade ou agressividade.
          </p>
        </li>
      </ul>
    </div>
  );
}
