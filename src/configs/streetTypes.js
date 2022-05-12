const streetTypes = {
  ALLY: 'ALLY',
  ARC: 'ARC',
  AVE: 'AV',
  BVD: 'BVD',
  BYPA: 'BYPA',
  CCT: 'CCT',
  CIR: 'CIR',
  CL: 'CL',
  CRN: 'CRN',
  CT: 'CT',
  CRES: 'CR',
  CDS: 'CDS',
  DR: 'DR',
  ENT: 'ENT',
  ESP: 'ESP',
  GLADE: 'GLDE',
  GRN: 'GRN',
  GARDENS: 'GDNS',
  GROVE: 'GR',
  HWY: 'HWY',
  JNC: 'JNC',
  LN: 'LN',
  LANE: 'LN',
  LINK: 'LINK',
  MEWS: 'MEWS',
  PARADE: 'PD',
  PL: 'PL',
  RDGE: 'RDGE',
  RD: 'RD',
  SQ: 'SQ',
  ST: 'ST',
  TERRACE: 'TCE',
  WAY: 'WAY'
}

streetTypes.getGeoscapeStreetType = function (fullStreetName) {
  const components = window[Symbol.for('global.addressData')].addressComponents
  const { number, city, state, postCode } = components
  const tmp = fullStreetName.toUpperCase().split(' ')
  const streetType = tmp.pop()
  Object.assign(components, { street: tmp.join(' ') })
  const key = Object.keys(this).find(type => type === streetType)

  components.street = key ? this[key] : streetType
  window[Symbol.for('global.addressData')].address = `${number} ${components.street}, ${city} ${state} ${postCode}`
  return key ? this[key] : streetType
}

export {
  streetTypes
}
