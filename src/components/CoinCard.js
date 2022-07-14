import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CoinCard = ({name, icon, price, symbol}) => {
  return (
    <Card sx={{
      minWidth: "250px",
      backgroundColor: '#fafafa',
      boxShadow: '0px 10px 21px 0px rgba(0, 0, 0, 0.21)'
    }}>
      <CardContent>
        <Typography>Name: {name}</Typography>
        <img className='icon' src={icon} alt='icon' />
        <Typography>Price: {price}</Typography>
        <Typography>Symbol: {symbol}</Typography>
      </CardContent>
    </Card>
  )
}

export default CoinCard