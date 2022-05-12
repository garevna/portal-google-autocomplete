import { polygonTypes } from '../configs'
import { emitEvent } from './'

export async function searchInPolygons () {
  const { lat, lng } = window[Symbol.for('global.addressData')].coordinates
  const latLng = new window.google.maps.LatLng(lat, lng)

  for (const type of polygonTypes) {
    const response = await window.fetch(`https://portal.dgtek.net/polygons/${type}`)

    if (response.status !== 200) {
      emitEvent('server-error', {
        error: true,
        errorType: 'Search address in polygons',
        errorMessage: 'Error reading the data from remote server'
      })
      return response.status
    }

    const polygons = (await response.json()).data.map(item => item.geometry.coordinates[0].map(point => ({ lat: point[1], lng: point[0] })))

    for (const coordinates of polygons) {
      const polygon = new window.google.maps.Polygon({ paths: coordinates })
      if (window.google.maps.geometry.poly.containsLocation(latLng, polygon)) {
        Object.assign(window[Symbol.for('global.addressData')], { status: type })
        return 200
      }
    }
  }

  Object.assign(window[Symbol.for('global.addressData')], { status: 'Not available' })
  return 404
}
