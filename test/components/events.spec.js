// @flow 
import assert from 'assert'
import { mount } from 'enzyme'
import React from 'react'
import { Table } from 'react-bootstrap'

import Events from '../../src/components/events'
import { mockEvents } from '../mockEvents'

describe('Events', () => {
  const render = (props) => {
    const withDefaults = {
      events: mockEvents,
      ...props
    }

    return mount(<Events {...withDefaults} />)
  }

  it('renders w/ defaults', () => {
    const wrapper = render()
    const upcomingEvents = mockEvents.filter(event => event.isIn24Hours)
    const recentEvents = mockEvents.filter(event => event.hasHappened3Hours)

    assert(wrapper.find('.events').exists())
    assert(wrapper.find(Table).exists())
    assert.equal(wrapper.find('.event').length, mockEvents.length)
    assert.equal(wrapper.find('td.upcoming').length, upcomingEvents.length)
    assert.equal(wrapper.find('td.recent').length, recentEvents.length)
  })
})
