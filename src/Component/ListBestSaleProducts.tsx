import React from 'react';
import { ProductItem } from './ProductItem';

const products = [
  
    {
      _id: '1',
      title: "Product dummy name",
      price: 80.00,
      Category_id: "some-category-id",
      description: "Description for product 1",
      image_url: "assets/images/product/1.jpg"
    },
    {
      _id: '2',
      title: "Product dummy title",
      price: 80.00,
      Category_id: "some-category-id",
      description: "Description for product 2",
      image_url: "assets/images/product/3.jpg"
    },
    {
      _id: '3',
      title: "Product dummy title",
      price: 80.00,
      Category_id: "some-category-id",
      description: "Description for product 3",
      image_url: "assets/images/product/5.jpg"
    },
    {
      _id: '4',
      title: "Product dummy name",
      price: 80.00,
      Category_id: "some-category-id",
      description: "Description for product 4",
      image_url: "assets/images/product/7.jpg"
    },
    {
      _id: '5',
      title: "Product dummy title",
      price: 80.00,
      Category_id: "some-category-id",
      description: "Description for product 5",
      image_url: "assets/images/product/9.jpg"
    }
  
];
export default function ListBestSale() {
    return (
      <div className="product-area py-8">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-uppercase">Best Sale</h2>
            <p className="text-gray-700 mt-2">All best seller products are now available for you. You can buy these products from here anytime, anywhere. So shop now!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductItem key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    );
  }