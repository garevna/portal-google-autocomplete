import PortalGoogleAutocomplete from './src/portal-google-autocomplete'

window.customElements.define('portal-google-autocomplete', PortalGoogleAutocomplete)

window.addEventListener('open-error-popup', function (event) {
  console.warn(event.detail)
})

window.addEventListener('submit-address', function (event) {
  console.log(event.detail)
})
