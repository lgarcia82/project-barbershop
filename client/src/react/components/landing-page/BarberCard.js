import React from 'react'
import { Link } from 'react-router-dom'
import faker from 'faker'

const BarberCard = props => {
  return (
    <div className='col-1-2'>
      <Link to='/barbers'>
        <div className='BarberCard'>
          <div className='BarberCard_Image-Box'>
            <img
              src={faker.image.avatar()}
              alt={props.barber.id}
              className='BarberCard_Image'
            />
          </div>
          <div className='BarberCard_Text-Box'>
            <h1 className='CardHeading-primary'>
              <span className='CardHeading-primary-name'>
                {props.barber.name}
              </span>
              <span className='CardHeading-primary-status'>
                {props.barber.status}
              </span>
            </h1>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BarberCard