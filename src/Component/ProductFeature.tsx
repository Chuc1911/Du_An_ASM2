export const ProductItem = ({ images, isSoldOut, name, regularPrice, oldPrice }) => (
    <div className="single-product position-relative mb-30">
      <div className="product-image">
        <a className="d-block" href="product-details.html">
          <img src={images[0]} alt='' className="product-image-1 w-100" />
          <img src={images[1]} alt='' className="product-image-2 position-absolute w-100" />
        </a>
      </div>
      {isSoldOut && <div className="label-product">
        <span className="label-sale position-absolute text-uppercase text-white text-center d-block">Soldout</span>
      </div>}
      <div className="product-content">
        <div className="product-rating">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star-o" />
          <i className="fa fa-star-o" />
        </div>
        <div className="product-title">
          <h4 className="title-2"> <a href="product-details.html">{name}</a></h4>
        </div>
        <div className="price-box">
          <span className="regular-price ">{regularPrice}</span>
          <span className="old-price"><del>{oldPrice}</del></span>
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
  