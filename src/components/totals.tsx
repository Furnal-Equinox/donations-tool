import React from 'react'
import { Totals as DonorTotals } from '../types'

const Totals: React.FC = () => {
  const donationGoal = parseInt(
    process.env.REACT_APP_DONATION_GOAL as string
  )

  const timeToCheck = parseInt(
    process.env.REACT_APP_INTERVAL_IN_MS_TO_CHECK_TOTAL_DONATION_AMOUNT as string
  )

  const [
    totals, setTotals
  ] = React.useState<DonorTotals | null>(null)

  const [timeLastChecked, setTimeLastChecked] = React.useState<string | null>(null)

  React.useEffect(() => {
    const fetchTotals = async (): Promise<void> => {
      try {
        const res = await fetch('/.netlify/functions/fetch-totals', {
          method: 'POST'
        })

        const data = await res.json()

        setTotals(data)
      } catch (err: any) {
        console.error(err)
      }
    }

    setTimeLastChecked(new Date().toLocaleString())

    fetchTotals()
      .catch((err: any) => console.error(err))

    const interval = setInterval(() => {
      fetchTotals()
        .catch((err: any) => console.error(err))

      setTimeLastChecked(new Date().toLocaleString())
    }, timeToCheck)

    return () => clearInterval(interval)
  }, [])

  const getPercentOfGoal = (): number =>
    ((totals?.amountDonated ?? 0) / donationGoal) * 100

  return (
    <section className='content-section'>
      <h2>Current Totals</h2>
      <h3>{`Donations so far: CAD$ ${(totals?.amountDonated ?? 0).toFixed()}`}</h3>
      <h3>{`(${getPercentOfGoal().toFixed()} % of CAD$ ${donationGoal} goal)`}</h3>
      <h3>{`Number of unique donors: ${totals?.numberOfDonors ?? 0}`}</h3>
      <h4>
        {`Time last checked: ${timeLastChecked ?? 'unknown'}`}
      </h4>
    </section>
  )
}

export default Totals
