import React from 'react'
import styles from './instagram.module.scss'
import Carousel from 'react-multi-carousel';
import Link from 'next/link';
import 'react-multi-carousel/lib/styles.css';

export function Instagram() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }

  };
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@500&family=Playfair+Display&family=Readex+Pro:wght@300;400&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@500&family=Readex+Pro:wght@300;400&display=swap" rel="stylesheet" />
      <div className={styles.insta} id="instagram">
        <h1 className={styles.instagram}>Instagram</h1>
        <h3 className={styles.text}>
        Aqui você pode saber um pouco mais sobre mim.
        </h3>
        {/* this carousel does not have the arrows to move around instead the use uses his moves to move the carousel */}
        <Carousel responsive={responsive} infinite={true} className={styles.carousel} autoPlaySpeed={5000}>
          <div >
            <img src="/insta1.png" alt="" />
          </div>
          <div>
            <img src="/insta1.png" alt="" />

          </div>
          <div>
            <img src="/insta1.png" alt="" />

          </div>
          <div>
            <img src="/insta1.png" alt="" />
          </div>
        </Carousel>
        {/* add the link to her instagram */}
        <div className={styles.btn}>  <span>Ir para Instagram</span>  </div>
      </div>
    </>
  )
}
