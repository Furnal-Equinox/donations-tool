import React from 'react'

import Banner from '../components/banner'
import Data from '../components/data'
import Footer from '../components/footer'
import Search from '../components/search'
import Totals from '../components/totals'

const App: React.FC = () => {
  return (
    <div className='medium-container text-center'>
      <Banner />
      <Totals />
      <Search />
      <Data />
      <div className='small-container'>
        <img
          src='./marty.png'
          className='responsive-image'
          alt='Marty'
        />
      </div>
      <Footer />
    </div>
  )
}

export default App
