import React from 'react'
import './Coin.css'

const Coin = ({name,icon,rank,symbol,price}) => {
  return (

    
      <div className='coin'>
      <h2>Name:{name}</h2>
        <h3>Rank:{rank}</h3>
        <img src={icon} alt="" />
        <h3>Symbol:{symbol}</h3>
        <h3>Price:{price} USD </h3>
      </div>
       

    
  )
}

export default Coin