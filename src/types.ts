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

export type AllDonors = Array<{
  data: Donor
}>