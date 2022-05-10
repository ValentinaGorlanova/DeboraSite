import styles from "./styles.module.scss";

export function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h1>Sobre mim</h1>
          <div className={styles.description}>
            <p>
              Profissional graduada em Psicologia pela Universidade de Santo Amaro (UNISA) há mais de 15 anos, com carreira constituída nas áreas
              Organizacional e Clínica.
            </p>
            <p>Paulista, mãe da Carol, da gata Chantilly e futura esposa do Gustavo.</p>
            <p>
              Apaixonada pela carreira que escolhi, acredito que todos estamos em constante evolução pessoal e que o melhor caminho para essa evolução
              é o autoconhecimento.{" "}
            </p>
          </div>
        </div>
        <div className={styles.rigth}>
          <img src="/carousel1.png" alt="Foto Debora" />
        </div>
      </div>
    </div>
  );
}
