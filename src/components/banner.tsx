import React from 'react'

const Banner: React.FC = () => {
  return (
    <section className='content-section'>
      <div className='medium-container'>
        <div className='flex-row justify-center'>
          <div className='one-third'>
            <img
              src='./logo512.png'
              className='responsive-image'
              alt='Furnal Equinox logo'
              style={{ maxWidth: '100px' }}
            />
          </div>
          <div className='two-thirds'>
            <h1>Furnal Equinox Donations Tool</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
