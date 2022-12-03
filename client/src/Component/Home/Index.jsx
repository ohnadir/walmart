import React from 'react'
import "../../Style/Home.css"
import Slider from "react-slick";
import k1 from "../../Assets/k1.webp"
import k2 from "../../Assets/k2.webp"
import k3 from "../../Assets/k3.webp"
import k4 from "../../Assets/k4.webp"
import k5 from "../../Assets/k5.webp"
import Deal from "../../Assets/deal.webp"
import member from "../../Assets/wplus-bg-dweb.svg"
import icon from "../../Assets/wplus-icon-white.svg"
import {CiHeart} from "react-icons/ci"
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import Departments from '../Departments';
import CashBack from '../CashBack';
import BuildYourCard from '../BuildYourCard';
import Deals from '../Deals';



const Index = () => {
    
    const settings = {
        arrows:false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
  return (
    <div className='bg-[#E6F1FC]'>
        <div className='max-w-7xl mx-auto bg-white p-6'>
            <div className='flex items-center gap-4'>
                <div className='w-[65%]'>
                    <Slider {...settings}>
                        <div className=' h-[395px] '>
                            <img className='h-full rounded-xl' src={k1} alt="" />
                        </div>
                        <div className='h-[395px]'>
                            <img className='h-full rounded-xl' src={k2} alt="" />
                        </div>
                        <div className='h-[395px]'>
                            <img className='h-full rounded-xl' src={k3} alt="" />
                        </div>
                        <div className='h-[395px]'>
                            <img className='h-full rounded-xl' src={k4} alt="" />
                        </div>
                        <div className='h-[395px]'>
                            <img className='h-full rounded-xl' src={k5} alt="" />
                        </div>
                    </Slider>
                </div>
                <div className='w-[35%] h-full'>
                    <div className='h-[395px] m-0'>
                        <img className='h-full w-full rounded-xl' src={Deal} alt="" />
                    </div>
                </div>
            </div>
            <div className='flex gap-6 mt-[20px]'>
                <div className='w-full flex flex-col gap-5 justify-between'>
                    <div className='bg-[#E6F1FC] h-[128px] secondCard flex justify-between'>
                        <h3>Reserve pickup or delivery</h3>
                        <button className='seeTimeBtn '>See times</button>
                    </div>
                    <div className='shadow-lg secondCard'>
                        <div className='flex justify-between items-center mb-[20px]'>
                            <h1 className='m-0'>Top departments</h1>
                            <span className='underline text-xs'> View All</span>
                        </div>
                        <div className='flex items-center justify-between topDepartments'>
                            <div>
                                <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-604b/k2-_333bfe34-ceed-44bf-8771-d9eb485f1b74.v1.jpg?odnHeight=90&odnWidth=90&odnBg=FFFFFF" alt="" />
                                <p>Electronics</p>
                            </div>
                            <div>
                                <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-d3cd/k2-_b7498899-8f9d-441c-b170-53cd47e3215b.v1.jpg?odnHeight=90&odnWidth=90&odnBg=FFFFFF" alt="" />
                                <p>Toys</p>
                            </div>
                            <div>
                                <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-7cc4/k2-_0125fcff-d6ae-459c-b7ab-95c1663c54ae.v1.jpg?odnHeight=90&odnWidth=90&odnBg=FFFFFF" alt="" />
                                <p>Fashion</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full shadow-lg grid grid-cols-2 gap-5 secondCard'>
                    <div>
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-147d/k2-_19b23f54-5936-4052-975c-499dcf8024bb.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF" alt="" />
                        <p>Up to 30% off tech</p>
                    </div>
                    <div>
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-c1c4/k2-_ab322582-c405-4a5c-b1e4-c053bb22ea77.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF" alt="" />
                        <p>Up to 40% off toys</p>
                    </div>
                    <div>
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-1057/k2-_e8dffa77-1fa5-4422-85ce-b61f21e89adc.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF" alt="" />
                        <p>Up to 60% off fashion</p>
                    </div>
                    <div>
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-ef8a/k2-_5bc29e60-ac21-4869-bf77-61cdd1832ca6.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF" alt="" />
                        <p>Up to 30% off self-care</p>
                    </div>
                </div>
                <div className='w-full shadow-lg grid grid-cols-2 gap-5 secondCard'>
                    <div>
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-fe78/k2-_c2c4d679-8daa-4688-9007-de8dfe4223ad.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF" alt="" />
                        <p>Up to 35% off home</p>
                    </div>
                    <div>
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-5a83/k2-_ce001057-f101-4042-bdc5-253f2d740484.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF" alt="" />
                        <p>Up to 20% off sports gear</p>
                    </div>
                    <div>
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-99f0/k2-_f14a520d-5d2a-4beb-b01c-038aa179a070.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF" alt="" />
                        <p>Up to 25% off tires</p>
                    </div>
                    <div>
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-6b58/k2-_81c498eb-1d50-4cf0-9631-c4d3b11ce1aa.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF" alt="" />
                        <p>Flash Picks</p>
                    </div>
                </div>
            </div>
            <section className='mt-[20px]'>
                <div className='relative'>
                    <img className='h-[48px] ' src={member} alt="" />
                    <div className='freeShipping'>
                            <div className='flex w-fit items-center gap-4 justify-center text-white mx-auto'>
                            <img src={icon} alt="" />
                                <p className='m-0'>Members get free shipping with no order minimum! Terms apply</p>
                                <span className='text-xs font-none underline'>Join Walmart+</span>
                            </div>
                    </div>
                </div>
            </section>
            <section className='dealsForDay'>
                <Deals/>
            </section>
            {/* gifting */}
            <section>
                <h1 className='my-5 font-semibold'>Get gifting</h1>
                <div className='flex justify-between items-center'>
                    <div>
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-2511/k2-_1f9f86dd-5dd6-4ff4-bdd1-8c8cd96bab6f.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF" alt="" />
                        <p className='text-center'>Stoking stuffers</p>
                    </div>
                    <div>
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-c327/k2-_92781d27-d929-4650-adb9-f0654ada1138.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF" alt="" />
                        <p className='text-center'>Stoking stuffers</p>
                    </div>
                    <div>
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-771e/k2-_b7107582-e998-4ca8-bc08-97d1c1395e8b.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF" alt="" />
                        <p className='text-center'>Stoking stuffers</p>
                    </div>
                    <div>
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-5093/k2-_84cf0f36-6eef-40e5-a9cd-045f82f70d3e.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF" alt="" />
                        <p className='text-center'>Stoking stuffers</p>
                    </div>
                </div>
            </section>
            {/* for you */}
            <section>
                <h1 className='my-5 font-semibold'>For you</h1>
                <div className='flex justify-between gap-8'>
                    <div className='forCard'>
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-40b5/k2-_924d4962-ef30-4128-8116-f29696f90e84.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF" alt="" />
                        <div className='forSubItem'>
                            <div>
                                <h1>Cozy home updates</h1>
                                <p>Save on all you need to create oasis</p>
                            </div>
                            <button className='mt-auto'>Shop now</button>
                        </div>
                    </div>
                    <div className='forCard'>
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-87ff/k2-_8afdc4b6-1992-4f7c-ad12-9438da56366b.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF" alt="" />
                        <div className='forSubItem'>
                            <div>
                                <h1>Power up your fun</h1>
                                <p>Bumper cars, hoverboards & other awesome wheels</p>
                            </div>
                            <button>Shop now</button>
                        </div>
                    </div>
                    <div className='forCard'>
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-888b/k2-_f2665d2a-e618-4d67-8b67-9be0a47bbaa8.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF" alt="" />
                        <div className='forSubItem'>
                            <div>
                                <h1>Advent calendars</h1>
                                <p>Get excited for the holidays & let gifting start early this year.</p>
                            </div>
                            <button>Shop now</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Departments */}
            <section className='relative'>
                <h1 className='my-7 font-bold text-lg border'>Your favorite departments</h1>
                <Departments/>
            </section>
            {/*  cash back */}
            <section className='my-10'>
                <CashBack/>
            </section>
            {/* Build your card */}
            <section>
                <h1 className='my-7 font-bold text-lg border'>Build your card</h1>
                <Departments/>
            </section>
            {/* in season */}
            <section>
                <h1 className='my-5 font-semibold'>In Season</h1>
                <div className='flex justify-between gap-8'>
                    <div className='inSeason'>
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-5648/k2-_142f6f1c-69cb-4677-aaf0-c578b682303d.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF" alt="" />
                        <div className='inSeasonItem'>
                            <div>
                                <h1>Baking fun for everyone</h1>
                                <p>Celebrate the season with exclusives from Great Value.</p>
                            </div>
                            <button className='mt-auto'>Shop now</button>
                        </div>
                    </div>
                    <div className='inSeason'>
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-be54/k2-_600298b3-dd1a-42df-b9ef-245c45007e24.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF" alt="" />
                        <div className='inSeasonItem'>
                            <div>
                                <h1>Prep for Holiday guests</h1>
                                <p>Save on cozy home updates & hosting must-haves</p>
                            </div>
                            <button>Shop now</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* video & home audio */}
            <section>
                <h1 className='my-7 font-bold'>Bestselling in toys & games</h1>
                <Departments/>
            </section>

            {/* New Brand  */}
            <section>
                <h1 className='my-10 font-semibold'>Brand new for you</h1>
                <div className='flex justify-between gap-8'>
                    <div className='inSeason'>
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-fa8a/k2-_0e91a8e4-bf5c-431d-bd63-b819e59926da.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF" alt="" />
                        <div className='inSeasonItem'>
                            <div>
                                <h1>Joy-filled foliage</h1>
                                <p>Get in full cheer with fresh holiday plants.</p>
                            </div>
                            <button className='mt-auto'>Shop now</button>
                        </div>
                    </div>
                    <div className='inSeason'>
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-9b7c/k2-_fe7b2bfd-9991-4244-8f34-a51cb97ba12e.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF" alt="" />
                        <div className='inSeasonItem'>
                            <div>
                                <h1>Nintendo bundle</h1>
                                <p>Get a 3-month online membership, Joy-Con` & Mario Kart 8`!</p>
                            </div>
                            <button>Shop now</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* games and accessories */}
            <section>
                <h1 className='my-7 font-bold text-lg border'>Save on video games & accessories</h1>
                <Departments/>
            </section>

            {/* health and wellness */}
            <section>
                <h1 className='my-5 font-bold'>Health & wellness</h1>
                <div className='flex justify-between gap-8'>
                    <div className='inSeason'>
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-3432/k2-_12c7e138-42f9-4151-a531-10e8d1a3f5e2.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF" alt="" />
                        <div className='inSeasonItem'>
                            <div>
                                <h1>At-home COVID-19 tests</h1>
                                <p>Now available at Walmart</p>
                            </div>
                            <button className='mt-auto'>Shop now</button>
                        </div>
                    </div>
                    <div className='inSeason'>
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-f8d6/k2-_7f9ced9d-3ccf-4602-8a79-56f726caea64.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF" alt="" />
                        <div className='inSeasonItem'>
                            <div>
                                <h1>Vaccines & more</h1>
                                <p>Protect against the flue, COVID-19, shingles & other illnesses</p>
                            </div>
                            <button>Schedule now</button>
                        </div>
                    </div>
                    <div className='inSeason'>
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-d7eb/k2-_feec3339-3120-45bf-9ce7-e1fad1c9eccd.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF" alt="" />
                        <div className='inSeasonItem'>
                            <div>
                                <h1>Put your health first</h1>
                                <p>Find medicine, vitamins, first aid & more wellness picks</p>
                            </div>
                            <button>Shop now</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Share value */}
            <section>
                <h1 className='my-5 font-bold'>Sharing our values</h1>
                <div className='flex justify-between gap-8'>
                    <div className='inSeason'>
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-cab4/k2-_ea6b8c8c-36da-4fda-95aa-0bf5bf984a81.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF" alt="" />
                        <div className='inSeasonItem'>
                            <div>
                                <h1>Black and Unlimited</h1>
                                <p>For who you are & who you want to be. we're here.</p>
                            </div>
                            <button className='mt-auto'>Explore more</button>
                        </div>
                    </div>
                    <div className='inSeason'>
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-f786/k2-_0749f48e-82aa-4d92-8ef2-946673f5f5f8.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF" alt="" />
                        <div className='inSeasonItem'>
                            <div>
                                <h1>Built for better</h1>
                                <p>Build for Better products with environmental certifications</p>
                            </div>
                            <button>Learn more</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Index