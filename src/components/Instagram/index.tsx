import Link from "next/link";
import styles from "./styles.module.scss";

export function Instagram() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Instagram</h1>
        <p>Aqui você pode saber um pouco mais sobre mim.</p>
        <div className={styles.carousel}>
          <div>
            <img src="/insta1.png" alt="" />
            <img src="/insta1.png" alt="" />
            <img src="/insta1.png" alt="" />
            <img src="/insta1.png" alt="" />
          </div>
        </div>
        <Link href="#">
          <a className={styles.button}> Ir para Instagram</a>
        </Link>
      </div>
    </div>
  );
}
