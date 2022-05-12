import {
  createInput,
  createAutocomplete
} from './helpers'

import { containerStyle, linkStyle } from './styles'

class PortalGoogleAutocomplete extends window.HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' })
    const wrapper = this.shadow.appendChild(document.createElement('figure'))
    wrapper.style = containerStyle
    const inputElement = createInput.call(this, wrapper)
    createAutocomplete(inputElement)

    window[Symbol.for('global.addressData')] = {
      address: '',
      addressComponents: {},
      coordinates: {},
      buildingId: null,
      url: null,
      status: '',
      estimatedServiceDeliveryTime: ''
    }

    window[Symbol.for('address-on-map-link')] = this.shadow.querySelector('#address-on-map-link')
    window[Symbol.for('address-on-map-link')].style = linkStyle
    window[Symbol.for('address-on-map-link')].style.display = 'none'
  }

  connectedCallback () {
    window[Symbol.for('portal.api.host')] = this.getAttribute('host')
  }
}

export default PortalGoogleAutocomplete
