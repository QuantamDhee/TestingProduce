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
            description: "This is Garlic.",
            image: "https://i.pinimg.com/564x/ce/00/9d/ce009d3c8868acdec3075f93bd92b2a9.jpg"
        },
        {
            id: 2, 
            name: "Onion",
            price: "$3.50",
            description: "This is Onion",
            image: "https://i.pinimg.com/564x/ce/00/9d/ce009d3c8868acdec3075f93bd92b2a9.jpg"
        },
        {
            id: 3, 
            name: "Asparagus",
            price: "$2.50",
            description: "This is Asparagus.",
            image: "https://i.pinimg.com/564x/ce/00/9d/ce009d3c8868acdec3075f93bd92b2a9.jpg"
        },
        {
            id: 4, 
            name: "BitterMelon",
            price: "$4.00",
            description: "This is BitterMelon.",
            image: "https://i.pinimg.com/564x/ce/00/9d/ce009d3c8868acdec3075f93bd92b2a9.jpg"
        },
        {
            id: 5, 
            name: "Okra",
            price: "$5.00",
            description: "This is Okra.",
            image: "https://i.pinimg.com/564x/ce/00/9d/ce009d3c8868acdec3075f93bd92b2a9.jpg"
        },
    ])

  return (
    // <div>
    //     {products.map((product) => (
    //         <h3 key={product.id}>{product.name}</h3>
    //     ))}
    // </div>
    <div>
        <Grid container justify="center" spacing={4} >
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