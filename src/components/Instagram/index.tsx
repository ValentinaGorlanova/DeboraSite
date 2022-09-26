import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import styles from "./styles.module.scss";
import { api } from "@/services";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface PostProps {
  id: string;
  media_url: string;
}

interface RequestResponseData {
  paging: string;
  data: Array<PostProps>;
}

export function Instagram() {
  const [post, setPost] = useState<PostProps[]>();

  const getPosts = async () => {
    const response = await api.get<RequestResponseData>(
      `/media?access_token=${process.env.ACCESS_TOKEN}&fields=media_url,media_type,caption,permalink`
    );

    const data = response.data.data.filter((postResponse) => !postResponse.media_url.includes(".mp4"));
    setPost(data);
  };

  // Time token expires and refresh
  const getTokenInfo = async () => {
    const response = await axios.get(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&&access_token=${process.env.ACCESS_TOKEN}`
    );
    const tokenExpiresIn = Math.floor(response.data.expires_in / 86400);
    // console.log("Token expira em: ", tokenExpiresIn, " dias.");

    if (tokenExpiresIn <= 30) {
      window.open(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&&access_token=${process.env.ACCESS_TOKEN}`)?.close();
    }
  };

  useEffect(() => {
    getPosts();
    getTokenInfo();
  }, []);

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
              slidesPerView: "auto",
              spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: "auto",
              spaceBetween: 20,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: "auto",
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: "auto",
              spaceBetween: 40,
            },
          }}
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, FreeMode]}
          // spaceBetween={30}
          // slidesPerView={3}
          // navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          autoplay
          centeredSlidesBounds
          loopFillGroupWithBlank={false}
          freeMode
          className={styles.carousel}
        >
          {post &&
            post.map((item) => (
              <SwiperSlide className={styles.card} key={item.id}>
                <img src={item.media_url} alt="" />
              </SwiperSlide>
            ))}
        </Swiper>
        <a href="https://www.instagram.com/debora_barrospsico/" target="_blank" rel="noreferrer" className={styles.button}>
          Ir para Instagram
        </a>
      </div>
    </div>
  );
}
