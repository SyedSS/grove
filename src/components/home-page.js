// @flow 
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import Notification from 'react-web-notification'

import { fetchEvents } from '../actions'
import { getUpcomingEventCount } from '../reducers'
import Events from './events'

import { type Event } from '../types'

type HomeProps = {
  events: Array<Event>,
  fetchEvents: typeof fetchEvents,
  upcomingCount: number
}

class HomePage extends Component<HomeProps> {
  render () {
    const {
      events,
      fetchEvents,
      upcomingCount
    } = this.props

    return (
      <div className='home-page'>
        <h1>Grove Scheduler</h1>
        {events.length === 0
          ? <Button bsStyle='info' onClick={fetchEvents}>
            Get My Events
          </Button>
          : <Events events={events} />
        }
        <Notification
          ignore={upcomingCount === 0}
          timeout={5000}
          title={`You have ${upcomingCount} upcoming events!`}
        />
      </div>
    )
  }
}

export const Unconnected = HomePage

export default connect(
  (state) => ({
    events: state.events,
    upcomingCount: getUpcomingEventCount(state)
  }),
  {
    fetchEvents
  }
)(HomePage)
