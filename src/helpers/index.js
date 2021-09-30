import { loadGoogleMapsScript } from './loadGoogleMapsScript'

import { createInput } from './createInput'
import { createAutocomplete } from './createAutocomplete'

import { normalizeAddress } from './normalizeAddress'
import { clearAddressData } from './clearAddressData'

import { searchBuildingByAddress } from './searchBuildingByAddress'
import { searchInPolygons } from './searchInPolygons'

import { emitEvent } from './emitEvent'

export {
  loadGoogleMapsScript,
  createAutocomplete,

  clearAddressData,
  normalizeAddress,

  createInput,

  searchBuildingByAddress,
  searchInPolygons,

  emitEvent
}
