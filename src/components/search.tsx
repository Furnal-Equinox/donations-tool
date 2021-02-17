import React from 'react'
import { Ellipsis } from 'react-css-spinners'
import {
  Donor,
  getDonorByDiscordHandle,
  getDonorByEmailAddress,
  getDonorByFurName
} from '../core/api'

const Search: React.FC = () => {
  const [furNameSearchTerm, setFurNameSearchTerm] = React.useState<string>('')
  const [emailAddressSearchTerm, setEmailAddressSearchTerm] = React.useState<string>('')
  const [discordHandleSearchTerm, setDiscordHandleSearchTerm] = React.useState<string>('')
  const [donorResult, setDonorResult] = React.useState<Donor | null>(null)

  const [loading, setLoading] = React.useState<boolean>(false)

  return (
    <section className='content-section'>
      <h1>Search for a Donor</h1>
      <p>
        Search for a donor using their fur name, their email address, or their Discord handle.
      </p>
      <div className='small-container text-left'>
        <form
          onSubmit={event => {
            event.preventDefault()
            setLoading(true)
            getDonorByFurName(furNameSearchTerm)
              .then(data => {
                setLoading(false)
                setDonorResult(data)
              })
              .catch((err: any) => {
                setLoading(false)
                console.error(err)
              })
          }}
        >
          <label htmlFor='inputFurNameSearchTerm'>
            Search for a donor by their fur name
          </label>
          <input
            name='furNameSearchTerm'
            aria-label='Fur name to use as search term'
            type='text'
            id='inputFurNameSearchTerm'
            placeholder='Fur Name'
            value={furNameSearchTerm}
            onInput={event => {
              event.preventDefault()
              setFurNameSearchTerm((event.target as HTMLInputElement).value)
            }}
          />
        </form>
        <form
          onSubmit={event => {
            event.preventDefault()
            setLoading(true)
            getDonorByEmailAddress(emailAddressSearchTerm)
              .then(data => {
                setLoading(false)
                setDonorResult(data)
              })
              .catch((err: any) => {
                setLoading(false)
                console.error(err)
              })
          }}
        >
          <label htmlFor='inputEmailSearchTerm'>
            Search for a donor by their email address
          </label>
          <input
            name='emailAddressSearchTerm'
            aria-label='Email address to use as search term'
            type='text'
            id='inputEmailAddressSearchTerm'
            placeholder='Email Address'
            value={emailAddressSearchTerm}
            onInput={event => {
              event.preventDefault()
              setEmailAddressSearchTerm((event.target as HTMLInputElement).value)
            }}
          />
        </form>
        <form
          onSubmit={event => {
            event.preventDefault()
            setLoading(true)
            getDonorByDiscordHandle(discordHandleSearchTerm)
              .then(data => {
                setLoading(false)
                setDonorResult(data)
              })
              .catch((err: any) => {
                setLoading(false)
                console.error(err)
              })
          }}
        >
          <label htmlFor='inputDiscordHandleSearchTerm'>
            Search for a donor by their Discord Handle{' '}
            <strong>(Will fail if the donor hasn't given a Discord handle!)</strong>
          </label>
          <input
            name='discordHandleSearchTerm'
            aria-label='Discord Handle to use as search term'
            type='text'
            id='inputDiscordHandleSearchTerm'
            placeholder='Discord Handle'
            value={discordHandleSearchTerm}
            onInput={event => {
              event.preventDefault()
              setDiscordHandleSearchTerm((event.target as HTMLInputElement).value)
            }}
          />
        </form>
        <div className='text-center'>
          {loading
            ? <Ellipsis color='#404040' />
            : (donorResult !== null
              ? (
                <h3>
                  {[
                    `${donorResult.furName}`,
                    `(${donorResult.emailAddress},`,
                    `${donorResult?.discordHandle ?? 'no Discord'})`,
                    `has ${!donorResult.hasDonated ? 'not' : ''} donated.`
                  ].join(' ')}
                </h3>
              ) : (
                <h3>No data.</h3>
              )
            )}
        </div>
      </div>
    </section>
  )
}

export default Search
