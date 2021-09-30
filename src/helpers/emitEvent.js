export const emitEvent = function (eventName, eventData) {
  const event = new CustomEvent(eventName, { detail: eventData })
  window.dispatchEvent(event)
}
