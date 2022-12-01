import React from 'react';
import '../Style/CashBack.css'

const CashBack = () => {
  return (
    <div className='relative'>
            <div className='mainContainer'></div>
            <div className='cashBack'>
                <div className='flex w-fit items-center gap-4 justify-center  mx-auto'>
                    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-4cbf/k2-_19bccbbb-b02e-43ca-b47f-54e066d59b36.v1.png?odnHeight=64&odnWidth=107&odnBg=FFFFFF" alt="" />
                    <p className='m-0 '>
                        <span className='border-b-[3px] pb-1 border-blue-600'>Earn 5% cash back.   </span> 
                        See if you're pre-approved with no credit risk.
                    </p>
                    <span className='text-xs  underline'>Learn how</span>
                </div>
            </div>
        
    </div>
  )
}

export default CashBack