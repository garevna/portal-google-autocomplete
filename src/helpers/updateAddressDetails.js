export const updateAddressDetails = details => {
  Object.assign(window[Symbol.for('global.addressData')], {
    address: details.address,
    coordinates: details.coordinates,
    addressComponents: details.addressComponents,
    uniqueCode: details.uniqueCode,
    buildingId: details._id,
    status: details.status,
    estimatedServiceDeliveryTime: details.estimatedServiceDeliveryTime
  })

  window.dispatchEvent(new window.CustomEvent('submit-address', {
    detail: window[Symbol.for('global.addressData')]
  }))
}
