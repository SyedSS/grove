// @flow
import assert from 'assert'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { fetchEvents } from '../../src/actions'
import { mockEvents } from '../mockEvents'

const mockData = {
  data: [
    {
      id: 0,
      type: 'task',
      attributes: {
        cron: '0 7 14 3 *',
        name: 'Repot Sunny the Succulent'
      }
    },
    {
      id: 1,
      type: 'task',
      attributes: {
        cron: '0 18 20 * *',
        name: 'Pick up Grove order from mailroom'
      }
    },
    {
      id: 2,
      type: 'task',
      attributes: {
        cron: '30 7 * * 1',
        name: 'Water Sunny the Succulent'
      }
    },
    {
      id: 3,
      type: 'task',
      attributes: {
        cron: '0 12 * * 3',
        name: 'Lunch with Mrs. Meyers'
      }
    },
    {
      id: 4,
      type: 'task',
      attributes: {
        cron: '0 14 * *',
        name: 'Farmers Market'
      }
    },
    {
      id: 5,
      type: 'task',
      attributes: {
        cron: '15 7 * * 1-5',
        name: 'Make coffee'
      }
    },
    {
      id: 6,
      type: 'task',
      attributes: {
        cron: '0 6-22 * * *',
        name: 'Stretch and get water'
      }
    }
  ]
}

jest.mock('axios', () => {
  return {
    get: () => ({
      data: mockData
    })
  }
})

const mockStore = configureStore([ thunk ])

describe('Actions: Events', () => {
  it('fetchEvents dispatches and parses and formats event data', async () => {
    
    const store = mockStore({})
    const expected = [
      { type: 'FETCH_EVENTS' },
      {
        type: 'FETCHED_EVENTS',
        events: mockEvents
      }
    ]

    await store.dispatch(fetchEvents())
    assert.deepEqual(expected, store.getActions())
  })
})
