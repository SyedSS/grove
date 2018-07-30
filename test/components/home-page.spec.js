// @flow 
import assert from 'assert'
import { shallow } from 'enzyme'
import React from 'react'
import { Button } from 'react-bootstrap'
import sinon from 'sinon'

import { Unconnected as HomePage } from '../../src/components/home-page'
import Events from '../../src/components/events'
import { mockEvents } from '../mockEvents'

describe('HomePage', () => {
  const defaultActions = {
    fetchEvents: (() => {}: any)
  }

  const render = (props) => {
    const withDefaults = {
      events: [],
      upcomingCount: 0,
      ...defaultActions,
      ...props
    }

    return shallow(<HomePage {...withDefaults} />)
  }

  it('renders w/ defaults', () => {
    const wrapper = render()

    assert(wrapper.find('.home-page').exists())
    assert(wrapper.find(Button).exists())
    assert(!wrapper.find(Events).exists())
  })

  it('renders w/ GmailPage if signed in', () => {
    const wrapper = render({
      events: mockEvents
    })

    assert(!wrapper.find(Button).exists())
    assert(wrapper.find(Events).exists())
  })

  it('calls fetchEvents on click of button', () => {
    const fetchEvents = sinon.spy()
    const wrapper = render({ fetchEvents })
    const button = wrapper.find(Button)

    assert(button.exists())
    button.simulate('click')
    assert(fetchEvents.calledOnce)
  })
})
