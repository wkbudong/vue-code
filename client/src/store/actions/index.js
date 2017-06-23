
import * as types from '../mutation-types'

export const add = ({commit}, num) => {
  commit(types.ADD, {
    num
  })
}