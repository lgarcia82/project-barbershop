import React, {useState, useEffect} from 'react'

import BarberCard from './BarberCard'

import data from '../../../db-dev/data.json'

function BarberList(){
  const [barbers, setBarbers] = useState([])
  const [length, setLength] = useState(0)

  const fetchBarbers = () => {
    const barberData = data.barbers
    setBarbers(barberData)
    setLength(barberData.length)
  }

  useEffect(() =>{
    fetchBarbers()
  }, [])

  const renderBarbers = (index, lastItem) => {
    let barberSub = [barbers[index - 1], barbers[index]]
    console.log(barberSub)
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

  return (
    <div className='Barbers-Container'>
      <div className='Barbers'>
        { barbers.map(( barber ) => {
          if (length % 2 !== 0) {
            if (barber.id < length - 1) {
              return barber.id % 2 ? renderBarbers(barber.id, false) : ''
            } else {
              return renderBarbers(barber.id, true)
            }
          } else {
            return barber.id % 2 ? renderBarbers(barber.id, false) : ''
          }
        })}
      </div>
    </div>
  )
}

export default BarberList