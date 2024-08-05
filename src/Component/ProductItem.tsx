import { Iproduct } from "../interface/Iproduct";

type props = {
  product:Iproduct
}
export const ProductItem = ({ product }:props) => (
    <div className="single-product position-relative mb-30">
      <div className="product-image">
        <a className="d-block" href="product-details.html">
          <img src={product.image_url} alt='' className="product-image-1 w-100" />
        </a>
      </div>
      {/* {isSoldOut && <div className="label-product">
        <span className="label-sale position-absolute text-uppercase text-white text-center d-block">Soldout</span>
      </div>} */}
      <div className="product-content">
        <div className="product-rating">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star-o" />
          <i className="fa fa-star-o" />
        </div>
        <div className="product-title">
          <h4 className="title-2"> <a href="product-details.html">{product.title}</a></h4>
        </div>
        <div className="price-box">
        <span className="regular-price ">{product.price.$numberDecimal}</span>
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
    </div>
  );
  