import styles from "./Card.module.scss";

interface CardProps {
  key: number;
  testimonial: string;
  name: string;
}

export function Card({ testimonial, name, key }: CardProps) {
  return (
    <div className={styles.container} key={key}>
      <p className={styles.testimonial}>{testimonial}</p>
      <p className={styles.name}>{name}</p>
    </div>
  );
}
