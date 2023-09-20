import React from 'react'
import { useEffect,useState } from 'react'
import './Navbar.css'
import './Section.css'
import Coin from './Coin'
import Axios  from 'axios'

const App = () => {
  const [searchCoin,setSearchCoin] = useState('')


  const [coinList,setCoinList] = useState([])

  useEffect(()=>{
      Axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit').then((response)=>{
          setCoinList(response.data.coins)
      })},[])

      const filteredCoinList = coinList.filter((coin) =>
      coin.name.toLowerCase().includes(searchCoin.toLowerCase())
    )



  return (
    <div className='app'>
    <div className='navbar'>
        <h2>Crypto Info.Com</h2>
        <input type="text" placeholder='Search a Coin here...' value={searchCoin} onChange={(e)=>{setSearchCoin(e.target.value)}}  />

    </div>
    <div className='section'>
 {filteredCoinList.map((coin)=>{
    return(
        <Coin name={coin.name} icon={coin.icon} rank={coin.rank} price={coin.price} symbol={coin.symbol}/>
    )
 })}

    

    </div>
    </div>
  )
}

export default App