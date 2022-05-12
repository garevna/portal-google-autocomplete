export const emitEvent = function (eventName, eventData) {
  const event = new window.CustomEvent(eventName, { detail: eventData })
  window.dispatchEvent(event)
}
