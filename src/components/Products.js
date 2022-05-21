import React from 'react'
import Grid from "@mui/material/Grid"
import { useState } from 'react'
import ProductCard from './ProductCard'

function Products() {
    const [products, setProducts] = useState([
        {
            id: 1, 
            name: "Garlic",
            price: "$3.00",
            description: "This is Garlic."
        },
        {
            id: 2, 
            name: "Onion",
            price: "$3.50",
            description: "This is Onion"
        },
        {
            id: 3, 
            name: "Asparagus",
            price: "$2.50",
            description: "This is Asparagus."
        },
        {
            id: 4, 
            name: "BitterMelon",
            price: "$4.00",
            description: "This is BitterMelon."
        },
        {
            id: 5, 
            name: "Okra",
            price: "$5.00",
            description: "This is Okra."
        },
    ])

  return (
    // <div>
    //     {products.map((product) => (
    //         <h3 key={product.id}>{product.name}</h3>
    //     ))}
    // </div>
    <div>
        <Grid container spacing={4} >
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <ProductCard product={product}/>
                </Grid>
            ))}
        </Grid>
    </div>
  )
}

export default Products