import { APIGatewayProxyHandlerV2 } from 'aws-lambda'
import {
  getDonorByFurName,
  getDonorByEmailAddress,
  getDonorByDiscordHandle
} from '../utils/api'

import {
  Donor
} from '../utils/types'

interface Body {
  term: string | null
  type: string | null
}

export const handler: APIGatewayProxyHandlerV2 = async (event, context) => {
  const body: Body | null = event?.body !== undefined ? JSON.parse(event.body) : null
  
  try {
    if (body === null) {
      throw new Error('Body arguments empty!')
    }

    if (body?.type === null) {
      throw new Error('Search type empty!')
    }

    if (body?.term === null) {
      throw new Error('Search term empty!')
    }

    let res: Donor | null = null

    switch (body.type) {
      case 'FurName':
        res = await getDonorByFurName(body.term)
        break
      case 'EmailAddress':
        res = await getDonorByEmailAddress(body.term)
        break
      case 'DiscordHandle':
        res = await getDonorByDiscordHandle(body.term)
        break
      default:
        throw new Error('Unknown search type!')
    }

    return {
      statusCode: 200,
      body: JSON.stringify(
        res !== null
          ? res
          : null
      )
    }
  } catch (err: any) {
    return {
      statusCode: 402,
      body: JSON.stringify(null)
    }
  }
}
