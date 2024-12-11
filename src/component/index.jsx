import React from 'react'
import thiruvalluvar from '../assets/Thiruvalluvar.png'

function Index() {
  return (
    <div className='index'>
        <div className='index-img'>
            <img src={thiruvalluvar} alt="thiruvalluvar" />
        </div>
        <h1>THIRUKKURAL</h1>
        <a href={'kural'}>read</a>
    </div>
  )
}

export default Index