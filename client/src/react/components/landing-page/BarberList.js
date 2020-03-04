import React from 'react'

import BarberCard from './BarberCard'

import data from '../../../db-dev/data.json'

class BarberList extends React.Component {
  state = { barbers: [], length: 0 }

  componentDidMount () {
    let barberData = data

    this.setState({
      barbers: barberData.barbers,
      length: barberData.barbers.length
    })
  }

  render () {
    return (
      <div className='Barbers-Container'>
        <div className='Barbers'>
          {this.state.barbers.map((barber, i) => {
            let length = this.state.length
            if (length % 2 !== 0) {
              if (i < length - 1) {
                return i % 2 ? this.renderBarbers(i, false) : ''
              } else {
                return this.renderBarbers(i, true)
              }
            } else {
              return i % 2 ? this.renderBarbers(i, false) : ''
            }
          })}
        </div>
      </div>
    )
  }

  renderBarbers (index, lastItem) {
    let barberSub = [this.state.barbers[index - 1], this.state.barbers[index]]

    if (lastItem) {
      let barber = barberSub[1]
      return (
        <div className='row'>
          <BarberCard key={barber.id} barber={barber} />
        </div>
      )
    } else {
      return (
        <div className='row'>
          {barberSub.map(barber => {
            return <BarberCard key={barber.id} barber={barber} />
          })}
        </div>
      )
    }
  }
}

export default BarberList