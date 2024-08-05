import { Link } from "react-router-dom";
import { Iproduct } from "../interface/Iproduct";

type Props = {
  product: Iproduct;
};

export const ProductItem = ({ product }: Props) => (
  <div className="single-product position-relative mb-30">
    <Link to={`/productDetail/${product._id}`} className="d-block">
      <div className="product-image">
        <img src={product.image_url} alt="" className="product-image-1 w-100" />
      </div>
      <div className="product-content">
        <div className="product-rating">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star-o" />
          <i className="fa fa-star-o" />
        </div>
        <div className="product-title">
          <h4 className="title-2">{product.title}</h4>
        </div>
        <div className="price-box">
          <span className="regular-price">
            { product.price}
          </span>
        </div>
      </div>
      <div className="add-action d-flex position-absolute">
        <a href="cart.html" title="Add To cart">
          <i className="ion-bag" />
        </a>
        <a href="compare.html" title="Compare">
          <i className="ion-ios-loop-strong" />
        </a>
        <a href="wishlist.html" title="Add To Wishlist">
          <i className="ion-ios-heart-outline" />
        </a>
        <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
          <i className="ion-eye" />
        </a>
      </div>
    </Link>
  </div>
);
