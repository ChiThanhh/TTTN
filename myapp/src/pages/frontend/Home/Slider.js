function Slider() {
    return (  
<div className="intro-slider-container">
  <div
    className="owl-carousel owl-simple owl-light owl-nav-inside"
    data-toggle="owl"
    data-owl-options='{"nav": false}'
  >
    <div
      className="intro-slide"
      style={{
        backgroundImage: "url(assets/images/demos/demo-2/slider/slide-1.jpg)"
      }}
    >
      <div className="container intro-content">
        <h3 className="intro-subtitle">Bedroom Furniture</h3>
        {/* End .h3 intro-subtitle */}
        <h1 className="intro-title">
          Find Comfort <br />
          That Suits You.
        </h1>
        {/* End .intro-title */}
        <a href="category.html" className="btn btn-primary">
          <span>Shop Now</span>
          <i className="icon-long-arrow-right" />
        </a>
      </div>
      {/* End .container intro-content */}
    </div>
    {/* End .intro-slide */}
    <div
      className="intro-slide"
      style={{
        backgroundImage: "url(assets/images/demos/demo-2/slider/slide-2.jpg)"
      }}
    >
      <div className="container intro-content">
        <h3 className="intro-subtitle">Deals and Promotions</h3>
        {/* End .h3 intro-subtitle */}
        <h1 className="intro-title">
          Ypperlig <br />
          Coffee Table <br />
          <span className="text-primary">
            <sup>$</sup>49,99
          </span>
        </h1>
        {/* End .intro-title */}
        <a href="category.html" className="btn btn-primary">
          <span>Shop Now</span>
          <i className="icon-long-arrow-right" />
        </a>
      </div>
      {/* End .container intro-content */}
    </div>
    {/* End .intro-slide */}
    <div
      className="intro-slide"
      style={{
        backgroundImage: "url(assets/images/demos/demo-2/slider/slide-3.jpg)"
      }}
    >
      <div className="container intro-content">
        <h3 className="intro-subtitle">Living Room</h3>
        {/* End .h3 intro-subtitle */}
        <h1 className="intro-title">
          Make Your Living Room <br />
          Work For You.
          <br />
          <span className="text-primary">
            <sup className="text-white font-weight-light">from</sup>
            <sup>$</sup>9,99
          </span>
        </h1>
        {/* End .intro-title */}
        <a href="category.html" className="btn btn-primary">
          <span>Shop Now</span>
          <i className="icon-long-arrow-right" />
        </a>
      </div>
      {/* End .container intro-content */}
    </div>
    {/* End .intro-slide */}
  </div>
  {/* End .owl-carousel owl-simple */}
  <span className="slider-loader text-white" />
  {/* End .slider-loader */}
</div>


    );
}

export default Slider;