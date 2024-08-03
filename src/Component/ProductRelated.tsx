import React from 'react'
import { Product } from './Product';

export default function ProductRelated() {
    
const products = [
    {
        id: 1,
        img1: "assets/images/product/2.jpg",
        img2: "assets/images/product/1.jpg",
        title: "Product dummy name",
        price: "$80.00",
        oldPrice: "$90.00",
        soldOut: false
    },
    {
        id: 2,
        img1: "assets/images/product/5.jpg",
        img2: "assets/images/product/7.jpg",
        title: "Product dummy title",
        price: "$80.00",
        oldPrice: "$90.00",
        soldOut: false
    },
    {
        id: 3,
        img1: "assets/images/product/5.jpg",
        img2: "assets/images/product/6.jpg",
        title: "Product dummy title",
        price: "$80.00",
        oldPrice: "$90.00",
        soldOut: true
    },
    {
        id: 4,
        img1: "assets/images/product/7.jpg",
        img2: "assets/images/product/8.jpg",
        title: "Product dummy name",
        price: "$80.00",
        oldPrice: "$90.00",
        soldOut: false
    },
   
];
return (
    <div className="product-area py-8">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-uppercase">Best Sale</h2>
          <p className="text-gray-700 mt-2">All best seller products are now available for you. You can buy these products from here anytime, anywhere. So shop now!</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
