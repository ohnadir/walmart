import React from 'react'
import '../Style/Footer.css'

const FeedBack = () => {
  return (
    <div className='flex items-center justify-center py-10 border'>
        <div>
            <p>We’d love to hear what you think!</p>
            <div className='flex justify-center mt-3'>
                <button className='feedBackBtn border'>Give Feedback</button>
            </div>
        </div>
    </div>
  )
}

export default FeedBack