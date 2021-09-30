import { emitEvent } from './'

export async function searchBuildingByAddress () {
  const response = await fetch(`${window[Symbol.for('portal.api.host')]}/building/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ address: window[Symbol.for('global.addressData')].address })
  })

  if (response.status !== 200) {
    emitEvent('server-error', {
      error: true,
      errorType: 'Search address in DB',
      errorMessage: 'Error reading the data from remote server'
    })
    return response.status
  }

  const result = await response.json()

  if (!result.data) return 404

  const { status, estimatedServiceDeliveryTime, _id: buildingId } = result.data

  Object.assign(window[Symbol.for('global.addressData')], {
    status,
    estimatedServiceDeliveryTime,
    buildingId
  })

  return 200
}
