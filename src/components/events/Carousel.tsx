import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Navigation, Pagination, A11y } from 'swiper/modules'

export default function Carousel() {
	return (
		<>
			<Swiper
				// install Swiper modules
				modules={[Navigation, Pagination, A11y]}
				spaceBetween={50}
				slidesPerView={'auto'}
				navigation
				pagination={{ clickable: true }}
				onSwiper={swiper => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
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
