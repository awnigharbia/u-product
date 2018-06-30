import React from 'react'

const Logo = ({src}) => {
    return (
      <div className='mLogo'>
        <img src={src} alt={src} />
      </div>
    )
}

export default Logo