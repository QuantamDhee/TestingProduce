// import React from 'react'

// function ProductCard() {
//   return (
//     <div>ProductCard</div>
//   )
// }

// export default ProductCard
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ClassNames } from '@emotion/react';
import Cart from './Cart'

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

function ProductCard({product}) {
  return (
    <Card className='card-root'>
      <CardMedia className='card-media' image='' title={product.name}  />
      <CardContent>
        <div className='card-content' >
          <Typography variant="h5" gutterBottom >
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price}
          </Typography>
        </div>
        <Typography variant="h8" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className='card-actions' >
        <Button aria-label='Add to cart'>
          {/* <Cart /> */}
        </Button>
      </CardActions>
      {/* <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}


export default ProductCard