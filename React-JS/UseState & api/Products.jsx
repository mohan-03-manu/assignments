import axios from 'axios'
import React , { useEffect, useState} from 'react'
import Card from '../Components/Card'

function Products() {
  let [products , setProducts] = useState([])
  useEffect(()=>{
     axios.get('https://fakestoreapi.com/products').then((Products)=>{
      setProducts(Products.data);
  })
  },[])
  return (
     <div>
      <div className="flex gap-4 justify-center m-20 flex-wrap">
        {products.length > 0 ? products.map(product=><Card key={product.id} id={product.id} img={product.image} title={product.title} price={product.price} desc={product.description} />) : <div className="">Loading....</div>  }
      </div>
     </div>
  )
}

export default Products
