import { APIGatewayProxyHandlerV2 } from 'aws-lambda'
import { getAllDonors } from '../utils/api'

export const handler: APIGatewayProxyHandlerV2 = async () => {
  try {
    const res = await getAllDonors()

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
