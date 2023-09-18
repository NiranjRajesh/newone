import React from 'react'

const Member = () => {
  return (
    <div className='m-container'>
        <div className='heading'
>
        <h2>Member Details</h2>
        <a href="">Delete Member</a>
        </div>
       
        <div className='member-details'>
            <div className="l-detail">
            <p className='name'>John Smith</p>
            <p className='dob'>DOB 1/1/1990</p>
            <p>Address:</p>
            <p>66683, william</p>
            </div>
            <div className="r-detail">

                <p>Gender: Male</p>
                <p>Phone: 568-299-00</p>
            </div>
       

        </div>
    </div>
  )
}

export default Member