import { ProductItem } from "./ProductItem";

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
  
  
    // Thêm các sản phẩm khác theo định dạng trên
  ];
  
export default function ListFeaturedProducts() {
  return (
    <>
       <div className="product-area">
    <div className="container container-default custom-area">
      <div className="row">
        <div className="col-lg-5 m-auto text-center col-custom">
          <div className="section-content">
            <h2 className="title-1 text-uppercase">Featured Products</h2>
            <div className="desc-content">
              <p>All best seller product are now available for you and your can buy this product from here any time any where so sop now</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductItem key={product._id} product={product} />
            ))}
          </div>
      </div>
    </div>
  </div>
    </>
  )
}
