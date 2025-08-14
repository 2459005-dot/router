import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './HomeHero.css'
import { homeSlide } from '../../data/homeSlide'

const HomeHero = () => {
    return (
        <div className="homeHero">
            <Swiper
                navigation={true}
                modules={[Navigation, Pagination, Autoplay, A11y]}
                pagination={{ clickable: true }}
                loop
                a11y={{ enabled: true }}
                slidesPerView={1}
            >
                {homeSlide.map(({ id, img, title, subtitle, href }) => {
                    const card = (
                        <figure
                            className='slide-card'
                            aria-label={title}
                            style={{ backgroundImage: `url(${img})` }}
                        >
                            <div className="t-wrap">
                                <h2>{title}</h2>
                                <p>{subtitle}</p>
                            </div>
                        </figure>
                    )
                    return (
                        <SwiperSlide key={id}>
                            <a href={href} className='slide-link'>
                                {card}
                            </a>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default HomeHero