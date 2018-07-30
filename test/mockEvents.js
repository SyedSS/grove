

export const mockEvents = [
  {
    id: 0,
    type: 'task',
    attributes: {
      cron: '0 7 14 3 *',
      name: 'Repot Sunny the Succulent'
    },
    upcoming: '3/14/2019 - 7:00 AM',
    recent: '3/14/2018 - 7:00 AM',
    isIn24Hours: false,
    hasHappened3Hours: false
  },
  {
    id: 1,
    type: 'task',
    attributes: {
      cron: '0 18 20 * *',
      name: 'Pick up Grove order from mailroom'
    },
    upcoming: '4/20/2018 - 6:00 PM',
    recent: '3/20/2018 - 6:00 PM',
    isIn24Hours: false,
    hasHappened3Hours: false
  },
  {
    id: 2,
    type: 'task',
    attributes: {
      cron: '30 7 * * 1',
      name: 'Water Sunny the Succulent'
    },
    upcoming: '4/16/2018 - 7:30 AM',
    recent: '4/9/2018 - 7:30 AM',
    isIn24Hours: false,
    hasHappened3Hours: false
  },
  {
    id: 3,
    type: 'task',
    attributes: {
      cron: '0 12 * * 3',
      name: 'Lunch with Mrs. Meyers'
    },
    upcoming: '4/18/2018 - 12:00 PM',
    recent: '4/11/2018 - 12:00 PM',
    isIn24Hours: false,
    hasHappened3Hours: false
  },
  {
    id: 4,
    type: 'task',
    attributes: {
      cron: '0 14 * *',
      name: 'Farmers Market'
    },
    upcoming: '4/14/2018 - 12:00 AM',
    recent: '3/14/2018 - 12:59 AM',
    isIn24Hours: false,
    hasHappened3Hours: false
  },
  {
    id: 5,
    type: 'task',
    attributes: {
      cron: '15 7 * * 1-5',
      name: 'Make coffee'
    },
    upcoming: '4/13/2018 - 7:15 AM',
    recent: '4/12/2018 - 7:15 AM',
    isIn24Hours: true,
    hasHappened3Hours: false
  },
  {
    id: 6,
    type: 'task',
    attributes: {
      cron: '0 6-22 * * *',
      name: 'Stretch and get water'
    },
    upcoming: '4/12/2018 - 5:00 PM',
    recent: '4/12/2018 - 4:00 PM',
    isIn24Hours: true,
    hasHappened3Hours: true
  }
]
