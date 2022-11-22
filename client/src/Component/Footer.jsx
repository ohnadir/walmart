import React from 'react'
import '../Style/Footer.css'

const Footer = () => {
  return (
    <div className='  bg-[#004F9A]'>
        <div className='max-w-7xl mx-auto py-5 footerContainer'>
            <ul className='grid grid-cols-1 md:grid-cols-8 lg:grid-cols-10 text-white'>
                <li>All Departments</li>
                <li>Store Directory</li>
                <li>Careers</li>
                <li>Our Company</li>
                <li>Sell on Walmart.com</li>
                <li>Help</li>
                <li>COVID-12 Vaccine Scheduler</li>
                <li>Product Recalls</li>
                <li>Accessibility</li>
                <li>Tax Exempt Program</li>
                <li>Get the Walmart App</li>
                <li>Sign-up for Email</li>
                <li>Safety Data Sheet</li>
                <li>Terms od Use</li>
                <li>Privacy & Security</li>
                <li>CA Privacy Rights</li>
                <li>California Supply Chain Act</li>
                <li>Do Not Sell My Personal Information</li>
                <li>Request My Personal Information</li>
                <li>#lYWYK</li>
            </ul>
            <p className='text-xs text-center text-white'>© 2022 Walmart. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer