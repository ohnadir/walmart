import React, { useState } from 'react';
import '../Style/SubHeader.css'
import phone from '../Assets/phone.webp'
import { TiTickOutline } from 'react-icons/ti';
import {MdOutlineLocationOn, MdKeyboardArrowUp, MdKeyboardArrowDown, MdArrowForwardIos} from "react-icons/md"
import {SlHome} from "react-icons/sl";
import shipping from '../Assets/shipping.png'
import pickup from '../Assets/pickup.png'
import delivery from '../Assets/delivary.png'

const SubHeader = () => {
  const [card, setCard] = useState(false)
  return (
    <div className='subHeader '>
        <div className='flex items-center gap-2'>
            <div className='flex items-center gap-2 cursor-pointer' onClick={()=>setCard(!card)}>
              <img className='w-[30px]' src={phone} alt="" />
              <span >How do you want your items ?</span>
              {
                card ? <MdKeyboardArrowUp className='mt-[3px] text-xl' /> : <MdKeyboardArrowDown className='mt-[3px] text-xl' />
              }
              {/* <IoIosArrowForward className='mt-[3px]'/> */}
              
                <p className='m-0'>|</p>
          
            </div>
            <div className='flex m-0 items-center gap-2 '>
              <MdOutlineLocationOn className='mt-[3px]'/>
              <p className='m-0'>Sacramento,</p>
              <p className='m-0'>95829</p>
              <SlHome/>
              <p className='m-0'>Sacramento Supercenter</p>
            </div>
        </div>
        {
          card && 
          <div className='mt-[2px]'>
            {
              card ? <div className=' cardOverlay'></div> : ""
            }
            <div className='card'>
              <div className='flex items-center justify-center gap-7'>
                <div className="optionItem">
                  <img className='mx-auto' src={shipping} alt="" />
                  <p className='mt-[10px]'>Shipping</p>
                </div>
                <div className="optionItem">
                  <img className='mx-auto' src={pickup} alt="" />
                  <p className='mt-[10px]'>Pickup</p>
                </div>
                <div className="optionItem">
                  <img className='mx-auto' src={delivery} alt="" />
                  <p className='mt-[10px]'>Delivery</p>
                </div>
              </div>
              <div className='cardItem my-5'>
                <div className='flex  gap-2'>
                  <MdOutlineLocationOn className='icon'/>
                  <div className='mt-[-5px]'>
                    <h6 >Add an address for shipping and delivery</h6>
                    <p className='m-0 text-xs'>Sacramento, CA 95829</p>
                  </div>
                </div>
                <button className='addressBtn'>Add address</button>
              </div>
              <div className='cardItem'>
                <div className='flex  gap-2'>
                  <SlHome className='icon' />
                  <div className='mt-[-5px]'>
                    <h6 >Add an address for shipping and delivery</h6>
                    <p className='m-0 text-xs flex items-center gap-1'>
                      8915 Gerber Road, Sacramento, CA 95829 
                      <span><MdArrowForwardIos className='text-lg' /></span>
                    </p>
                    <ul className='flex items-center justify-between mt-[6px]'>
                      <li>
                        <TiTickOutline/>
                        Curbside pickup
                      </li>
                      <li>
                        <TiTickOutline/>
                        In-store pickup
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
    </div>
  )
}

export default SubHeader