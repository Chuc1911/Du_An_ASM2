import React, { useEffect, useState } from 'react';
import { ProductItem } from './ProductItem';
import { Iproduct } from '../interface/Iproduct';
import Instance from '../api';


export default function ListShop() {
    const [products, setProducts] = useState<Iproduct[]>([]);

	useEffect(() => {
		(async () => {
			try {
				const { data } = await Instance.get("/products");
				console.log(data);
				setProducts(data);
			} catch (error) {
				console.error("Error fetching products:", error);
			}
		})();
	}, []);
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
