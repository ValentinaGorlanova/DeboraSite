import { Card } from "./Card";
import { DataTestimonials } from "./DataTestimonials";
import styles from "./styles.module.scss";

export function Testimonials() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Depoimentos</h1>
        <div className={styles.cards}>
          {DataTestimonials && DataTestimonials.map((item) => <Card key={item.id} testimonial={item.testimonial} name={item.name} />)}
        </div>
        <button type="button" className={styles.button}>
          Deixe seu depoimento
        </button>
      </div>
    </div>
  );
}
