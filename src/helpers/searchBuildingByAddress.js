import { emitEvent, updateAddressDetails, searchInPolygons } from './'

export async function searchBuildingByAddress () {
  const host = window[Symbol.for('portal.api.host')]

  const { address } = window[Symbol.for('global.addressData')]

  const { data } = await (await window.fetch(`${host}/building/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ address })
  })).json()

  if (!data) {
    await searchInPolygons()
    emitEvent('submit-address', window[Symbol.for('global.addressData')])
    return
  }

  if (!data.addressComponents.isSlave) {
    updateAddressDetails(data)
    return 200
  }

  const { data: details } = await (await window.fetch(`${host}/building/${data.addressComponents.masterBuildingId}`)).json()

  if (!details) {
    emitEvent('open-error-popup', {
      errorType: 'Slave building',
      errorMessage: `Master building for ${address} not found`
    })
    return 404
  }

  updateAddressDetails(details)

  return 200
}
