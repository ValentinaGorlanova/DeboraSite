import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

export function AboutMe() {
  const [imagesIndex, setImagesIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const DataImages = ["/carousel1.png", "/carousel2.png", "/carousel3.png", "/carousel4.png"];
  const [fadeProp, setFadeProp] = useState({
    fade: `${styles.fadeIn}`,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      if (fadeProp.fade === `${styles.fadeIn}`) {
        setFadeProp({
          fade: `${styles.fadeOut}`,
        });
      } else {
        setImagesIndex(imagesIndex + 1);
        setFadeProp({
          fade: `${styles.fadeIn}`,
        });
      }
    }, 1500);

    if (imagesIndex === DataImages.length) {
      setImagesIndex(0);
    }
    return () => clearInterval(timer);
  }, [imagesIndex, DataImages.length, fadeProp]);

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

        <div className={`${styles.rigth} ${fadeProp.fade} `} ref={ref}>
          <img src={DataImages[imagesIndex]} alt="Foto Debora" />
        </div>
      </div>
    </div>
  );
}
