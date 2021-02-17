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

  const [loading, setLoading] = React.useState<boolean>(false)

  const FurNameForm: React.FC = () => (
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
          setFurNameSearchTerm((event.target as HTMLInputElement).value)
        }}
      />
    </form>
  )

  const EmailAddressForm: React.FC = () => (
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
          setEmailAddressSearchTerm((event.target as HTMLInputElement).value)
        }}
      />
    </form>
  )

  const DiscordHandleForm: React.FC = () => (
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
          setDiscordHandleSearchTerm((event.target as HTMLInputElement).value)
        }}
      />
    </form>
  )

  const Results: React.FC = () => (
    <div className='text-center'>
      {loading
        ? <h3>Loading...</h3>
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
  )

  return (
    <section className='content-section'>
      <h1>Search for a Donor</h1>
      <p>
        Search for a donor using their fur name, their email address, or their Discord handle.
      </p>
      <div className='small-container text-left'>
        <FurNameForm />
        <EmailAddressForm />
        <DiscordHandleForm />
        <Results />
      </div>
    </section>
  )
}

export default Search
