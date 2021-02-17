import React from 'react'
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

  return (
    <section className='content-section'>
      <h1>Search for a Donor</h1>
      <p>
        Search for a donor using their fur name, their email address, or their Discord handle.
        <br />
        <strong />
      </p>
      <div className='small-container text-left'>
        <form
          onSubmit={event => {
            event.preventDefault()
            getDonorByFurName(furNameSearchTerm)
              .then(data => setDonorResult(data))
              .catch((err: any) => console.error(err))
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
              setFurNameSearchTerm((event.target as HTMLInputElement).value)
            }}
          />
        </form>
        <form
          onSubmit={event => {
            event.preventDefault()
            getDonorByEmailAddress(emailAddressSearchTerm)
              .then(data => setDonorResult(data))
              .catch((err: any) => console.error(err))
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
              setEmailAddressSearchTerm((event.target as HTMLInputElement).value)
            }}
          />
        </form>
        <form
          onSubmit={event => {
            event.preventDefault()
            getDonorByDiscordHandle(discordHandleSearchTerm)
              .then(data => setDonorResult(data))
              .catch((err: any) => console.error(err))
          }}
        >
          <label htmlFor='inputDiscordHandleSearchTerm'>
            Search for a donor by their Discord Handle{' '}
            <strong>(Will fail if the donor hasn't given a Discord handle!)</strong>
          </label>
          <input
            name='discordHandleSearchTerm'
            aria-label='Email address to use as search term'
            type='text'
            id='inputDiscordHandleSearchTerm'
            placeholder='Email Address'
            value={discordHandleSearchTerm}
            onInput={event => {
              setDiscordHandleSearchTerm((event.target as HTMLInputElement).value)
            }}
          />
        </form>
        <div className='text-center'>
          {donorResult !== null
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
            )}
        </div>
      </div>
    </section>
  )
}

export default Search
