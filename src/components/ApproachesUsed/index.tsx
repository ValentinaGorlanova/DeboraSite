import styles from "./styles.module.scss";

export function ApproachesUsed() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.containerImages}>
            <div className={styles.img}>
              <img src="/imgBook2.png" alt="Imagem Livro" />
            </div>
          </div>
          <h1>Abordagens utilizadas</h1>
          <p>
            A Terapia Cognitivo Comportamental ou TCC é uma abordagem da psicoterapia baseada na combinação de conceitos do Behaviorismo radical com
            teorias cognitivas. A TCC entende a forma como o ser humano interpreta os acontecimentos como aquilo que nos afeta, e não os
            acontecimentos em si.{" "}
          </p>
        </div>
        <p>
          Essa abordagem é bastante específica, clara e direta. É utilizada para tratar diversos transtornos mentais de forma eficiente. Seu objetivo
          principal é identificar padrões de comportamento, pensamento, crenças e hábitos que estão na origem dos problemas, indicando, a partir
          disso, técnicas para alterar essas percepções de forma positiva. A TCC se destina tanto ao tratamento dos diferentes transtornos
          psicológicos e emocionais como a depressão, ansiedade, transtornos psicossomáticos, transtornos alimentares, fobias, traumas, dependência
          química, além das questões que envolvem nossa vida como um todo.
        </p>
      </div>
    </div>
  );
}
