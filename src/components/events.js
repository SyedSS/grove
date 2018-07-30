// @flow 
import React from 'react'
import { Table } from 'react-bootstrap'

import { type Event } from '../types'

type Props = {
  events: Array<Event>
}

const renderEvent = (event: Event) => {
  const {
    attributes: {
      name
    },
    hasHappened3Hours,
    id,
    isIn24Hours,
    recent,
    type,
    upcoming
  } = event

  return (
    <tr className='event' key={id}>
      <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
      <td>{name}</td>
      <td className={hasHappened3Hours ? 'recent' : ''}>{recent}</td>
      <td className={isIn24Hours ? 'upcoming' : ''}>{upcoming}</td>
    </tr>
  )
}

const Events = (props: Props) => {
  const { events } = props

  return (
    <div className='events'>
      <div className='event-key'>
        <div>Key:</div>
        <div className='upcoming'>Happening in 24 Hours!</div>
        <div className='recent'>Completed in the last 3 hours</div>
      </div>
      <Table responsive>
        <thead>
          <tr>
            <th>Type</th>
            <th>Description</th>
            <th>Last Completed</th>
            <th>Upcoming</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => renderEvent(event))}
        </tbody>
      </Table>
    </div>
  )
}

export default Events
