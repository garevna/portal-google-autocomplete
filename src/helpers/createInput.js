import {
  searchBuildingByAddress,
  searchInPolygons,
  emitEvent
} from './'

import {
  wrapperStyle,
  inputStyle,
  submitButtonStyle
} from '../styles'

import {
  containerTemplate,
  snackBarTemplate,
  icon
} from '../templates'

export function createInput (container) {
  Object.assign(container, {
    innerHTML: `${containerTemplate}${snackBarTemplate}`,
    style: wrapperStyle
  })

  const input = Object.assign(this.shadow.querySelector('#google-autocomplete-input'), { style: inputStyle })

  const callback = function (event) {
    this.shadow.querySelector('#snack-bar').style.display = 'none'
    event.target.removeEventListener('input', callback)
  }.bind(this)

  input.addEventListener('input', callback)

  const button = Object.assign(this.shadow.querySelector('#submit-button'), {
    innerHTML: window.innerWidth >= 690 ? 'SUBMIT' : icon,
    style: submitButtonStyle,
    onmouseover: event => Object.assign(event.target.style, { background: '#9D2309' }),
    onmouseout: event => Object.assign(event.target.style, { background: '#881F1A' }),
    onclick: async function (event) {
      if (!window[Symbol.for('global.addressData')].address || window[Symbol.for('global.addressData')].status === 'N/A') return

      this.shadow.querySelector('#spinner').style.display = 'inline-block'
      this.shadow.querySelector('#google-maps-icon').style.display = 'none'
      window[Symbol.for('address-on-map-link')].style.display = 'block'

      let status = await searchBuildingByAddress()

      if (status !== 200) status = await searchInPolygons()

      emitEvent('new-address-data', window[Symbol.for('global.addressData')])
      this.shadow.querySelector('#spinner').style.display = 'none'
      this.shadow.querySelector('#google-maps-icon').style.display = 'inline-block'
    }.bind(this)
  })

  window.addEventListener('resize', function (event) {
    this.innerHTML = window.innerWidth >= 690 ? 'SUBMIT' : icon
    this.style.padding = '8px 16px'
  }.bind(button))

  return input
}
