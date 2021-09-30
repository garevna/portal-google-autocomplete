import PortalGoogleAutocomplete from './src/portal-google-autocomplete'

customElements.define('portal-google-autocomplete', PortalGoogleAutocomplete)

window.addEventListener('submit-address', function (event) {
  console.log(event.detail)
})
