import { Link, useNavigate } from "react-router-dom";
import { Iproduct } from "../interface/Iproduct";
import { CartItem } from "../reducers/cartReducer";

type ProductProps = {
  product: Iproduct;
  // addToCart: (item: CartItem) => void; // Xóa dòng này nếu bạn không sử dụng addToCart nữa
};
export const ProductItem = ({ product }: ProductProps) => {
 const navigato = useNavigate()

  // Hàm thêm sản phẩm vào giỏ hàng trong phiên
  const handleAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert('đã thêm sản phẩm')
    if (window.confirm('bạn có muốn chuyển sang giỏ hàng')) {
      navigato('/cart')
    }
      // Lấy dữ liệu giỏ hàng hiện tại từ sessionStorage
    const cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    const existingItem = cart.find((item: CartItem) => item._id === product._id);
    if (existingItem) {
      // Nếu có, cập nhật số lượng
      existingItem.quantity += 1;
    } else {
      // Nếu không, thêm sản phẩm mới vào giỏ hàng
      cart.push({ ...product, quantity: 1 });
    }
    // Lưu giỏ hàng cập nhật vào sessionStorage
    sessionStorage.setItem('cart', JSON.stringify(cart));
    // Có thể thêm thông báo hoặc xử lý khác nếu cần
    console.log('Product added to cart:', product);
    
  };

  return (
    <div className="single-product position-relative mb-30">
      <Link to={`/productDetail/${product._id}`} className="d-block">
        <div className="product-image">
          <img src={product.image_url} alt="" className="product-image-1 w-100" />
        </div>
      </Link>

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
            {product.price}
          </span>
        </div>
      </div>
      <div className="add-action d-flex position-absolute">
        <a href="" title="Add to cart" onClick={handleAdd}>
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
};
