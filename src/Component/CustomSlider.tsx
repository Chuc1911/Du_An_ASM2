import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function CustomSlider() {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: true,
    autoplay: true,
    fade: true,
    autoplaySpeed: 7000,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="slider-area">
      <Slider {...settings}>
        <div className="slide-item slide-1 bg-position slide-bg-1 animation-style-01">
          <div className="slider-content">
            <h4 className="slider-small-title">Cold processed organic fruit</h4>
            <h2 className="slider-large-title">Fresh Avocado</h2>
            <div className="slider-btn">
              <a className="obrien-button black-btn" href="shop.html">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="slide-item slide-2 bg-position slide-bg-1 animation-style-01">
          <div className="slider-content">
            <h4 className="slider-small-title">Healthy life with</h4>
            <h2 className="slider-large-title">Natural Organic</h2>
            <div className="slider-btn">
              <a className="obrien-button black-btn" href="shop.html">Shop Now</a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
