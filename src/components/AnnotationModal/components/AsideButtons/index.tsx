import styles from "./styles.module.scss";

interface AsideButtonsProp {
  step: number;
  textButtons: Array<string>;

  setStep: (index: number) => void;
}

export default function AsideButtons({ step, setStep, textButtons }: AsideButtonsProp) {
  return (
    <div className={styles.AsideButtons}>
      {textButtons.map((text, i) => (
        <div key={text}>
          <button className={`${styles.ButtonsModal} ${step === i + 1 ? styles.asideActive : styles.aside}`} onClick={() => setStep(i + 1)}>
            {text}
          </button>
        </div>
      ))}
    </div>
  );
}
