import { Button } from "../Button";
import styles from "./styles.module.scss";

export function Banner() {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <div className={styles.left_content}>
          <h1>A terapia começa antes mesmo do terapeuta.</h1>
          <span>Quando a pessoa percebe que há algo que precisa ser mudado e busca auxílio para isso, já é parte do processo.</span>{" "}
          <Button classNameStyle={styles.button} title="Agende sua consulta" />
        </div>
      </div>

      <div className={styles.rigth}>
        <div className={styles.containerImg1}>
          <img src="/sectionOne/img1.png" alt="imagem 1" />
        </div>
        <div className={styles.containerImg2}>
          <img src="/sectionOne/img2.png" alt="imagem 1" />
        </div>
      </div>
    </section>
  );
}
