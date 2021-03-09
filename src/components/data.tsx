import React from 'react'

import Donors from './donors'

import { Donor } from '../types'

const Data: React.FC = () => {
  const [data, setData] = React.useState<Donor[] | null>(null)
  const [loading, setLoading] = React.useState<boolean>(false)

  const fetchAllDonors = async () => {
    try {
      const res = await fetch('/.netlify/functions/fetch-all-donors', {
        method: 'POST'
      })

      const data: Donor[] | null = await res.json()

      setLoading(false)
      
      setData(data)
    } catch (err: any) {
      setLoading(false)

      console.error(err)
    }
  }

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

                setLoading(true)

                fetchAllDonors()
                  .catch((err: any) => console.error(err))
                }
              }
            >
              Get the list
            </button>
          </div>
        </div>
      </div>
      <Donors donors={data} loading={loading} />
    </section>
  )
}

export default Data
