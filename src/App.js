import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Navbar from './components/Navbar';
import CoinCard from './components/CoinCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/system';
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

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1450,
      },
    },
  });

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
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
                  <CoinCard 
                    key={index}
                    name={coin.name}
                    icon={coin.icon}
                    price={coin.price}
                    priceChange1w={coin.priceChange1w}
                  />
              )})}
            </Box>
          : <Grid container rowSpacing={5} columnSpacing={{ xs: 3, sm: 4, md: 5 }}>
              {filteredCoins.map((coin, index)=>{
                return (
                  <Grid item xs={12} md={6} lg={4} xl={3}>
                    <CoinCard 
                      key={index} 
                      name={coin.name} 
                      icon={coin.icon} 
                      price={coin.price} 
                      priceChange1w={coin.priceChange1w}
                    />
                  </Grid>)
              })}
            </Grid>
          }
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default App