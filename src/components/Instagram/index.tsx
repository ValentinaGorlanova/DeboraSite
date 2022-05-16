import Link from "next/link";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Data = [
  {
    id: 1,
    src: "/carousel1.png",
  },
  {
    id: 2,
    src: "/carousel2.png",
  },
  {
    id: 3,
    src: "/carousel3.png",
  },
  {
    id: 4,
    src: "/carousel4.png",
  },
  {
    id: 5,
    src: "/landing2.png",
  },
];

export function Instagram() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Instagram</h1>
        <p>Aqui você pode saber um pouco mais sobre mim.</p>
        <Swiper
          // Responsive breakpoints
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, FreeMode]}
          spaceBetween={30}
          // slidesPerView={3}
          // navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          autoplay
          freeMode
          className={styles.carousel}
        >
          {Data &&
            Data.map((item) => (
              <SwiperSlide className={styles.card} key={item.id}>
                <img src={item.src} alt="" />
              </SwiperSlide>
            ))}
        </Swiper>
        <Link href="#">
          <a className={styles.button}> Ir para Instagram</a>
        </Link>
      </div>
    </div>
  );
}
