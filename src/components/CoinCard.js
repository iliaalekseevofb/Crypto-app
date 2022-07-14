import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CoinCard = ({name, icon, price, symbol}) => {
  return (
    <div className='coin'>
        <h1>Name: {name}</h1>
        <img src={icon} alt='icon' />
        <h3>Price: {price}</h3>
        <h3>Symbol: {symbol}</h3>
    </div>
  )
}

export default CoinCard