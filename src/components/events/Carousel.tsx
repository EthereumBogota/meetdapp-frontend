import { A11y, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function Carousel() {
	return (
		<>
			<Swiper
				modules={[Navigation, Pagination, A11y]}
				spaceBetween={50}
				slidesPerView={'auto'}
				navigation
				pagination={{ clickable: true }}
			>
				<SwiperSlide>
					<img src='/images/aprende_solidity.jpg' alt='Image 1' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/images/speedrun1.jpg' alt='Image 2' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/images/web3_gaming.jpg' alt='Image 3' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/images/speedrun2.jpg' alt='Image 4' />
				</SwiperSlide>
			</Swiper>

			<style jsx>{`
				img {
					margin: 2em auto;
					width: 350px;
					height: 350px;
					border-radius: 10px;
					object-fit: cover;
				}
			`}</style>
		</>
	)
}
