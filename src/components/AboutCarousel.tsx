import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  {
    url: "/img/moto.jpeg",
    alt: "Electric scooter in urban environment"
  },
  {
    url: "/img/moto2.jpeg",
    alt: "Modern electric motorcycle"
  },
  {
    url: "/img/moto3.jpeg",
    alt: "Sleek electric bike design"
  },
  {
    url: "/img/moto4.jpeg",
    alt: "Electric vehicle charging"
  },
  {
    url: "/img/moto5.jpeg",
    alt: "Sleek electric bike design"
  },
  {
    url: "/img/moto.jpeg",
    alt: "Electric vehicle charging"
  }
];

export function AboutCarousel() {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="gallery-image"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="aspect-[16/9] relative">
            <img
              src={image.url}
              alt={image.alt}
              className="absolute inset-0 w-full h-full object-contain rounded-lg"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}