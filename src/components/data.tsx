import React from 'react'

import {
  Donor,
  getAllDonors
} from '../core/api'

import Donors from './donors'

const Data: React.FC = () => {
  const [data, setData] = React.useState<Donor[] | null>(null)
  return (
    <section className='content-section'>
      <h1>Get a List of All Donors</h1>
      <p>
        Use this button to ask the database for the current list of donors.
      </p>
      <div className='small-container'>
        <div className='flex-row justify-center'>
          <div className='one-third'>
            <button
              className='round-button'
              onClick={event => {
                event.preventDefault()
                getAllDonors()
                  .then(data => setData(data))
                  .catch((err: any) => console.error(err))
              }}
            >
              Get the list
            </button>
          </div>
        </div>
      </div>
      <Donors donors={data} />
    </section>
  )
}

export default Data
