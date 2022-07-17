import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const CoinCard = ({name, icon, price, symbol, marketCap, priceChange1w}) => {
  return (
    <Card sx={{
      minWidth: "250px",
      backgroundColor: '#fafafa',
      boxShadow: '0px 10px 21px 0px rgba(0, 0, 0, 0.21)',
      borderRadius: '10px'
    }}>
      <CardContent>
        <Box>
          <img className='icon' src={icon} alt='icon' />
          <Typography>Name: {name}</Typography>
          <Typography>Symbol: {symbol}</Typography>
        </Box>
        <Box>
          <Typography>Price: {price}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CoinCard