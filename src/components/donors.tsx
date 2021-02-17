import React from 'react'
import { Donor } from '../core/api'

const Donors: React.FC<{ donors: Donor[] | null, loading: boolean }> = ({
  donors, loading
}) => {
  const fields: string[] = [
    'Fur Name',
    'Email Address',
    'Discord Handle',
    'Has Donated'
  ]

  const TableHeader: React.FC<{ fields: string[] }> = ({
    fields
  }) => {
    return (
      <thead>
        <tr>
          {fields.map((elem, i) =>
            <th key={i}>{elem}</th>
          )}
        </tr>
      </thead>
    )
  }

  const TableBody: React.FC<{ records: Donor[] }> = ({
    records
  }) => {
    return (
      <tbody>
        {records.map((elem, i) =>
          <tr key={i}>
            <td>{elem.furName}</td>
            <td>{elem.emailAddress}</td>
            <td>{elem.discordHandle ?? 'No Discord handle'}</td>
            <td>{elem.hasDonated ? 'Yes' : 'No'}</td>
          </tr>
        )}
      </tbody>
    )
  }

  const Table: React.FC<{ fields: string[], records: Donor[] }> = ({
    fields,
    records
  }) => {
    return (
      <div className='contain-table'>
        <table className='striped-table'>
          <TableHeader fields={fields} />
          <TableBody records={records} />
        </table>
      </div>
    )
  }

  return (
    <>
      {loading
        ? <h3>Loading...</h3>
        : (donors !== null
          ? <Table fields={fields} records={donors} />
          : (
            <h3>No data.</h3>
          )
        )}
    </>
  )
}

export default Donors
