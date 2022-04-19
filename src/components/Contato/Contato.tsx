import styles from './contato.module.scss'
import Link from 'next/link'

export function Contato() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@500&family=Playfair+Display&family=Readex+Pro:wght@300;400&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@500&family=Readex+Pro:wght@300;400&display=swap" rel="stylesheet" />
      <div className={styles.insta} id="contato">

        <h4 className={styles.title}>
          Contato
        </h4>
        <div className={styles.icon}>
          <img src="/insta.svg" alt="" />
          <img src="/wha.svg" alt="" className={styles.wha} />
          <img src="/mail.svg" alt="" className={styles.mail} />
          <img src="/endereço.svg" alt="" className={styles.address} />
        </div>
        <div className={styles.text}>
          <h5 className={styles.text1}>
            @debora_barrospsico
          </h5>
          <h5 className={styles.text2}>
            (11) 96039 - 0431
          </h5>
          <h5 className={styles.text3}>
            deborabarrospsi@outlook.com
          </h5>
          <h5 className={styles.text4}>
            R. Aureliano Guimarães, 172/150 - Conjunto 819 - 8 andar - Vila Andrade <br />
            São Paulo - SP
          </h5>
          <Link href="https://www.google.com.br/maps/place/R.+Aureliano+Guimar%C3%A3es,+172+-+Conjunto+819+-+8+andar+-+Vila+Andrade,+S%C3%A3o+Paulo+-+SP,+05727-160/@-23.6284227,-46.7397902,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce514e3b3b6a3b:0xb9d96f6892d2937c!8m2!3d-23.6284227!4d-46.7376015">
          <img src="/map.png" alt="" className={styles.map} />
          </Link>
        </div>
      </div>
    </>
  )
}

