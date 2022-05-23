import styles from "./Card.module.scss";

interface CardProps {
  testimonial: string;
  name: string;
}

export function Card({ testimonial, name }: CardProps) {
  return (
    <div className={styles.container}>
      <p className={styles.testimonial}>{testimonial}</p>
      <p className={styles.name}>{name}</p>
    </div>
  );
}
