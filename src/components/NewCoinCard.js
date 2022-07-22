import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import { CssVarsProvider } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';

export default function NewCoinCard({name, icon, price, symbol, priceChange1w}) {
  return (
    <CssVarsProvider>
      <Card
        variant="outlined"
        row
        sx={{
          minWidth: '320px',
          gap: 2,
          '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
        }}
      >
        <AspectRatio ratio="1" sx={{ width: 90 }}>
          <img
            src={icon}
            alt=""
          />
        </AspectRatio>
        <Box>
          <Box sx={{ ml: 0.5 }}>
            <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
              {name}
            </Typography>
            <Typography fontSize="md" aria-describedby="card-description" mb={1}>
              <Link
                overlay
                underline="none"
                href="#interactive-card"
                sx={{ color: 'text.tertiary' }}
              >
                Price: {price} $
              </Link>
            </Typography>
            <Chip
              variant="outlined"
              color="primary"
              size="sm"
              sx={{ pointerEvents: 'none' }}
            >
              Price change (1 week): {priceChange1w}%
            </Chip>
          </Box>
        </Box>
      </Card>
    </CssVarsProvider>
  );
}
