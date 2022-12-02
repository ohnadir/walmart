import React from 'react'
import { BiChevronLeft, BiChevronRight, BiPlus } from 'react-icons/bi';
import { CiHeart } from 'react-icons/ci'
import Slider from 'react-slick'
import '../Style/BuildCard.css'
import departments from '../departments.json'

const BuildYourCard = () => {
    const ArrowLeft = (props) => (
        <button
            {...props}
            style={{visibility:props?.currentSlide === 0 ? "hidden" : "visible"}}
            className="prev">
            <BiChevronLeft/>
        </button>
    );
    const ArrowRight = (props) => (
        <button
            {...props}
            style={{visibility:props?.currentSlide === 8 ? "hidden" : "visible"}}
            className="next">
            <BiChevronRight/>
        </button>
    );
    const setting = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />
    };
    return (
        <div className='overflow-hidden buildCard'>
            <h1 className='my-7'>Build your card</h1>
            <Slider {...setting}>
                {
                    departments.map((item)=>
                        <div className='department border relative'>
                            <img src={item.img} alt="" />
                            <CiHeart className='heart' />
                            <button className='addBtn'><BiPlus className='icon' /> Add</button>
                        </div>
                    )
                }
            </Slider>
        </div>
  )
}

export default BuildYourCard