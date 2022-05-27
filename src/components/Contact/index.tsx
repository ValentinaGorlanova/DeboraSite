import styles from "./styles.module.scss";

export function Contact() {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.content}>
        <h1>Contato</h1>
        <ul>
          <li>
            <a href="https://www.instagram.com/debora_barrospsico/" target="_blank" rel="noreferrer">
              <img src="/insta.svg" alt="ícone instagram" /> <span>@debora_barrospsico</span>
            </a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send/?phone=5511960390431" target="_blank" rel="noreferrer">
              <img src="/wha.svg" alt="ícone whatsapp" /> <span>(11) 96039 - 0431</span>
            </a>
          </li>
          <li>
            <a href="##">
              <img src="/mail.svg" alt="ícone e-mail" /> <span>contato@deborabarrospsicologa.com.br</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/local.svg" alt="ícone endereço" />{" "}
              <span className={styles.spanLocal}>
                R. Aureliano Guimarães, 172/150 - Conjunto 819 - 8 andar - Vila Andrade <br />
                São Paulo - SP
              </span>
            </a>
          </li>
        </ul>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.3279746594876!2d-46.737601500000004!3d-23.628422699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce514e3b3b6a3b%3A0xb9d96f6892d2937c!2sR.%20Aureliano%20Guimar%C3%A3es%2C%20172%20-%20Conjunto%20819%20-%208%20andar%20-%20Vila%20Andrade%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005727-160!5e0!3m2!1spt-BR!2sbr!4v1652719947793!5m2!1spt-BR!2sbr"
          className={styles.map}
          title="local"
          width="100%"
          height="537"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      ;
    </div>
  );
}
