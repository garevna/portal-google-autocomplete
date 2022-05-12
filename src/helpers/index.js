import { loadGoogleMapsScript } from './loadGoogleMapsScript'

import { createInput } from './createInput'
import { createAutocomplete } from './createAutocomplete'

import { normalizeAddress } from './normalizeAddress'
import { clearAddressData } from './clearAddressData'
import { updateAddressDetails } from './updateAddressDetails'

import { searchBuildingByAddress } from './searchBuildingByAddress'
import { searchInPolygons } from './searchInPolygons'

import { emitEvent } from './emitEvent'

export {
  loadGoogleMapsScript,
  createAutocomplete,

  clearAddressData,
  normalizeAddress,
  updateAddressDetails,

  createInput,

  searchBuildingByAddress,
  searchInPolygons,

  emitEvent
}
