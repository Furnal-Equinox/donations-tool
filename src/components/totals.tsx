import React from 'react'
import { Totals as DonorTotals, getTotals } from '../core/api'

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

  React.useEffect(() => {
    const fetchTotals = async (): Promise<void> => {
      const data = await getTotals()
      setTotals(data)
    }

    fetchTotals()
      .catch((err: any) => console.error(err))

    const interval = setInterval(() => {
      fetchTotals()
        .catch((err: any) => console.error(err))
    }, timeToCheck)

    return () => clearInterval(interval)
  }, [])

  const getPercentOfGoal = (): string => {
    const percent: number = ((totals?.amountDonated ?? 0) / donationGoal) * 100
    return percent.toFixed()
  }

  return (
    <section className='content-section'>
      <h2>Current Totals</h2>
      <h3>{`Donations so far: CAD$ ${totals?.amountDonated ?? 0}`}</h3>
      <h3>{`(${getPercentOfGoal()} % of CAD$ ${donationGoal} goal)`}</h3>
      <h3>{`Number of donors: ${totals?.numberOfDonors ?? 0}`}</h3>
    </section>
  )
}

export default Totals
