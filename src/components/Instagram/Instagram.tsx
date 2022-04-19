import React from 'react'
import styles from './instagram.module.scss'
import Carousel from 'react-multi-carousel';
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
      <div className={styles.insta} id="Instagram">
      <h1 className={styles.instagram}>Instagram</h1>
      <h3 className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    </h3>
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
      <div className={styles.btn}>  <span>Ver mais</span>  </div>
      </div>
    </>
  )
}
