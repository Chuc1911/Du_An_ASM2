import React from 'react'
import ListBestSale from '../Component/ListBestSaleProducts'
import ListFeaturedProducts from '../Component/ListFeaturedProducts'


const Body = () => {
    return (
        <div>
  {/* Feature Area Start Here */}
  <div className="feature-area">
    <div className="container container-default custom-wrapper">
      <div className="row">
        <div className="col-xl-6 col-lg-5 col-md-12 col-custom">
          <div className="feature-content-wrapper">
            <h2 className="title">Important to eat fruit</h2>
            <p className="desc-content">Eating fruit provides health benefits — people who eat more fruits and vegetables as part of an overall healthy diet are likely to have a reduced risk of some chronic diseases. Fruits provide nutrients vital for health and maintenance of your body.</p>
            <p className="desc-content"> Fruits are sources of many essential nutrients that are underconsumed, including potassium, dietary fiber, vitamin C, and folate (folic acid).</p>
            <p className="desc-content"> Most fruits are naturally low in fat, sodium, and calories. None have cholesterol.</p>
          </div>
        </div>
        <div className="col-xl-6 col-lg-7 col-md-12 col-custom">
          <div className="feature-image">
            <img src="assets/images/feature/feature-1.jpg" alt="Obrien Feature" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Feature Area End Here */}s
   <ListBestSale/>
  {/* Product Area End Here */}
  {/* Banner Fullwidth Area Start Here */}
  <div className="banner-fullwidth-area">
    <div className="container custom-wrapper">
      <div className="row">
        <div className="col-md-5 col-lg-6 text-center col-custom">
          <div className="banner-thumb h-100 d-flex justify-content-center align-items-center">
            <img src="assets/images/banner/thumb/1.png" alt="Banner Thumb" />
          </div>
        </div>
        <div className="col-md-7 col-lg-6 text-center justify-content-center col-custom">
          <div className="banner-flash-content d-flex flex-column align-items-center justify-content-center h-100">
            <h2 className="deal-head text-uppercase">Flash Deals</h2>
            <h3 className="deal-title text-uppercase">Hurry up and Get 25% Discount</h3>
            <a href="shop.html" className="obrien-button primary-btn">Shop Now</a>
            <div className="countdown-wrapper d-flex justify-content-center" data-countdown="2022/12/24" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Banner Fullwidth Area End Here */}
  {/* Banner Area Start Here */}
  <div className="banner-area">
    <div className="container container-default custom-area">
      <div className="row">
        <div className="col-md-4 col-sm-12 col-custom">
          <div className="banner-image hover-style">
            <a className="d-block" href="shop.html">
              <img className="w-100" src="assets/images/banner/small-banner/1-1.png" alt="Banner Image" />
            </a>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 col-custom">
          <div className="banner-image hover-style">
            <a className="d-block" href="shop.html">
              <img className="w-100" src="assets/images/banner/small-banner/1-2.png" alt="Banner Image" />
            </a>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 col-custom">
          <div className="banner-image hover-style mb-0">
            <a className="d-block" href="shop.html">
              <img className="w-100" src="assets/images/banner/small-banner/1-3.png" alt="Banner Image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Banner Area End Here */}
   <ListFeaturedProducts/>
  {/* Product Area Start Here */}
  {/* Product Area End Here */}
  {/* Newslatter Area Start Here */}
  <div className="newsletter-area">
    <div className="container container-default h-100 custom-area">
      <div className="row h-100">
        <div className="col-lg-8 col-xl-5 offset-xl-6 offset-lg-3 col-custom">
          <div className="newsletter-content text-center d-flex flex-column align-items-center justify-content-center h-100">
            <div className="section-content">
              <h4 className="title-4 text-uppercase">Special <span>Offer</span> for subscription</h4>
              <h2 className="title-3 text-uppercase">Get instant discount for membership</h2>
              <p className="desc-content">Subscribe our newsletter and all latest news of our <br />latest product, promotion and offers</p>
            </div>
            <div className="newsletter-form-wrap ml-auto mr-auto">
              <form id="mc-form" className="mc-form d-flex position-relative">
                <input type="email" id="mc-email" className="form-control email-box" placeholder="email@example.com" name="EMAIL" />
                <button id="mc-submit" className="btn primary-btn obrien-button newsletter-btn position-absolute" type="submit">Subscribe</button>
              </form>
              {/* mailchimp-alerts Start */}
              <div className="mailchimp-alerts text-centre">
                <div className="mailchimp-submitting" />{/* mailchimp-submitting end */}
                <div className="mailchimp-success text-success" />{/* mailchimp-success end */}
                <div className="mailchimp-error text-danger" />{/* mailchimp-error end */}
              </div>
              {/* mailchimp-alerts end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Newslatter Area End Here */}
  {/* Latest Blog Area Start Here */}
  <div className="latest-blog-area">
    <div className="container container-default custom-area">
      <div className="row">
        <div className="col-lg-5 m-auto text-center col-custom">
          <div className="section-content">
            <h2 className="title-1 text-uppercase">Latest Blog</h2>
            <div className="desc-content">
              <p>If you want to know about the organic product then keep an eye on our blog.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-custom">
          <div className="obrien-slider" data-slick-options="{
                  &quot;slidesToShow&quot;: 3,
                  &quot;slidesToScroll&quot;: 1,
                  &quot;infinite&quot;: true,
                  &quot;arrows&quot;: false,
                  &quot;dots&quot;: false
                  }" data-slick-responsive="[
                  {&quot;breakpoint&quot;: 1200, &quot;settings&quot;: {
                  &quot;slidesToShow&quot;: 2
                  }},
                  {&quot;breakpoint&quot;: 992, &quot;settings&quot;: {
                  &quot;slidesToShow&quot;: 2
                  }},
                  {&quot;breakpoint&quot;: 768, &quot;settings&quot;: {
                  &quot;slidesToShow&quot;: 1
                  }},
                  {&quot;breakpoint&quot;: 576, &quot;settings&quot;: {
                  &quot;slidesToShow&quot;: 1
                  }}
                  ]">
            <div className="single-blog">
              <div className="single-blog-thumb">
                <a href="blog.html">
                  <img src="assets/images/blog/medium-size/1.jpg" alt="Blog Image" />
                </a>
              </div>
              <div className="single-blog-content position-relative">
                <div className="post-date text-center border rounded d-flex flex-column position-absolute">
                  <span>14</span>
                  <span>01</span>
                </div>
                <div className="post-meta">
                  <span className="author">Author: Obrien Demo Admin</span>
                </div>
                <h2 className="post-title">
                  <a href="blog.html">There Are Many Variation of Passages of Lorem Ipsum Available</a>
                </h2>
                <p className="desc-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making...</p>
              </div>
            </div>
            <div className="single-blog">
              <div className="single-blog-thumb">
                <a href="blog.html">
                  <img src="assets/images/blog/medium-size/2.jpg" alt="Blog Image" />
                </a>
              </div>
              <div className="single-blog-content position-relative">
                <div className="post-date text-center border rounded d-flex flex-column position-absolute">
                  <span>14</span>
                  <span>01</span>
                </div>
                <div className="post-meta">
                  <span className="author">Author: Obrien Demo Admin</span>
                </div>
                <h2 className="post-title">
                  <a href="blog.html">There Are Many Variation of Passages of Lorem Ipsum Available</a>
                </h2>
                <p className="desc-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making...</p>
              </div>
            </div>
            <div className="single-blog">
              <div className="single-blog-thumb">
                <a href="blog.html">
                  <img src="assets/images/blog/medium-size/3.jpg" alt="Blog Image" />
                </a>
              </div>
              <div className="single-blog-content position-relative">
                <div className="post-date text-center border rounded d-flex flex-column position-absolute">
                  <span>14</span>
                  <span>01</span>
                </div>
                <div className="post-meta">
                  <span className="author">Author: Obrien Demo Admin</span>
                </div>
                <h2 className="post-title">
                  <a href="blog.html">The Standard Chunk Of Lorem Ipsum Used Since</a>
                </h2>
                <p className="desc-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making...</p>
              </div>
            </div>
            <div className="single-blog">
              <div className="single-blog-thumb">
                <a href="blog.html">
                  <img src="assets/images/blog/medium-size/4.jpg" alt="Blog Image" />
                </a>
              </div>
              <div className="single-blog-content position-relative">
                <div className="post-date text-center border rounded d-flex flex-column position-absolute">
                  <span>14</span>
                  <span>01</span>
                </div>
                <div className="post-meta">
                  <span className="author">Author: Obrien Demo Admin</span>
                </div>
                <h2 className="post-title">
                  <a href="blog.html">There Are Many Variation of Passages of Lorem Ipsum Available</a>
                </h2>
                <p className="desc-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Latest Blog Area End Here */}
  {/* Support Area Start Here */}
  <div className="support-area">
    <div className="container container-default custom-area">
      <div className="row">
        <div className="col-lg-12 col-custom">
          <div className="support-wrapper d-flex">
            <div className="support-content">
              <h1 className="title">Need Help ?</h1>
              <p className="desc-content">Call our support 24/7 at 01234-567-890</p>
            </div>
            <div className="support-button d-flex align-items-center">
              <a className="obrien-button primary-btn" href="contact-us.html">Contact now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Support Area End Here */}</div>

    
    )
}

export default Body
