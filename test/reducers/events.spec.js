// @flow 
import assert from 'assert'

import reducer, { getUpcomingEventCount } from '../../src/reducers/events'
import { mockEvents } from '../mockEvents'

describe('Reducers: Events', () => {
  const initialState = []

  it('should return the initial state on @@INIT', () => {
    assert.deepEqual(
      reducer(undefined, { type: '@@INIT' }),
      initialState
    )
  })

  it('should set the events on FETCHED_EVENTS', () => {
    const action = {
      type: 'FETCHED_EVENTS',
      events: mockEvents
    }

    assert.deepEqual(
      reducer(initialState, action),
      mockEvents
    )
  })

  it('getUpcomingEventCount should count correctly', () => {
    assert.equal(getUpcomingEventCount(mockEvents), 2)
  })
})
