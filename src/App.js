import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Navbar from './components/Navbar';
import CoinCard from './components/CoinCard';
import Box from '@mui/material/Box';
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
      <Navbar searchWordFunc={SearchWord => setSearchWord(SearchWord)}/>
      <Box>
        {filteredCoins.map((coin, index)=>{
          return <CoinCard key={index} name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol} />
        })}
      </Box>
    </div>
  )
}

export default App