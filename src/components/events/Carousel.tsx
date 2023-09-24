import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow, Pagination } from 'swiper/modules'

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
					slideShadows: true
				}}
				pagination={true}
				modules={[EffectCoverflow, Pagination]}
				className='mySwiper'
			>
				<SwiperSlide>
					<Image
						src={'/images/aprende_solidity.jpg'}
						alt='slide_image'
						width={100}
						height={80}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={'/images/speedrun1.jpg'}
						alt='slide_image'
						width={100}
						height={80}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={'/images/web3_aming.jpg'}
						alt='slide_image'
						width={100}
						height={80}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={'/images/speedrun2.jpg'}
						alt='slide_image'
						width={100}
						height={80}
					/>
				</SwiperSlide>
			</Swiper>
		</>
	)
}
