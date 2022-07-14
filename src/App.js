import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Navbar from './components/Navbar';
import CoinCard from './components/CoinCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './App.css';

const App = () => {

  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    Axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=200&currency=EUR').then(
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
      <Box sx={{
        padding: {xs: 4, md: 5},
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
      >
        {filteredCoins.length < 0
        ? <Box>
            {filteredCoins.map((coin, index)=>{
              return (
                <CoinCard key={index} name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol} />
            )})}
          </Box>
        : <Grid container rowSpacing={5} columnSpacing={{ xs: 3, sm: 4, md: 5 }}>
            {filteredCoins.map((coin, index)=>{
              return (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <CoinCard key={index} name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol} />
                </Grid>)
            })}
          </Grid>
        }
      </Box>
    </div>
  )
}

export default App