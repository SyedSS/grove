// @flow 
import {
  type AnyAction,
  type eventsState as State
} from '../types'

export const getUpcomingEventCount = (state: State) =>
  state.filter(event => event.isIn24Hours).length

export default (state: State = [], action: AnyAction): State => {
  switch (action.type) {
    case 'FETCHED_EVENTS': {
      const { events } = action

      return [
        ...state,
        ...events
      ]
    }
    default:
      return state
  }
}
