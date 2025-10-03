import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { type BannerDataTypes, DataBannerProps } from '../types';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Banner({ data }: DataBannerProps) {

  return (
    <div className="banner">
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        pagination={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        speed={900}
      >
        {data && data.map((item: BannerDataTypes) => (
          <SwiperSlide key={item.id}>
            <img src={item.link} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}