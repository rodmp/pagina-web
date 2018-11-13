import { pick } from 'ramda'

export default project => pick(['image', 'title'], project)
