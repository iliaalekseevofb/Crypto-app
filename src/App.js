import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './App.css';

const App = () => {

  useEffect(() => {
    Axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=10&currency=EUR').then(
      (response) => {
        console.log(response.data)
      })
  }, [])

  return (
    <div className='App'>
      <div className='cryptoHeader'></div>
      <div className='ctyptoDisplay'></div>
    </div>
  )
}

export default App