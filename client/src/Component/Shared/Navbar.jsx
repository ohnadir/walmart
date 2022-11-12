import React from 'react'
import '../../Style/Navbar.css';
import logo from '../../Assets/walmartlogo.png'
import { MdOutlineGridView } from 'react-icons/md';
import { BsGridFill, BsCart } from 'react-icons/bs';
import { IoIosSearch } from 'react-icons/io';
import { FiHeart } from 'react-icons/fi';
import { CiUser } from 'react-icons/ci';
import { GrMenu } from 'react-icons/gr';

const Navbar = () => {
  return (
    <div className='navContainer'>
      <div className='flex justify-between items-center gap-10'>
        <div className=' flex items-center  gap-10'>
            <div className='block lg:hidden'>
              <div className='flex items-center gap-10'>
                <GrMenu className='text-[55px] cursor-pointer'/>
                <img className='w-[32px]' src={logo} alt="" />
              </div>
            </div>
            <div className='hidden lg:block'>
              <div className='logo active  '> 
                  <h1 className=''>Walmart</h1>
                  <img className='mr-0 lg:mr-6' src={logo} alt="" />
              </div>
            </div>
            <div className='hidden lg:block'>
              <div className="departments  active">
                <MdOutlineGridView/> <span>Departments</span>
              </div>
            </div>
            <div className='hidden lg:block'>
              <div className='services hidden lg:block  active'>
                <BsGridFill/>
                <span>services</span>
              </div>
            </div>
        </div>
        <div className='inputContainer w-full'>
          <input type="text" placeholder='Search everything at Walmart online' />
          <IoIosSearch className='searchIcon'/>
        </div>
        <div className=' flex items-center  gap-10' >
          <div className='hidden lg:block'>
          <div className='myItem active'>
            <FiHeart/>
            <div>
              <p>Reorder</p>
              <h1>My Items</h1>
            </div>

          </div>
          </div>
          <div className='hidden lg:block'>
          <div className='auth  active'>
            <CiUser/>
            <div>
              <p>Sign in</p>
              <h1>Account</h1>
            </div>
          </div>
          </div>
          <div className='cart active'>
            <div className='relative'>
              <BsCart className='icon'/>
              <span className='item'>0</span>
            </div>
            <span>$0.00</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar