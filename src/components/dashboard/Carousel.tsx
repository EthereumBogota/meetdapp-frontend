import React from 'react'
import Image from 'next/image'; 

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import './stylesPrevEvents.css'
import { EffectCoverflow, Pagination,} from 'swiper/modules'

import slide_image_1 from "public/img/AprendeSolidity.jpg"
import slide_image_2 from "public/img/SRE2.jpg"
import slide_image_3 from "public/img/Web3Gaming.jpg"
import slide_image_4 from "public/img/SRE5.jpg"

export default function Carousel() {
	return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
      </Swiper>
    </>
	)
}


