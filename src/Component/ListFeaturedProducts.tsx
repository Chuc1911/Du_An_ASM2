import { ProductItem } from "./ProductFeature";

const products = [
    {
      images: ["assets/images/product/1.jpg", "assets/images/product/2.jpg"],
      isSoldOut: false,
      name: "Product dummy name",
      regularPrice: "$80.00",
      oldPrice: "$90.00"
    },
    {
      images: ["assets/images/product/7.jpg", "assets/images/product/8.jpg"],
      isSoldOut: false,
      name: "Product dummy name",
      regularPrice: "$80.00",
      oldPrice: "$90.00"
    },
    {
        images: ["assets/images/product/9.jpg", "assets/images/product/10.jpg"],
        isSoldOut: false,
        name: "Product dummy name",
        regularPrice: "$80.00",
        oldPrice: "$90.00"
      },
      {
        images: ["assets/images/product/4.jpg", "assets/images/product/3.jpg"],
        isSoldOut: false,
        name: "Product dummy name",
        regularPrice: "$80.00",
        oldPrice: "$90.00"
      },
      {
        images: ["assets/images/product/6.jpg", "assets/images/product/1.jpg"],
        isSoldOut: false,
        name: "Product dummy name",
        regularPrice: "$80.00",
        oldPrice: "$90.00"
      },
      {
        images: ["assets/images/product/4.jpg", "assets/images/product/3.jpg"],
        isSoldOut: false,
        name: "Product dummy name",
        regularPrice: "$80.00",
        oldPrice: "$90.00"
      },
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
             <ProductItem {...product} />
            ))}
          </div>
      </div>
    </div>
  </div>
    </>
  )
}
