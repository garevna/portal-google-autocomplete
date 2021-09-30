# portal-google-autocomplete

### Package installation

```
yarn add portal-google-autocomplete
```

### Start package

```js
import PortalGoogleAutocomplete from 'portal-google-autocomplete'

customElements.define('portal-google-autocomplete', PortalGoogleAutocomplete)
```

### Set API host

```html
<portal-google-autocomplete host="https://dgtek-staging.herokuapp.com" />
```

You should wait for Google maps script has been loaded in your component

##### data

```js
data: () => ({
  mapIsReady: false,
  /* ... other variables here */
})
```

##### Catch events

Submit button event:

```js
window.addEventListener('new-address-data', function (event) {
  console.log(event.detail) /* replace this with your code */
})
```
During checking the address, a number of requests will be made to remote server.

Every request can fail.

```js
window.addEventListener('server-error', function (event) {
  console.log(event.detail) /* { error: true, errorType: String, errorMessage: String } */
})
```

##### mounted hook

```js
function waitForGoogleMapsScript () {
  if (!window.google) window.requestAnimationFrame(waitForGoogleMapsScript.bind(this))
  else this.mapIsReady = true
}

window.requestAnimationFrame(waitForGoogleMapsScript.bind(this))

window.addEventListener('new-address-data', this.catchEvent)
```

##### beforeDestroy hook

```js
window.removeEventListener('new-address-data', this.catchEvent)
```

And then insert this package to your component template:

```html
<DgtekGoogleAutocomplete v-if="mapIsReady" />
```
