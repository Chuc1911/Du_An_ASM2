import { Link } from "react-router-dom";

type Props={
    product:any
}
export  const Product = ({ product }:Props) => (
  <div className="w-full p-4">
    <div className="single-product relative bg-white shadow-md rounded-lg overflow-hidden">
      <div className="product-image relative">
        <a className="block" >
          <Link to={'/productDetail'}>
          <img src={product.img1} alt="" className="w-full" />
          <img src={product.img2} alt="" className="absolute top-0 left-0 w-full opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </Link>
         
        </a>
      </div>
      {product.soldOut && <div className="label-sale absolute top-0 left-0 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-br-lg">Soldout</div>}
      <div className="product-content p-4">
        <div className="product-rating flex items-center mb-2">
          <i className="fa fa-star text-yellow-500" />
          <i className="fa fa-star text-yellow-500" />
          <i className="fa fa-star text-yellow-500" />
          <i className="fa fa-star-o text-yellow-500" />
          <i className="fa fa-star-o text-yellow-500" />
        </div>
        <div className="product-title mb-2">
          <h4 className="title-2 text-lg font-semibold">
            <a href="product-details.html">{product.title}</a>
          </h4>
        </div>
        <div className="price-box">
          <span className="regular-price text-xl font-bold">{product.price}</span>
          <span className="old-price text-gray-500 line-through ml-2">{product.oldPrice}</span>
        </div>
      </div>
      <div className="add-action flex absolute bottom-0 left-0 w-full bg-white bg-opacity-75 justify-center space-x-4 py-2">
        <a href="cart.html" title="Add To Cart">
          <i className="ion-bag text-gray-700 hover:text-black transition-colors duration-300" />
        </a>
        <a href="compare.html" title="Compare">
          <i className="ion-ios-loop-strong text-gray-700 hover:text-black transition-colors duration-300" />
        </a>
        <a href="wishlist.html" title="Add To Wishlist">
          <i className="ion-ios-heart-outline text-gray-700 hover:text-black transition-colors duration-300" />
        </a>
        <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
          <i className="ion-eye text-gray-700 hover:text-black transition-colors duration-300" />
        </a>
      </div>
    </div>
  </div>
);
