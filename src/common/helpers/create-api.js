import { camelize } from '../lang/string'
import createAPIComponent from './create-api-component'

export default function createAPI(Vue, Component, events, single) {
  const api = createAPIComponent.apply(this, arguments)
  const { name } = Component
  const pureName = name.replace(/^calf-/i, '')
  const createName = `$${camelize(`create-${pureName}`)}`
  Vue.prototype[createName] = api.create
  Component.$create = api.create
  return api
}
