import { toLower, split, lensIndex, view } from 'ramda'

const elementIndex = lensIndex(2)

export default endpointId => toLower((view(elementIndex, split('_', endpointId))) || 'twitch')
// TEMPROARY SOLUTION ONLY FOR TWITCH
