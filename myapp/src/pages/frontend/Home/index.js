import Slider from "./Slider";

function Home() {
    return ( 
<>
<Slider/>
  <div className="page-wrapper">
    <main className="main">
      {/* End .intro-slider-container */}
      <div
        className="brands-border owl-carousel owl-simple"
        data-toggle="owl"
        data-owl-options='{
              "nav": false, 
              "dots": false,
              "margin": 0,
              "loop": false,
              "responsive": {
                  "0": {
                      "items":2
                  },
                  "420": {
                      "items":3
                  },
                  "600": {
                      "items":4
                  },
                  "900": {
                      "items":5
                  },
                  "1024": {
                      "items":6
                  },
                  "1360": {
                      "items":7
                  }
              }
          }'
      >
        <a href="#" className="brand">
          <img src="assets/images/brands/1.png" alt="Brand Name" />
        </a>
        <a href="#" className="brand">
          <img src="assets/images/brands/2.png" alt="Brand Name" />
        </a>
        <a href="#" className="brand">
          <img src="assets/images/brands/3.png" alt="Brand Name" />
        </a>
        <a href="#" className="brand">
          <img src="assets/images/brands/4.png" alt="Brand Name" />
        </a>
        <a href="#" className="brand">
          <img src="assets/images/brands/5.png" alt="Brand Name" />
        </a>
        <a href="#" className="brand">
          <img src="assets/images/brands/6.png" alt="Brand Name" />
        </a>
        <a href="#" className="brand">
          <img src="assets/images/brands/7.png" alt="Brand Name" />
        </a>
      </div>
      {/* End .owl-carousel */}
      <div className="mb-3 mb-lg-5" />
      {/* End .mb-3 mb-lg-5 */}
      <div className="banner-group">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-5">
              <div className="banner banner-large banner-overlay banner-overlay-light">
                <a href="#">
                  <img
                    src="assets/images/demos/demo-2/banners/banner-1.jpg"
                    alt="Banner"
                  />
                </a>
                <div className="banner-content banner-content-top">
                  <h4 className="banner-subtitle">Clearence</h4>
                  {/* End .banner-subtitle */}
                  <h3 className="banner-title">Coffee Tables</h3>
                  {/* End .banner-title */}
                  <div className="banner-text">from $19.99</div>
                  {/* End .banner-text */}
                  <a href="#" className="btn btn-outline-gray banner-link">
                    Shop Now
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>
                {/* End .banner-content */}
              </div>
              {/* End .banner */}
            </div>
            {/* End .col-lg-5 */}
            <div className="col-md-6 col-lg-3">
              <div className="banner banner-overlay">
                <a href="#">
                  <img
                    src="assets/images/demos/demo-2/banners/banner-2.jpg"
                    alt="Banner"
                  />
                </a>
                <div className="banner-content banner-content-bottom">
                  <h4 className="banner-subtitle text-grey">On Sale</h4>
                  {/* End .banner-subtitle */}
                  <h3 className="banner-title text-white">
                    Amazing <br />
                    Armchairs
                  </h3>
                  {/* End .banner-title */}
                  <div className="banner-text text-white">from $39.99</div>
                  {/* End .banner-text */}
                  <a href="#" className="btn btn-outline-white banner-link">
                    Discover Now
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>
                {/* End .banner-content */}
              </div>
              {/* End .banner */}
            </div>
            {/* End .col-lg-3 */}
            <div className="col-md-6 col-lg-4">
              <div className="banner banner-overlay">
                <a href="#">
                  <img
                    src="assets/images/demos/demo-2/banners/banner-3.jpg"
                    alt="Banner"
                  />
                </a>
                <div className="banner-content banner-content-top">
                  <h4 className="banner-subtitle text-grey">New Arrivals</h4>
                  {/* End .banner-subtitle */}
                  <h3 className="banner-title text-white">
                    Storage <br />
                    Boxes &amp; Baskets
                  </h3>
                  {/* End .banner-title */}
                  <a href="#" className="btn btn-outline-white banner-link">
                    Discover Now
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>
                {/* End .banner-content */}
              </div>
              {/* End .banner */}
              <div className="banner banner-overlay banner-overlay-light">
                <a href="#">
                  <img
                    src="assets/images/demos/demo-2/banners/banner-4.jpg"
                    alt="Banner"
                  />
                </a>
                <div className="banner-content banner-content-top">
                  <h4 className="banner-subtitle">On Sale</h4>
                  {/* End .banner-subtitle */}
                  <h3 className="banner-title">Lamps Offer</h3>
                  {/* End .banner-title */}
                  <div className="banner-text">up to 30% off</div>
                  {/* End .banner-text */}
                  <a href="#" className="btn btn-outline-gray banner-link">
                    Shop Now
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>
                {/* End .banner-content */}
              </div>
              {/* End .banner */}
            </div>
            {/* End .col-lg-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </div>
      {/* End .banner-group */}
      <div className="mb-3" />
      {/* End .mb-6 */}
      <div className="container">
        <ul
          className="nav nav-pills nav-border-anim nav-big justify-content-center mb-3"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              id="products-featured-link"
              data-toggle="tab"
              href="#products-featured-tab"
              role="tab"
              aria-controls="products-featured-tab"
              aria-selected="true"
            >
              Featured
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="products-sale-link"
              data-toggle="tab"
              href="#products-sale-tab"
              role="tab"
              aria-controls="products-sale-tab"
              aria-selected="false"
            >
              On Sale
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="products-top-link"
              data-toggle="tab"
              href="#products-top-tab"
              role="tab"
              aria-controls="products-top-tab"
              aria-selected="false"
            >
              Top Rated
            </a>
          </li>
        </ul>
      </div>
      {/* End .container */}
      <div className="container-fluid">
        <div className="tab-content tab-content-carousel">
          <div
            className="tab-pane p-0 fade show active"
            id="products-featured-tab"
            role="tabpanel"
            aria-labelledby="products-featured-link"
          >
            <div
              className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                          "nav": false, 
                          "dots": true,
                          "margin": 20,
                          "loop": false,
                          "responsive": {
                              "0": {
                                  "items":2
                              },
                              "480": {
                                  "items":2
                              },
                              "768": {
                                  "items":3
                              },
                              "992": {
                                  "items":4
                              },
                              "1200": {
                                  "items":5
                              },
                              "1600": {
                                  "items":6,
                                  "nav": true
                              }
                          }
                      }'
            >
              <div className="product product-11 text-center">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-2/products/product-1-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-2/products/product-1-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist">
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  {/* End .product-action-vertical */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product.html">Butler Stool Ladder</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$251,00</div>
                  {/* End .product-price */}
                </div>
                {/* End .product-body */}
                <div className="product-action">
                  <a href="#" className="btn-product btn-cart">
                    <span>add to cart</span>
                  </a>
                </div>
                {/* End .product-action */}
              </div>
              {/* End .product */}
              <div className="product product-11 text-center">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-2/products/product-2-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-2/products/product-2-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist">
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  {/* End .product-action-vertical */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product.html">Octo 4240</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$746,00</div>
                  {/* End .product-price */}
                  <div className="product-nav product-nav-dots">
                    <a
                      href="#"
                      className="active"
                      style={{ background: "#1f1e18" }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#e8e8e8" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
                <div className="product-action">
                  <a href="#" className="btn-product btn-cart">
                    <span>add to cart</span>
                  </a>
                </div>
                {/* End .product-action */}
              </div>
              {/* End .product */}
              <div className="product product-11 text-center">
                <figure className="product-media">
                  <span className="product-label label-circle label-new">
                    New
                  </span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-2/products/product-3-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-2/products/product-3-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist">
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  {/* End .product-action-vertical */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product.html">Flow Slim Armchair</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$970,00</div>
                  {/* End .product-price */}
                </div>
                {/* End .product-body */}
                <div className="product-action">
                  <a href="#" className="btn-product btn-cart">
                    <span>add to cart</span>
                  </a>
                </div>
                {/* End .product-action */}
              </div>
              {/* End .product */}
              <div className="product product-11 text-center">
                <figure className="product-media">
                  <span className="product-label label-circle label-sale">
                    Sale
                  </span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-2/products/product-4-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-2/products/product-4-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist">
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  {/* End .product-action-vertical */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product.html">Roots Sofa Bed</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">
                    <span className="new-price">$337,00</span>
                    <span className="old-price">Was $449,00</span>
                  </div>
                  {/* End .product-price */}
                  <div className="product-nav product-nav-dots">
                    <a
                      href="#"
                      className="active"
                      style={{ background: "#878883" }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#dfd5c2" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
                <div className="product-action">
                  <a href="#" className="btn-product btn-cart">
                    <span>add to cart</span>
                  </a>
                </div>
                {/* End .product-action */}
              </div>
              {/* End .product */}
              <div className="product product-11 text-center">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-2/products/product-5-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-2/products/product-5-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist">
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  {/* End .product-action-vertical */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product.html">Petite Table Lamp</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$675,00</div>
                  {/* End .product-price */}
                  <div className="product-nav product-nav-dots">
                    <a
                      href="#"
                      className="active"
                      style={{ background: "#74543e" }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#e8e8e8" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
                <div className="product-action">
                  <a href="#" className="btn-product btn-cart">
                    <span>add to cart</span>
                  </a>
                </div>
                {/* End .product-action */}
              </div>
              {/* End .product */}
              <div className="product product-11 text-center">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-2/products/product-6-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-2/products/product-6-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist">
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  {/* End .product-action-vertical */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product.html">Elephant Armchair</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$457,00</div>
                  {/* End .product-price */}
                </div>
                {/* End .product-body */}
                <div className="product-action">
                  <a href="#" className="btn-product btn-cart">
                    <span>add to cart</span>
                  </a>
                </div>
                {/* End .product-action */}
              </div>
              {/* End .product */}
              <div className="product product-11 text-center">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-2/products/product-1-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-2/products/product-1-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist">
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  {/* End .product-action-vertical */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product.html">Butler Stool Ladder</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$251,00</div>
                  {/* End .product-price */}
                </div>
                {/* End .product-body */}
                <div className="product-action">
                  <a href="#" className="btn-product btn-cart">
                    <span>add to cart</span>
                  </a>
                </div>
                {/* End .product-action */}
              </div>
              {/* End .product */}
            </div>
            {/* End .owl-carousel */}
          </div>
          {/* .End .tab-pane */}
          <div
            className="tab-pane p-0 fade"
            id="products-sale-tab"
            role="tabpanel"
            aria-labelledby="products-sale-link"
          >
            <div
              className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                          "nav": false, 
                          "dots": true,
                          "margin": 20,
                          "loop": false,
                          "responsive": {
                              "0": {
                                  "items":2
                              },
                              "480": {
                                  "items":2
                              },
                              "768": {
                                  "items":3
                              },
                              "992": {
                                  "items":4
                              },
                              "1200": {
                                  "items":5
                              },
                              "1600": {
                                  "items":6,
                                  "nav": true
                              }
                          }
                      }'
            >
              <div className="product product-11 text-center">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-2/products/product-5-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-2/products/product-5-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist">
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  {/* End .product-action-vertical */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product.html">Petite Table Lamp</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$675,00</div>
                  {/* End .product-price */}
                  <div className="product-nav product-nav-dots">
                    <a
                      href="#"
                      className="active"
                      style={{ background: "#74543e" }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#e8e8e8" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
                <div className="product-action">
                  <a href="#" className="btn-product btn-cart">
                    <span>add to cart</span>
                  </a>
                </div>
                {/* End .product-action */}
              </div>
              {/* End .product */}
              <div className="product product-11 text-center">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-2/products/product-6-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-2/products/product-6-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist">
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  {/* End .product-action-vertical */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product.html">Elephant Armchair</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$457,00</div>
                  {/* End .product-price */}
                </div>
                {/* End .product-body */}
                <div className="product-action">
                  <a href="#" className="btn-product btn-cart">
                    <span>add to cart</span>
                  </a>
                </div>
                {/* End .product-action */}
              </div>
              {/* End .product */}
              <div className="product product-11 text-center">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-2/products/product-1-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-2/products/product-1-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist">
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  {/* End .product-action-vertical */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product.html">Butler Stool Ladder</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$251,00</div>
                  {/* End .product-price */}
                </div>
                {/* End .product-body */}
                <div className="product-action">
                  <a href="#" className="btn-product btn-cart">
                    <span>add to cart</span>
                  </a>
                </div>
                {/* End .product-action */}
              </div>
              {/* End .product */}
            </div>
            {/* End .owl-carousel */}
          </div>
          {/* .End .tab-pane */}
          <div
            className="tab-pane p-0 fade"
            id="products-top-tab"
            role="tabpanel"
            aria-labelledby="products-top-link"
          >
            <div
              className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                          "nav": false, 
                          "dots": true,
                          "margin": 20,
                          "loop": false,
                          "responsive": {
                              "0": {
                                  "items":2
                              },
                              "480": {
                                  "items":2
                              },
                              "768": {
                                  "items":3
                              },
                              "992": {
                                  "items":4
                              },
                              "1200": {
                                  "items":5
                              },
                              "1600": {
                                  "items":6,
                                  "nav": true
                              }
                          }
                      }'
            >
              <div className="product product-11 text-center">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-2/products/product-2-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-2/products/product-2-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist">
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  {/* End .product-action-vertical */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product.html">Octo 4240</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$746,00</div>
                  {/* End .product-price */}
                  <div className="product-nav product-nav-dots">
                    <a
                      href="#"
                      className="active"
                      style={{ background: "#1f1e18" }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#e8e8e8" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
                <div className="product-action">
                  <a href="#" className="btn-product btn-cart">
                    <span>add to cart</span>
                  </a>
                </div>
                {/* End .product-action */}
              </div>
              {/* End .product */}
              <div className="product product-11 text-center">
                <figure className="product-media">
                  <span className="product-label label-circle label-new">
                    New
                  </span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-2/products/product-3-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-2/products/product-3-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist">
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  {/* End .product-action-vertical */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product.html">Flow Slim Armchair</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$970,00</div>
                  {/* End .product-price */}
                </div>
                {/* End .product-body */}
                <div className="product-action">
                  <a href="#" className="btn-product btn-cart">
                    <span>add to cart</span>
                  </a>
                </div>
                {/* End .product-action */}
              </div>
              {/* End .product */}
              <div className="product product-11 text-center">
                <figure className="product-media">
                  <span className="product-label label-circle label-sale">
                    Sale
                  </span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-2/products/product-4-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-2/products/product-4-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist">
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  {/* End .product-action-vertical */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product.html">Roots Sofa Bed</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">
                    <span className="new-price">$337,00</span>
                    <span className="old-price">Was $449,00</span>
                  </div>
                  {/* End .product-price */}
                  <div className="product-nav product-nav-dots">
                    <a
                      href="#"
                      className="active"
                      style={{ background: "#878883" }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#dfd5c2" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
                <div className="product-action">
                  <a href="#" className="btn-product btn-cart">
                    <span>add to cart</span>
                  </a>
                </div>
                {/* End .product-action */}
              </div>
              {/* End .product */}
            </div>
            {/* End .owl-carousel */}
          </div>
          {/* .End .tab-pane */}
        </div>
        {/* End .tab-content */}
      </div>
      {/* End .container-fluid */}
      <div className="mb-5" />
      {/* End .mb-5 */}
      <div className="bg-light deal-container pt-5 pb-3 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="deal">
                <div className="deal-content">
                  <h4>Limited Quantities</h4>
                  <h2>Deal of the Day</h2>
                  <h3 className="product-title">
                    <a href="product.html">POÄNG</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">
                    <span className="new-price">$149.00</span>
                    <span className="old-price">Was $240.00</span>
                  </div>
                  {/* End .product-price */}
                  <div className="deal-countdown" data-until="+10h" />
                  {/* End .deal-countdown */}
                  <a href="product.html" className="btn btn-primary">
                    <span>Shop Now</span>
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>
                {/* End .deal-content */}
                <div className="deal-image">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-2/deal/product-1.jpg"
                      alt="image"
                    />
                  </a>
                </div>
                {/* End .deal-image */}
              </div>
              {/* End .deal */}
            </div>
            {/* End .col-lg-9 */}
            <div className="col-lg-3">
              <div className="banner banner-overlay banner-overlay-light text-center d-none d-lg-block">
                <a href="#">
                  <img
                    src="assets/images/demos/demo-2/banners/banner-5.jpg"
                    alt="Banner"
                  />
                </a>
                <div className="banner-content banner-content-top banner-content-center">
                  <h4 className="banner-subtitle">The Best Choice</h4>
                  {/* End .banner-subtitle */}
                  <h3 className="banner-title">AGEN</h3>
                  {/* End .banner-title */}
                  <div className="banner-text text-primary">$49.99</div>
                  {/* End .banner-text */}
                  <a href="#" className="btn btn-outline-gray banner-link">
                    Shop Now
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>
                {/* End .banner-content */}
              </div>
              {/* End .banner */}
            </div>
            {/* End .col-lg-3 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </div>
      {/* End .bg-light */}
      <div className="mb-6" />
      {/* End .mb-6 */}
      <div className="container">
        <div className="heading heading-center mb-3">
          <h2 className="title">Top Selling Products</h2>
          {/* End .title */}
          <ul
            className="nav nav-pills nav-border-anim justify-content-center"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                id="top-all-link"
                data-toggle="tab"
                href="#top-all-tab"
                role="tab"
                aria-controls="top-all-tab"
                aria-selected="true"
              >
                All
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="top-fur-link"
                data-toggle="tab"
                href="#top-fur-tab"
                role="tab"
                aria-controls="top-fur-tab"
                aria-selected="false"
              >
                Furniture
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="top-decor-link"
                data-toggle="tab"
                href="#top-decor-tab"
                role="tab"
                aria-controls="top-decor-tab"
                aria-selected="false"
              >
                Decoration
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="top-light-link"
                data-toggle="tab"
                href="#top-light-tab"
                role="tab"
                aria-controls="top-light-tab"
                aria-selected="false"
              >
                Lighting
              </a>
            </li>
          </ul>
        </div>
        {/* End .heading */}
        <div className="tab-content">
          <div
            className="tab-pane p-0 fade show active"
            id="top-all-tab"
            role="tabpanel"
            aria-labelledby="top-all-link"
          >
            <div className="products">
              <div className="row justify-content-center">
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-2/products/product-7-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-7-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist ">
                          <span>add to wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action-vertical */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Lighting</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Petite Table Lamp</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$401,00</div>
                      {/* End .product-price */}
                    </div>
                    {/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </a>
                    </div>
                    {/* End .product-action */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-2/products/product-8-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-8-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist ">
                          <span>add to wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action-vertical */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Decor</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Madra Log Holder</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$401,00</div>
                      {/* End .product-price */}
                      <div className="product-nav product-nav-dots">
                        <a
                          href="#"
                          className="active"
                          style={{ background: "#333333" }}
                        >
                          <span className="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#927764" }}>
                          <span className="sr-only">Color name</span>
                        </a>
                      </div>
                      {/* End .product-nav */}
                    </div>
                    {/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </a>
                    </div>
                    {/* End .product-action */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <span className="product-label label-circle label-sale">
                        Sale
                      </span>
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-2/products/product-9-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-9-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist ">
                          <span>add to wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action-vertical */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Furniture</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Garden Armchair</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="new-price">$94,00</span>
                        <span className="old-price">Was $94,00</span>
                      </div>
                      {/* End .product-price */}
                    </div>
                    {/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </a>
                    </div>
                    {/* End .product-action */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-2/products/product-10-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-10-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist ">
                          <span>add to wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action-vertical */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Lighting</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">
                          Carronade Large Suspension Lamp
                        </a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$401,00</div>
                      {/* End .product-price */}
                      <div className="product-nav product-nav-dots">
                        <a
                          href="#"
                          className="active"
                          style={{ background: "#e8e8e8" }}
                        >
                          <span className="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#333333" }}>
                          <span className="sr-only">Color name</span>
                        </a>
                      </div>
                      {/* End .product-nav */}
                    </div>
                    {/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </a>
                    </div>
                    {/* End .product-action */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-2/products/product-11-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-11-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist ">
                          <span>add to wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action-vertical */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Decor</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Original Outdoor Beanbag</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$259,00</div>
                      {/* End .product-price */}
                    </div>
                    {/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </a>
                    </div>
                    {/* End .product-action */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <span className="product-label label-circle label-new">
                        New
                      </span>
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-2/products/product-12-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-12-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist ">
                          <span>add to wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action-vertical */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Furniture</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">2-Seater</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$3.107,00</div>
                      {/* End .product-price */}
                    </div>
                    {/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </a>
                    </div>
                    {/* End .product-action */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-2/products/product-13-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-13-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist ">
                          <span>add to wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action-vertical */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Furniture</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Wingback Chair</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$2.486,00</div>
                      {/* End .product-price */}
                    </div>
                    {/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </a>
                    </div>
                    {/* End .product-action */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-2/products/product-14-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-14-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist ">
                          <span>add to wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action-vertical */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Decor</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Cushion Set 3 Pieces</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$199,00</div>
                      {/* End .product-price */}
                    </div>
                    {/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </a>
                    </div>
                    {/* End .product-action */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-2/products/product-15-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-15-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist ">
                          <span>add to wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action-vertical */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Decor</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Cushion Set 3 Pieces</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$199,00</div>
                      {/* End .product-price */}
                    </div>
                    {/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </a>
                    </div>
                    {/* End .product-action */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-2/products/product-16-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-16-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist ">
                          <span>add to wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action-vertical */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Lighting</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Carronade Table Lamp</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$499,00</div>
                      {/* End .product-price */}
                    </div>
                    {/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </a>
                    </div>
                    {/* End .product-action */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .products */}
          </div>
          {/* .End .tab-pane */}
          <div
            className="tab-pane p-0 fade"
            id="top-fur-tab"
            role="tabpanel"
            aria-labelledby="top-fur-link"
          >
            <div className="products">
              <div className="row justify-content-center">
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <span className="product-label label-circle label-sale">
                        Sale
                      </span>
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-2/products/product-9-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-9-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist ">
                          <span>add to wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action-vertical */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Furniture</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Garden Armchair</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="new-price">$94,00</span>
                        <span className="old-price">Was $94,00</span>
                      </div>
                      {/* End .product-price */}
                    </div>
                    {/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </a>
                    </div>
                    {/* End .product-action */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <span className="product-label label-circle label-new">
                        New
                      </span>
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-2/products/product-12-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-12-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist ">
                          <span>add to wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action-vertical */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Furniture</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">2-Seater</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$3.107,00</div>
                      {/* End .product-price */}
                    </div>
                    {/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </a>
                    </div>
                    {/* End .product-action */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-2/products/product-13-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-13-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist ">
                          <span>add to wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action-vertical */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Furniture</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Wingback Chair</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$2.486,00</div>
                      {/* End .product-price */}
                    </div>
                    {/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </a>
                    </div>
                    {/* End .product-action */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .products */}
          </div>
          {/* .End .tab-pane */}
          <div
            className="tab-pane p-0 fade"
            id="top-decor-tab"
            role="tabpanel"
            aria-labelledby="top-decor-link"
          >
            <div className="products">
              <div className="row justify-content-center">
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-2/products/product-8-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-8-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist ">
                          <span>add to wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action-vertical */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Decor</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Madra Log Holder</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$401,00</div>
                      {/* End .product-price */}
                      <div className="product-nav product-nav-dots">
                        <a
                          href="#"
                          className="active"
                          style={{ background: "#333333" }}
                        >
                          <span className="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#927764" }}>
                          <span className="sr-only">Color name</span>
                        </a>
                      </div>
                      {/* End .product-nav */}
                    </div>
                    {/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </a>
                    </div>
                    {/* End .product-action */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-2/products/product-11-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-11-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist ">
                          <span>add to wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action-vertical */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Decor</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Original Outdoor Beanbag</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$259,00</div>
                      {/* End .product-price */}
                    </div>
                    {/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </a>
                    </div>
                    {/* End .product-action */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-2/products/product-14-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-14-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist ">
                          <span>add to wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action-vertical */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Decor</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Cushion Set 3 Pieces</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$199,00</div>
                      {/* End .product-price */}
                    </div>
                    {/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </a>
                    </div>
                    {/* End .product-action */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-2/products/product-15-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-15-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist ">
                          <span>add to wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action-vertical */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Decor</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Cushion Set 3 Pieces</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$199,00</div>
                      {/* End .product-price */}
                    </div>
                    {/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </a>
                    </div>
                    {/* End .product-action */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .products */}
          </div>
          {/* .End .tab-pane */}
          <div
            className="tab-pane p-0 fade"
            id="top-light-tab"
            role="tabpanel"
            aria-labelledby="top-light-link"
          >
            <div className="products">
              <div className="row justify-content-center">
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-2/products/product-7-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-7-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist ">
                          <span>add to wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action-vertical */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Lighting</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Petite Table Lamp</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$401,00</div>
                      {/* End .product-price */}
                    </div>
                    {/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </a>
                    </div>
                    {/* End .product-action */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-2/products/product-10-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-10-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist ">
                          <span>add to wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action-vertical */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Lighting</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">
                          Carronade Large Suspension Lamp
                        </a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$401,00</div>
                      {/* End .product-price */}
                      <div className="product-nav product-nav-dots">
                        <a
                          href="#"
                          className="active"
                          style={{ background: "#e8e8e8" }}
                        >
                          <span className="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#333333" }}>
                          <span className="sr-only">Color name</span>
                        </a>
                      </div>
                      {/* End .product-nav */}
                    </div>
                    {/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </a>
                    </div>
                    {/* End .product-action */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-2/products/product-16-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-16-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist ">
                          <span>add to wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action-vertical */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Lighting</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Carronade Table Lamp</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$499,00</div>
                      {/* End .product-price */}
                    </div>
                    {/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </a>
                    </div>
                    {/* End .product-action */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .products */}
          </div>
          {/* .End .tab-pane */}
        </div>
        {/* End .tab-content */}
      </div>
      {/* End .container */}
      <div className="container">
        <hr className="mt-1 mb-6" />
      </div>
      {/* End .container */}
      <div className="blog-posts">
        <div className="container">
          <h2 className="title text-center">From Our Blog</h2>
          {/* End .title-lg text-center */}
          <div
            className="owl-carousel owl-simple carousel-with-shadow"
            data-toggle="owl"
            data-owl-options='{
                      "nav": false, 
                      "dots": true,
                      "items": 3,
                      "margin": 20,
                      "loop": false,
                      "responsive": {
                          "0": {
                              "items":1
                          },
                          "600": {
                              "items":2
                          },
                          "992": {
                              "items":3
                          }
                      }
                  }'
          >
            <article className="entry entry-display">
              <figure className="entry-media">
                <a href="single.html">
                  <img
                    src="assets/images/demos/demo-2/blog/post-1.jpg"
                    alt="image desc"
                  />
                </a>
              </figure>
              {/* End .entry-media */}
              <div className="entry-body text-center">
                <div className="entry-meta">
                  <a href="#">Nov 22, 2018</a>, 0 Comments
                </div>
                {/* End .entry-meta */}
                <h3 className="entry-title">
                  <a href="single.html">Sed adipiscing ornare.</a>
                </h3>
                {/* End .entry-title */}
                <div className="entry-content">
                  <a href="single.html" className="read-more">
                    Continue Reading
                  </a>
                </div>
                {/* End .entry-content */}
              </div>
              {/* End .entry-body */}
            </article>
            {/* End .entry */}
            <article className="entry entry-display">
              <figure className="entry-media">
                <a href="single.html">
                  <img
                    src="assets/images/demos/demo-2/blog/post-2.jpg"
                    alt="image desc"
                  />
                </a>
              </figure>
              {/* End .entry-media */}
              <div className="entry-body text-center">
                <div className="entry-meta">
                  <a href="#">Dec 12, 2018</a>, 0 Comments
                </div>
                {/* End .entry-meta */}
                <h3 className="entry-title">
                  <a href="single.html">Fusce lacinia arcuet nulla.</a>
                </h3>
                {/* End .entry-title */}
                <div className="entry-content">
                  <a href="single.html" className="read-more">
                    Continue Reading
                  </a>
                </div>
                {/* End .entry-content */}
              </div>
              {/* End .entry-body */}
            </article>
            {/* End .entry */}
            <article className="entry entry-display">
              <figure className="entry-media">
                <a href="single.html">
                  <img
                    src="assets/images/demos/demo-2/blog/post-3.jpg"
                    alt="image desc"
                  />
                </a>
              </figure>
              {/* End .entry-media */}
              <div className="entry-body text-center">
                <div className="entry-meta">
                  <a href="#">Dec 19, 2018</a>, 2 Comments
                </div>
                {/* End .entry-meta */}
                <h3 className="entry-title">
                  <a href="single.html">Quisque volutpat mattis eros.</a>
                </h3>
                {/* End .entry-title */}
                <div className="entry-content">
                  <a href="single.html" className="read-more">
                    Continue Reading
                  </a>
                </div>
                {/* End .entry-content */}
              </div>
              {/* End .entry-body */}
            </article>
            {/* End .entry */}
          </div>
          {/* End .owl-carousel */}
          <div className="more-container text-center mt-2">
            <a href="blog.html" className="btn btn-outline-darker btn-more">
              <span>View more articles</span>
              <i className="icon-long-arrow-right" />
            </a>
          </div>
          {/* End .more-container */}
        </div>
        {/* End .container */}
      </div>
      {/* End .blog-posts */}
    </main>
    {/* End .main */}
    {/* End .footer */}
  </div>
  {/* End .page-wrapper */}
  <button id="scroll-top" title="Back to Top">
    <i className="icon-arrow-up" />
  </button>
  {/* Mobile Menu */}
  <div className="mobile-menu-overlay" />
  {/* End .mobil-menu-overlay */}
  <div className="mobile-menu-container mobile-menu-light">
    <div className="mobile-menu-wrapper">
      <span className="mobile-menu-close">
        <i className="icon-close" />
      </span>
      <form action="#" method="get" className="mobile-search">
        <label htmlFor="mobile-search" className="sr-only">
          Search
        </label>
        <input
          type="search"
          className="form-control"
          name="mobile-search"
          id="mobile-search"
          placeholder="Search product ..."
          required=""
        />
        <button className="btn btn-primary" type="submit">
          <i className="icon-search" />
        </button>
      </form>
      <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            id="mobile-menu-link"
            data-toggle="tab"
            href="#mobile-menu-tab"
            role="tab"
            aria-controls="mobile-menu-tab"
            aria-selected="true"
          >
            Menu
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="mobile-cats-link"
            data-toggle="tab"
            href="#mobile-cats-tab"
            role="tab"
            aria-controls="mobile-cats-tab"
            aria-selected="false"
          >
            Categories
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="mobile-menu-tab"
          role="tabpanel"
          aria-labelledby="mobile-menu-link"
        >
          <nav className="mobile-nav">
            <ul className="mobile-menu">
              <li className="active">
                <a href="index.html">Home</a>
                <ul>
                  <li>
                    <a href="index-1.html">01 - furniture store</a>
                  </li>
                  <li>
                    <a href="index-2.html">02 - furniture store</a>
                  </li>
                  <li>
                    <a href="index-3.html">03 - electronic store</a>
                  </li>
                  <li>
                    <a href="index-4.html">04 - electronic store</a>
                  </li>
                  <li>
                    <a href="index-5.html">05 - fashion store</a>
                  </li>
                  <li>
                    <a href="index-6.html">06 - fashion store</a>
                  </li>
                  <li>
                    <a href="index-7.html">07 - fashion store</a>
                  </li>
                  <li>
                    <a href="index-8.html">08 - fashion store</a>
                  </li>
                  <li>
                    <a href="index-9.html">09 - fashion store</a>
                  </li>
                  <li>
                    <a href="index-10.html">10 - shoes store</a>
                  </li>
                  <li>
                    <a href="index-11.html">11 - furniture simple store</a>
                  </li>
                  <li>
                    <a href="index-12.html">12 - fashion simple store</a>
                  </li>
                  <li>
                    <a href="index-13.html">13 - market</a>
                  </li>
                  <li>
                    <a href="index-14.html">14 - market fullwidth</a>
                  </li>
                  <li>
                    <a href="index-15.html">15 - lookbook 1</a>
                  </li>
                  <li>
                    <a href="index-16.html">16 - lookbook 2</a>
                  </li>
                  <li>
                    <a href="index-17.html">17 - fashion store</a>
                  </li>
                  <li>
                    <a href="index-18.html">
                      18 - fashion store (with sidebar)
                    </a>
                  </li>
                  <li>
                    <a href="index-19.html">19 - games store</a>
                  </li>
                  <li>
                    <a href="index-20.html">20 - book store</a>
                  </li>
                  <li>
                    <a href="index-21.html">21 - sport store</a>
                  </li>
                  <li>
                    <a href="index-22.html">22 - tools store</a>
                  </li>
                  <li>
                    <a href="index-23.html">
                      23 - fashion left navigation store
                    </a>
                  </li>
                  <li>
                    <a href="index-24.html">24 - extreme sport store</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="category.html">Shop</a>
                <ul>
                  <li>
                    <a href="category-list.html">Shop List</a>
                  </li>
                  <li>
                    <a href="category-2cols.html">Shop Grid 2 Columns</a>
                  </li>
                  <li>
                    <a href="category.html">Shop Grid 3 Columns</a>
                  </li>
                  <li>
                    <a href="category-4cols.html">Shop Grid 4 Columns</a>
                  </li>
                  <li>
                    <a href="category-boxed.html">
                      <span>
                        Shop Boxed No Sidebar
                        <span className="tip tip-hot">Hot</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="category-fullwidth.html">
                      Shop Fullwidth No Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="product-category-boxed.html">
                      Product Category Boxed
                    </a>
                  </li>
                  <li>
                    <a href="product-category-fullwidth.html">
                      <span>
                        Product Category Fullwidth
                        <span className="tip tip-new">New</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="cart.html">Cart</a>
                  </li>
                  <li>
                    <a href="checkout.html">Checkout</a>
                  </li>
                  <li>
                    <a href="wishlist.html">Wishlist</a>
                  </li>
                  <li>
                    <a href="#">Lookbook</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="product.html" className="sf-with-ul">
                  Product
                </a>
                <ul>
                  <li>
                    <a href="product.html">Default</a>
                  </li>
                  <li>
                    <a href="product-centered.html">Centered</a>
                  </li>
                  <li>
                    <a href="product-extended.html">
                      <span>
                        Extended Info<span className="tip tip-new">New</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="product-gallery.html">Gallery</a>
                  </li>
                  <li>
                    <a href="product-sticky.html">Sticky Info</a>
                  </li>
                  <li>
                    <a href="product-sidebar.html">Boxed With Sidebar</a>
                  </li>
                  <li>
                    <a href="product-fullwidth.html">Full Width</a>
                  </li>
                  <li>
                    <a href="product-masonry.html">Masonry Sticky Info</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Pages</a>
                <ul>
                  <li>
                    <a href="about.html">About</a>
                    <ul>
                      <li>
                        <a href="about.html">About 01</a>
                      </li>
                      <li>
                        <a href="about-2.html">About 02</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                    <ul>
                      <li>
                        <a href="contact.html">Contact 01</a>
                      </li>
                      <li>
                        <a href="contact-2.html">Contact 02</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQs</a>
                  </li>
                  <li>
                    <a href="404.html">Error 404</a>
                  </li>
                  <li>
                    <a href="coming-soon.html">Coming Soon</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="blog.html">Blog</a>
                <ul>
                  <li>
                    <a href="blog.html">Classic</a>
                  </li>
                  <li>
                    <a href="blog-listing.html">Listing</a>
                  </li>
                  <li>
                    <a href="#">Grid</a>
                    <ul>
                      <li>
                        <a href="blog-grid-2cols.html">Grid 2 columns</a>
                      </li>
                      <li>
                        <a href="blog-grid-3cols.html">Grid 3 columns</a>
                      </li>
                      <li>
                        <a href="blog-grid-4cols.html">Grid 4 columns</a>
                      </li>
                      <li>
                        <a href="blog-grid-sidebar.html">Grid sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Masonry</a>
                    <ul>
                      <li>
                        <a href="blog-masonry-2cols.html">Masonry 2 columns</a>
                      </li>
                      <li>
                        <a href="blog-masonry-3cols.html">Masonry 3 columns</a>
                      </li>
                      <li>
                        <a href="blog-masonry-4cols.html">Masonry 4 columns</a>
                      </li>
                      <li>
                        <a href="blog-masonry-sidebar.html">Masonry sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Mask</a>
                    <ul>
                      <li>
                        <a href="blog-mask-grid.html">Blog mask grid</a>
                      </li>
                      <li>
                        <a href="blog-mask-masonry.html">Blog mask masonry</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Single Post</a>
                    <ul>
                      <li>
                        <a href="single.html">Default with sidebar</a>
                      </li>
                      <li>
                        <a href="single-fullwidth.html">Fullwidth no sidebar</a>
                      </li>
                      <li>
                        <a href="single-fullwidth-sidebar.html">
                          Fullwidth with sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="elements-list.html">Elements</a>
                <ul>
                  <li>
                    <a href="elements-products.html">Products</a>
                  </li>
                  <li>
                    <a href="elements-typography.html">Typography</a>
                  </li>
                  <li>
                    <a href="elements-titles.html">Titles</a>
                  </li>
                  <li>
                    <a href="elements-banners.html">Banners</a>
                  </li>
                  <li>
                    <a href="elements-product-category.html">
                      Product Category
                    </a>
                  </li>
                  <li>
                    <a href="elements-video-banners.html">Video Banners</a>
                  </li>
                  <li>
                    <a href="elements-buttons.html">Buttons</a>
                  </li>
                  <li>
                    <a href="elements-accordions.html">Accordions</a>
                  </li>
                  <li>
                    <a href="elements-tabs.html">Tabs</a>
                  </li>
                  <li>
                    <a href="elements-testimonials.html">Testimonials</a>
                  </li>
                  <li>
                    <a href="elements-blog-posts.html">Blog Posts</a>
                  </li>
                  <li>
                    <a href="elements-portfolio.html">Portfolio</a>
                  </li>
                  <li>
                    <a href="elements-cta.html">Call to Action</a>
                  </li>
                  <li>
                    <a href="elements-icon-boxes.html">Icon Boxes</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* End .mobile-nav */}
        </div>
        {/* .End .tab-pane */}
        <div
          className="tab-pane fade"
          id="mobile-cats-tab"
          role="tabpanel"
          aria-labelledby="mobile-cats-link"
        >
          <nav className="mobile-cats-nav">
            <ul className="mobile-cats-menu">
              <li>
                <a className="mobile-cats-lead" href="#">
                  Daily offers
                </a>
              </li>
              <li>
                <a className="mobile-cats-lead" href="#">
                  Gift Ideas
                </a>
              </li>
              <li>
                <a href="#">Beds</a>
              </li>
              <li>
                <a href="#">Lighting</a>
              </li>
              <li>
                <a href="#">Sofas &amp; Sleeper sofas</a>
              </li>
              <li>
                <a href="#">Storage</a>
              </li>
              <li>
                <a href="#">Armchairs &amp; Chaises</a>
              </li>
              <li>
                <a href="#">Decoration </a>
              </li>
              <li>
                <a href="#">Kitchen Cabinets</a>
              </li>
              <li>
                <a href="#">Coffee &amp; Tables</a>
              </li>
              <li>
                <a href="#">Outdoor Furniture </a>
              </li>
            </ul>
            {/* End .mobile-cats-menu */}
          </nav>
          {/* End .mobile-cats-nav */}
        </div>
        {/* .End .tab-pane */}
      </div>
      {/* End .tab-content */}
      <div className="social-icons">
        <a href="#" className="social-icon" target="_blank" title="Facebook">
          <i className="icon-facebook-f" />
        </a>
        <a href="#" className="social-icon" target="_blank" title="Twitter">
          <i className="icon-twitter" />
        </a>
        <a href="#" className="social-icon" target="_blank" title="Instagram">
          <i className="icon-instagram" />
        </a>
        <a href="#" className="social-icon" target="_blank" title="Youtube">
          <i className="icon-youtube" />
        </a>
      </div>
      {/* End .social-icons */}
    </div>
    {/* End .mobile-menu-wrapper */}
  </div>
  {/* End .mobile-menu-container */}
  {/* Sign in / Register Modal */}
  <div
    className="modal fade"
    id="signin-modal"
    tabIndex={-1}
    role="dialog"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">
              <i className="icon-close" />
            </span>
          </button>
          <div className="form-box">
            <div className="form-tab">
              <ul className="nav nav-pills nav-fill" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="signin-tab"
                    data-toggle="tab"
                    href="#signin"
                    role="tab"
                    aria-controls="signin"
                    aria-selected="true"
                  >
                    Sign In
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="register-tab"
                    data-toggle="tab"
                    href="#register"
                    role="tab"
                    aria-controls="register"
                    aria-selected="false"
                  >
                    Register
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="tab-content-5">
                <div
                  className="tab-pane fade show active"
                  id="signin"
                  role="tabpanel"
                  aria-labelledby="signin-tab"
                >
                  <form action="#">
                    <div className="form-group">
                      <label htmlFor="singin-email">
                        Username or email address *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="singin-email"
                        name="singin-email"
                        required=""
                      />
                    </div>
                    {/* End .form-group */}
                    <div className="form-group">
                      <label htmlFor="singin-password">Password *</label>
                      <input
                        type="password"
                        className="form-control"
                        id="singin-password"
                        name="singin-password"
                        required=""
                      />
                    </div>
                    {/* End .form-group */}
                    <div className="form-footer">
                      <button
                        type="submit"
                        className="btn btn-outline-primary-2"
                      >
                        <span>LOG IN</span>
                        <i className="icon-long-arrow-right" />
                      </button>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="signin-remember"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="signin-remember"
                        >
                          Remember Me
                        </label>
                      </div>
                      {/* End .custom-checkbox */}
                      <a href="#" className="forgot-link">
                        Forgot Your Password?
                      </a>
                    </div>
                    {/* End .form-footer */}
                  </form>
                  <div className="form-choice">
                    <p className="text-center">or sign in with</p>
                    <div className="row">
                      <div className="col-sm-6">
                        <a href="#" className="btn btn-login btn-g">
                          <i className="icon-google" />
                          Login With Google
                        </a>
                      </div>
                      {/* End .col-6 */}
                      <div className="col-sm-6">
                        <a href="#" className="btn btn-login btn-f">
                          <i className="icon-facebook-f" />
                          Login With Facebook
                        </a>
                      </div>
                      {/* End .col-6 */}
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .form-choice */}
                </div>
                {/* .End .tab-pane */}
                <div
                  className="tab-pane fade"
                  id="register"
                  role="tabpanel"
                  aria-labelledby="register-tab"
                >
                  <form action="#">
                    <div className="form-group">
                      <label htmlFor="register-email">
                        Your email address *
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="register-email"
                        name="register-email"
                        required=""
                      />
                    </div>
                    {/* End .form-group */}
                    <div className="form-group">
                      <label htmlFor="register-password">Password *</label>
                      <input
                        type="password"
                        className="form-control"
                        id="register-password"
                        name="register-password"
                        required=""
                      />
                    </div>
                    {/* End .form-group */}
                    <div className="form-footer">
                      <button
                        type="submit"
                        className="btn btn-outline-primary-2"
                      >
                        <span>SIGN UP</span>
                        <i className="icon-long-arrow-right" />
                      </button>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="register-policy"
                          required=""
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="register-policy"
                        >
                          I agree to the <a href="#">privacy policy</a> *
                        </label>
                      </div>
                      {/* End .custom-checkbox */}
                    </div>
                    {/* End .form-footer */}
                  </form>
                  <div className="form-choice">
                    <p className="text-center">or sign in with</p>
                    <div className="row">
                      <div className="col-sm-6">
                        <a href="#" className="btn btn-login btn-g">
                          <i className="icon-google" />
                          Login With Google
                        </a>
                      </div>
                      {/* End .col-6 */}
                      <div className="col-sm-6">
                        <a href="#" className="btn btn-login  btn-f">
                          <i className="icon-facebook-f" />
                          Login With Facebook
                        </a>
                      </div>
                      {/* End .col-6 */}
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .form-choice */}
                </div>
                {/* .End .tab-pane */}
              </div>
              {/* End .tab-content */}
            </div>
            {/* End .form-tab */}
          </div>
          {/* End .form-box */}
        </div>
        {/* End .modal-body */}
      </div>
      {/* End .modal-content */}
    </div>
    {/* End .modal-dialog */}
  </div>
  {/* End .modal */}
  <div
    className="container newsletter-popup-container mfp-hide"
    // id="newsletter-popup-form"
  >
    <div className="row justify-content-center">
      <div className="col-10">
        <div className="row no-gutters bg-white newsletter-popup-content">
          <div className="col-xl-3-5col col-lg-7 banner-content-wrap">
            <div className="banner-content text-center">
              <img
                src="assets/images/popup/newsletter/logo.png"
                className="logo"
                alt="logo"
                width={60}
                height={15}
              />
              <h2 className="banner-title">
                get{" "}
                <span>
                  25<light>%</light>
                </span>{" "}
                off
              </h2>
              <p>
                Subscribe to the Molla eCommerce newsletter to receive timely
                updates from your favorite products.
              </p>
              <form action="#">
                <div className="input-group input-group-round">
                  <input
                    type="email"
                    className="form-control form-control-white"
                    placeholder="Your Email Address"
                    aria-label="Email Adress"
                    required=""
                  />
                  <div className="input-group-append">
                    <button className="btn" type="submit">
                      <span>go</span>
                    </button>
                  </div>
                  {/* .End .input-group-append */}
                </div>
                {/* .End .input-group */}
              </form>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="register-policy-2"
                  required=""
                />
                <label
                  className="custom-control-label"
                  htmlFor="register-policy-2"
                >
                  Do not show this popup again
                </label>
              </div>
              {/* End .custom-checkbox */}
            </div>
          </div>
          <div className="col-xl-2-5col col-lg-5 ">
            <img
              src="assets/images/popup/newsletter/img-1.jpg"
              className="newsletter-img"
              alt="newsletter"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</>


     );
}

export default Home;