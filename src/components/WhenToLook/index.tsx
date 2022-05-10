import styles from "./styles.module.scss";

export function WhenToLook() {
  return (
    <div className={styles.container}>
      <div className={styles.left}></div>
      <div className={styles.rigth}>
        <h1>Quando e por que devo procurar um Psicólogo</h1>
        <ul>
          <li>
            <img src="/iconHead.png" alt="icone cérebro" /> Se você sente as emoções com muita intensidade (raiva, ansiedade)
          </li>
          <li>
            <img src="/iconHead.png" alt="icone cérebro" /> Se você passou por uma situação traumática (violência física, sexual e psicológica,
            acidente, doença, divórcio, luto)
          </li>
          <li>
            <img src="/iconHead.png" alt="icone cérebro" /> Se você apresenta sintomas de doenças não diagnosticadas (alergias, enxaquecas,
            taquicardia, sudorese)
          </li>
          <li>
            <img src="/iconHead.png" alt="icone cérebro" /> Se você precisa de válvulas de escape com frequência (medicações controladas,
            álcool/drogas, sexo, consumismo)
          </li>
          <li>
            <img src="/iconHead.png" alt="icone cérebro" /> Se você tem uma ideia fixa ou uma vontade que não passa (uso indiscriminado de internet,
            lavar as mãos com frequência, desejo de vingança
          </li>
          <li>
            <img src="/iconHead.png" alt="icone cérebro" /> Se você se sente constantemente desanimado ou sem energia, se as coisas que antes te
            interessavam perderam a graça.
          </li>
          <li>
            <img src="/iconHead.png" alt="icone cérebro" /> Se você tem problemas nos seus relacionamentos pessoais, profissionais, sexuais (não
            consegue expor seus sentimentos, desconfiança, ciúme excessivo, isolamento
          </li>
        </ul>
      </div>
    </div>
  );
}
