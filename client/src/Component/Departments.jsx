import React from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Slider from "react-slick";
import '../Style/Departments.css';
import departments from '../departments.json'

const Departments = () => {
    const ArrowLeft = (props) => (
        <button
        {...props}
        style={{display:props?.currentSlide === 0 ? "none" : "block"}}
        className="dPrev">
            <BiChevronLeft/>
        </button>
    );
    const ArrowRight = (props) => (
        <button
            {...props}
            style={{display:props?.currentSlide === 8 ? "none" : "block"}}
            className="dNext">
            <BiChevronRight/>
        </button>
    );

    const settings = {
        arrows: true,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 7,
        slidesToScroll: 2,
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />,
    }
  return (
    <div>
        <div className=''>
        <div className='relative'></div>
            <Slider {...settings}>
                
                {
                    departments.map((item)=>
                        <div className='department'>
                            <img src={item.img} alt="" />
                            <p className='text-[13px] text-center'>{item?.name}</p>
                        </div>
                    )
                }
                
                
                
                
            </Slider>
        </div>
    </div>
  )
}

export default Departments