// @flow 
import { combineReducers } from 'redux'

import events, * as fromEvents from './events'

import { type State } from '../types'

const rootReducer = combineReducers({
  events
})

export const getUpcomingEventCount = (state: State) =>
  fromEvents.getUpcomingEventCount(state.events)

export default rootReducer
