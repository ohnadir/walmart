import React from 'react'
import '../../Style/Navbar.css';
import logo from '../../Assets/walmartlogo.png'
import { MdOutlineGridView } from 'react-icons/md';
import { BsGridFill, BsCart, BsChat } from 'react-icons/bs';
import { IoIosSearch } from 'react-icons/io';
import { FiHeart } from 'react-icons/fi';
import { CiUser } from 'react-icons/ci';
import { GrMenu } from 'react-icons/gr';
import { BiReceipt } from 'react-icons/bi';
import { TbDownload } from 'react-icons/tb';
import { TfiHelpAlt } from 'react-icons/tfi';
import { GoGift } from 'react-icons/go';

const Navbar = () => {
  const openNav=()=>{
    document.getElementById("mySideNav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
    document.getElementById("btn").style.display= "block";
  }
  const closeNav=()=>{
    document.getElementById("mySideNav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("btn").style.display= "none";
  }
  return (
    <>
      <div id="mySideNav" class="sideNav">
        <div className='flex items-center gap-5 p-5 sideNavAuth'>
          <img onClick={closeNav} className='w-[28px] cursor-pointer' src={logo} alt="" />
          <button id='btn'>Sign in or create account</button>
        </div>
        <div className='p-5'>
          <ul>
            <li><BiReceipt/> Purchase History</li>
            <li><TbDownload/> My Items</li>
            <li><CiUser/> Account</li>
            <li className='blind'><TfiHelpAlt/> Help</li>
            <li><FiHeart/> Lists</li>
            <li><GoGift/> Registries</li>
            <div className='blind'>
              <li><MdOutlineGridView/> Departments</li>
              <li><BsGridFill/> Services</li>
            </div>
            <li><BsChat/> Give Feedback</li>
          </ul>
        </div>
      </div>
    <div className='navContainer' id="main">
      <div className='flex justify-between items-center gap-10'>
        <div className=' flex items-center  gap-10'>
            <div className='block lg:hidden'>
              <div className='flex items-center gap-10'>
                <GrMenu onClick={openNav}  className='menuBtn'/>
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
    </>
  )
}

export default Navbar