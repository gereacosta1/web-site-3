import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const workshopImages = [
  {
    url: "/img/moto4.jpeg",
    alt: "Modern electric motorcycle workshop"
  },
  {
    url: "/img/moto5.jpeg",
    alt: "Electric vehicle maintenance"
  },
  {
    url: "/img/scooter4.jpeg",
    alt: "Electric scooter assembly"
  },
  {
    url: "/img/scooter2.jpeg",
    alt: "Quality control process"
  },
  {
    url: "/img/moto.jpeg",
    alt: "Quality control process"
  },
  {
    url: "/img/scooter3.jpeg",
    alt: "Quality control process"
  }
];

export function ImageCarousel() {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1.5}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[EffectCoverflow, Autoplay, Navigation]}
      className="about-carousel"
    >
      {workshopImages.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}