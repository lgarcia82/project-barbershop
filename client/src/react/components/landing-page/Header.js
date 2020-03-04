import React from 'react'

import Logo from '../../../images/barberLogo4.jpg'

const HEADER_TITLE = 'the made up'
const HEADER_SUB = 'barbershop'

const Header = () => {
  return (
    <div className='Header-Container'>
      <div className='Header'>
        <div className='Header_Logo-Box'>
          <img src={Logo} alt='logo' className='Header_Logo' />
        </div>
        <div className='Header_Text-Box'>
          <h1 className='Heading-primary'>
            <span className='Heading-primary-main'>{HEADER_TITLE}</span>
            <span className='Heading-primary-sub'>{HEADER_SUB}</span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Header