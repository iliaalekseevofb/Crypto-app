import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Coin from './components/Coin';
import './App.css';

const App = () => {

  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    Axios.get('https://api.coinstats.app/public/v1/coins?skip=0&currency=EUR').then(
      (response) => {
        console.log(response.data);
        setListOfCoins(response.data.coins);
      })
  }, [])

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord);
  })

  return (
    <div className='App'>
      <div className='cryptoHeader'>
        <input id = 'inputValue' type='text' placeholder='Bitcoin...' onChange={() =>
          {setSearchWord(document.getElementById('inputValue').value)}}
        />
      </div>
      <div className='ctyptoDisplay'>{
        filteredCoins.map((coin)=>{
          return <Coin name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol} />
        })
      }</div>
    </div>
  )
}

export default App