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

function ProductCard({product}) {
  return (
    <Card className='card-root'>
      <CardMedia className='card-media' image={product.image}  title={product.name}  />
      <CardContent>
        <div className='card-content' >
          <Typography variant="h5" gutterBottom >
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className='card-actions' >
        <Button aria-label='Add to cart'>
          {/* <Cart /> */}
        </Button>
      </CardActions>
      
    </Card>
  );
}


export default ProductCard