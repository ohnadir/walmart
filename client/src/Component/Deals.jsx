import React from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { CiHeart } from 'react-icons/ci';
import Slider from 'react-slick';
import '../Style/Deals.css'

const Deals = () => {
    const ArrowLeft = (props) => (
        <button
            {...props}
            style={{visibility:props?.currentSlide === 0 ? "hidden" : "visible"}}
            className="dealPrev">
            <BiChevronLeft/>
        </button>
    );
    const ArrowRight = (props) => (
        <button
            {...props}
            style={{visibility:props?.currentSlide === 4 ? "hidden" : "visible"}}
            className="dealNext">
            <BiChevronRight/>
        </button>
    );
    const setting = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />
    };
  return (
    <div className='dealsForDay '>
        <h1 className='my-10 font-semibold text-lg'>Black Friday</h1>
                <div className=''>
                    <Slider {...setting}>
                        <div className=' '>
                            <button className='fridayBtn'>Black Friday Deal</button>
                            <div className='relative w-[160px]'>
                                <img src="https://i5.walmartimages.com/asr/294e9f0f-e9f6-48fd-a6e8-279af7bc89c0.01014e1068e8953a5dfe81bd9c77d639.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF" alt="" />
                                <CiHeart className='absolute top-3 right-2 text-2xl' />
                                <button className='optionBtn'>Options</button>
                            </div>
                            <div className='flex justify-between my-2'>
                                <div className='optionContainer'>
                                    <div className='optionPlate option1'></div>
                                </div>
                                <div className='optionContainer'>
                                    <div className='optionPlate option2'></div>
                                </div>
                                <div className='optionContainer'>
                                    <div className='optionPlate option3'></div>
                                </div>
                                <div className='optionContainer'>
                                    <div className='optionPlate option4'></div>
                                </div>
                            </div>
                        </div> 
                        <div className=' '>
                            <button className='fridayBtn'>Black Friday Deal</button>
                            <div className='relative w-[160px]'>
                                <img src="https://i5.walmartimages.com/asr/294e9f0f-e9f6-48fd-a6e8-279af7bc89c0.01014e1068e8953a5dfe81bd9c77d639.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF" alt="" />
                                <CiHeart className='absolute top-3 right-2 text-2xl' />
                                <button className='optionBtn'>Options</button>
                            </div>
                            <div className='flex justify-between my-2'>
                                <div className='optionContainer'>
                                    <div className='optionPlate option1'></div>
                                </div>
                                <div className='optionContainer'>
                                    <div className='optionPlate option2'></div>
                                </div>
                                <div className='optionContainer'>
                                    <div className='optionPlate option3'></div>
                                </div>
                                <div className='optionContainer'>
                                    <div className='optionPlate option4'></div>
                                </div>
                            </div>
                        </div>
                        <div className=' '>
                            <button className='fridayBtn'>Black Friday Deal</button>
                            <div className='relative w-[160px]'>
                                <img src="https://i5.walmartimages.com/asr/294e9f0f-e9f6-48fd-a6e8-279af7bc89c0.01014e1068e8953a5dfe81bd9c77d639.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF" alt="" />
                                <CiHeart className='absolute top-3 right-2 text-2xl' />
                                <button className='optionBtn'>Options</button>
                            </div>
                            <div className='flex justify-between my-2'>
                                <div className='optionContainer'>
                                    <div className='optionPlate option1'></div>
                                </div>
                                <div className='optionContainer'>
                                    <div className='optionPlate option2'></div>
                                </div>
                                <div className='optionContainer'>
                                    <div className='optionPlate option3'></div>
                                </div>
                                <div className='optionContainer'>
                                    <div className='optionPlate option4'></div>
                                </div>
                            </div>
                        </div>
                        <div className=' '>
                            <button className='fridayBtn'>Black Friday Deal</button>
                            <div className='relative w-[160px]'>
                                <img src="https://i5.walmartimages.com/asr/294e9f0f-e9f6-48fd-a6e8-279af7bc89c0.01014e1068e8953a5dfe81bd9c77d639.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF" alt="" />
                                <CiHeart className='absolute top-3 right-2 text-2xl' />
                                <button className='optionBtn'>Options</button>
                            </div>
                            <div className='flex justify-between my-2'>
                                <div className='optionContainer'>
                                    <div className='optionPlate option1'></div>
                                </div>
                                <div className='optionContainer'>
                                    <div className='optionPlate option2'></div>
                                </div>
                                <div className='optionContainer'>
                                    <div className='optionPlate option3'></div>
                                </div>
                                <div className='optionContainer'>
                                    <div className='optionPlate option4'></div>
                                </div>
                            </div>
                        </div>
                        <div className=' '>
                            <button className='fridayBtn'>Black Friday Deal</button>
                            <div className='relative w-[160px]'>
                                <img src="https://i5.walmartimages.com/asr/294e9f0f-e9f6-48fd-a6e8-279af7bc89c0.01014e1068e8953a5dfe81bd9c77d639.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF" alt="" />
                                <CiHeart className='absolute top-3 right-2 text-2xl' />
                                <button className='optionBtn'>Options</button>
                            </div>
                            <div className='flex justify-between my-2'>
                                <div className='optionContainer'>
                                    <div className='optionPlate option1'></div>
                                </div>
                                <div className='optionContainer'>
                                    <div className='optionPlate option2'></div>
                                </div>
                                <div className='optionContainer'>
                                    <div className='optionPlate option3'></div>
                                </div>
                                <div className='optionContainer'>
                                    <div className='optionPlate option4'></div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
    </div>
  )
}

export default Deals