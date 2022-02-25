import React from 'react'
import Header from '../components/Header/Header'
import Tours from '../components/Tours/Tours'

const ToursPage = ({tours}) => {
  return (
    <div>
        <Header/>
        <Tours tours={tours}/>
        
    </div>
  )
}

export default ToursPage