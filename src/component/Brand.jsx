const Brand = () => {
  return (
    <main className="hero container">
      {/* Left side */}
      <div className="hero-content">
        <h1>
          YOUR FEET DESERVE <br /> THE BEST
        </h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br /> HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE’RE HERE TO HELP YOU
          WITH OUR <br />
          SHOES.
        </p>
        <div className="hero-btn">
          <button className="shop-btn">Shop Now</button>
          <button className="cat-btn">Category</button>
        </div>

        {/* shop logo */}

        <div className="shop-logo">
          <p>Also Available On </p>
          <div className="shop-logo2">
            <img src="/image/flipkart.png" alt="shops1" />
            <img src="/image/amazon.png" alt="shops1" />
          </div>
        </div>
      </div>

      {/* Right side image */}

      <div className="Hero-image">
        <img src="/image/shoe_image.png" alt="shoe-image" />
      </div>
    </main>
  );
};

export default Brand;
