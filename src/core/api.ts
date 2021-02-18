import * as faunadb from 'faunadb'

export interface Totals {
  numberOfDonors: number
  amountDonated: number
}

export interface Donor {
  furName: string
  discordHandle?: string
  emailAddress: string
  hasDonated: boolean
}

export const getAllDonors = async (): Promise<Donor[] | null> => {
  const q = faunadb.query

  const faunaClient = new faunadb.Client({
    secret: process.env.REACT_APP_FAUNA_SERVER_KEY as string
  })

  try {
    const doesRecordExist: boolean = await faunaClient.query(
      q.Exists(q.Match(q.Index('allDonors')))
    )

    if (doesRecordExist) {
      const document = await faunaClient.query<faunadb.values.Document<Donor | Donor[]>>(
        q.Get(q.Match(q.Index('allDonors')))
      )

      return Array.isArray(document.data) ? document.data : [document.data]
    } else {
      return null
    }
  } catch (err: any) {
    return null
  }
}

export const getTotals = async (): Promise<Totals | null> => {
  const q = faunadb.query

  const faunaClient = new faunadb.Client({
    secret: process.env.REACT_APP_FAUNA_SERVER_KEY as string
  })

  try {
    const doesRecordExist: boolean = await faunaClient.query(
      q.Exists(q.Match(q.Index('getTotals')))
    )

    if (doesRecordExist) {
      const document = await faunaClient.query<faunadb.values.Document<Totals>>(
        q.Get(q.Match(q.Index('getTotals')))
      )

      return document.data
    } else {
      return null
    }
  } catch (err: any) {
    return null
  }
}

export const getDonorByDiscordHandle = async (handle: string): Promise<Donor | null> => {
  const q = faunadb.query

  const faunaClient = new faunadb.Client({
    secret: process.env.REACT_APP_FAUNA_SERVER_KEY as string
  })

  try {
    const doesRecordExist: boolean = await faunaClient.query(
      q.Exists(q.Match(q.Index('getDonorByDiscordHandle'), handle))
    )

    if (doesRecordExist) {
      const document = await faunaClient.query<faunadb.values.Document<Donor>>(
        q.Get(q.Match(q.Index('getDonorByDiscordHandle'), handle))
      )

      return document.data
    } else {
      return null
    }
  } catch (err: any) {
    return null
  }
}

export const getDonorByEmailAddress = async (email: string): Promise<Donor | null> => {
  const q = faunadb.query

  const faunaClient = new faunadb.Client({
    secret: process.env.REACT_APP_FAUNA_SERVER_KEY as string
  })

  try {
    const doesRecordExist: boolean = await faunaClient.query(
      q.Exists(q.Match(q.Index('getDonorByEmailAddress'), email))
    )

    if (doesRecordExist) {
      const document = await faunaClient.query<faunadb.values.Document<Donor>>(
        q.Get(q.Match(q.Index('getDonorByEmailAddress'), email))
      )

      return document.data
    } else {
      return null
    }
  } catch (err: any) {
    return null
  }
}

export const getDonorByFurName = async (name: string): Promise<Donor | null> => {
  const q = faunadb.query

  const faunaClient = new faunadb.Client({
    secret: process.env.REACT_APP_FAUNA_SERVER_KEY as string
  })

  try {
    const doesRecordExist: boolean = await faunaClient.query(
      q.Exists(q.Match(q.Index('getDonorByFurName'), name))
    )

    if (doesRecordExist) {
      const document = await faunaClient.query<faunadb.values.Document<Donor>>(
        q.Get(q.Match(q.Index('getDonorByFurName'), name))
      )

      return document.data
    } else {
      return null
    }
  } catch (err: any) {
    return null
  }
}
