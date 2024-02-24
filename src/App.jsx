import './App.css'
import React, { useEffect, useState } from 'react';

function App() {
  const [navbarActive, setNavbarActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);
  const [lastScrolledPos, setLastScrolledPos] = useState(0);

  useEffect(() => {
    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    const navbarLinks = document.querySelectorAll("[data-nav-link]");
    const overlay = document.querySelector("[data-overlay]");
    const header = document.querySelector("[data-header]");
    const backTopBtn = document.querySelector("[data-back-top-btn]");

    const toggleNavbar = () => {
      setNavbarActive(!navbarActive);
      overlay.classList.toggle("active");
    };

    const closeNavbar = () => {
      setNavbarActive(false);
      overlay.classList.remove("active");
    };

    const headerActive = () => {
      if (window.scrollY > 150) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }
    };

    const headerSticky = () => {
      if (lastScrolledPos >= window.scrollY) {
        header.classList.remove("header-hide");
      } else {
        header.classList.add("header-hide");
      }
      setLastScrolledPos(window.scrollY);
    };

    const scrollReveal = () => {
      const sections = document.querySelectorAll("[data-section]");
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
          sections[i].classList.add("active");
        }
      }
    };

    window.addEventListener("scroll", headerActive);
    window.addEventListener("scroll", headerSticky);
    window.addEventListener("scroll", scrollReveal);

    navTogglers.forEach(toggler => {
      toggler.addEventListener("click", toggleNavbar);
    });

    navbarLinks.forEach(link => {
      link.addEventListener("click", closeNavbar);
    });

    return () => {
      window.removeEventListener("scroll", headerActive);
      window.removeEventListener("scroll", headerSticky);
      window.removeEventListener("scroll", scrollReveal);
      navTogglers.forEach(toggler => {
        toggler.removeEventListener("click", toggleNavbar);
      });
      navbarLinks.forEach(link => {
        link.removeEventListener("click", closeNavbar);
      });
    };
  }, [navbarActive, lastScrolledPos]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="header">
        <div className="alert">
          <div className="container">
            <p className="alert-text">Free Shipping On All U.S. Orders $50+</p>
          </div>
        </div>

        <div className="header-top" data-header>
          <div className="container">
            <button className="nav-open-btn" aria-label="open menu" data-nav-toggler onClick={toggleSidebar}>
              <span className="line line-1"></span>
              <span className="line line-2"></span>
              <span className="line line-3"></span>
            </button>
            {/* <button className="nav-open-btn" onClick={toggleSidebar}>
              <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
              Open Sidebar
            </button> */}

            <div className="input-wrapper ">
              <input type="search" name="search" placeholder="Search product" className="search-field" />

              <button className="search-submit" aria-label="search">
                <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
              </button>
            </div>


            <a href="https://www.ebay.com/str/newopenstore81" className="logo">
              <img src="https://i.ebayimg.com/images/g/-noAAOSwDX9kaFtY/s-l140.webp" width="179" height="26" alt="Glowing" />
            </a>

            <div className="header-actions">
              <button className="header-action-btn" aria-label="user">
                <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
              </button>

              <button className="header-action-btn" aria-label="favourite item">
                <ion-icon name="star-outline" aria-hidden="true"></ion-icon>
                {/* <span className="btn-badge">0</span> */}
              </button>

              <button className="header-action-btn" aria-label="cart item">
                {/* <data className="btn-text" value="0">$0.00</data> */}
                <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
                {/* <span className="btn-badge">0</span> */}
              </button>

            </div>

            <nav className="navbar">
              <ul className="navbar-list">
                <li>
                  <a href="#home" className="navbar-link has-after">Home</a>
                </li>
                <li>
                  <a href="#collection" className="navbar-link has-after">Collection</a>
                </li>
                <li>
                  <a href="#shop" className="navbar-link has-after">Shop</a>
                </li>
                <li>
                  <a href="#offer" className="navbar-link has-after">Offer</a>
                </li>
                <li>
                  <a href="#blog" className="navbar-link has-after">Blog</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        {isOpen && (
          <div className="mobile-navbar active">
            <div className="wrapper">
              <a href="#" className="logo">
                <img src="images/logo.png" width="179" height="26" alt="Glowing" />
              </a>
              <button className="nav-close-btn" aria-label="close menu" onClick={toggleSidebar}>
                <ion-icon name="close-outline" aria-hidden="true" style={{ color: "black" }}></ion-icon>
                <i class="fa fa-times-circle" aria-hidden="true"></i>
              </button>
            </div>
            <ul className="navbar-list">
              <li>
                <a href="#home" className="navbar-link" data-nav-link>Home</a>
              </li>
              <li>
                <a href="#collection" className="navbar-link" data-nav-link>Collection</a>
              </li>
              <li>
                <a href="#shop" className="navbar-link" data-nav-link>Shop</a>
              </li>
              <li>
                <a href="#offer" className="navbar-link" data-nav-link>Offer</a>
              </li>
              <li>
                <a href="#blog" className="navbar-link" data-nav-link>Blog</a>
              </li>
            </ul>
          </div>
        )}
        {isOpen && <div className="overlay" data-nav-toggler data-overlay onClick={toggleSidebar}></div>}
      </div>


      <main>
        <article>


          {/* Head */}

          <section className="section hero" id="home" aria-label="hero" data-section>
            <div className="container">
              <ul className="has-scrollbar">
                <li className="scrollbar-item">
                  <div className="hero-card has-bg-image" style={{ backgroundImage: `url('images/Horse1.jpg')` }}>
                    <div className="card-content">
                      <h1 className="h1 hero-title text-white">
                        Ridex: <br />
                        Your Destination for Exceptional Horse Accessories</h1>
                      <p className="hero-text text-grey">
                        Welcome to Our Shop,
                        <br /> Wishing You a Wonderful Day Ahead.
                      </p>
                      <p className="price text-white">Our premium horse accessories start at just $1865</p>
                      <a href="https://www.etsy.com/shop/Ridex?ref=seller-platform-mcnav&sort_order=price_asc" className="btn btn-secondary"><h6 className='align-items-center'> Shop Now</h6></a>
                    </div>
                  </div>
                </li>
                <li className="scrollbar-item">
                  <div className="hero-card has-bg-image" style={{ backgroundImage: `url('images/Horse2.jpg')` }}>
                  <div className="card-content">
                      <h1 className="h1 hero-title text-white">
                        Ridex: <br />
                        Your Destination for Exceptional Horse Accessories</h1>
                      <p className="hero-text text-grey">
                        Welcome to Our Shop,
                        <br /> Wishing You a Wonderful Day Ahead.
                      </p>
                      <p className="price text-white">Our premium horse accessories start at just $1865</p>
                      <a href="https://www.etsy.com/shop/Ridex?ref=seller-platform-mcnav&sort_order=price_asc" className="btn btn-secondary"><h6 className='align-items-center'> Shop Now</h6></a>
                    </div>
                  </div>
                </li>
                <li className="scrollbar-item">
                  <div className="hero-card has-bg-image" style={{ backgroundImage: `url('images/Horse3.jpg')` }}>
                  <div className="card-content">
                      <h1 className="h1 hero-title text-white">
                        Ridex: <br />
                        Your Destination for Exceptional Horse Accessories</h1>
                      <p className="hero-text text-grey">
                        Welcome to Our Shop,
                        <br /> Wishing You a Wonderful Day Ahead.
                      </p>
                      <p className="price text-white">Our premium horse accessories start at just $1865</p>
                      <a href="https://www.etsy.com/shop/Ridex?ref=seller-platform-mcnav&sort_order=price_asc" className="btn btn-secondary"><h6 className='align-items-center'> Shop Now</h6></a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>


          {/* COLLECTION */}
          <section className="section collection" id="collection" aria-label="collection" data-section>
            <div className="container">
              <ul className="collection-list">
                <li>
                  <div className="collection-card has-before hover:shine">
                    <h2 className="h2 card-title">Summer Collection</h2>
                    <p className="card-text">Starting at $17.99</p>
                    <a href="#" className="btn-link">
                      <span className="span">Shop Now</span>
                      <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                    </a>
                    <div className="has-bg-image" style={{ backgroundImage: `url('images/collection-1.jpg')` }}></div>
                  </div>
                </li>
                <li>
                  <div className="collection-card has-before hover:shine">
                    <h2 className="h2 card-title">What’s New?</h2>
                    <p className="card-text">Get the glow</p>
                    <a href="#" className="btn-link">
                      <span className="span">Discover Now</span>
                      <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                    </a>
                    <div className="has-bg-image" style={{ backgroundImage: `url('images/collection-2.jpg')` }}></div>
                  </div>
                </li>
                <li>
                  <div className="collection-card has-before hover:shine">
                    <h2 className="h2 card-title">Buy 1 Get 1</h2>
                    <p className="card-text">Starting at $7.99</p>
                    <a href="#" className="btn-link">
                      <span className="span">Discover Now</span>
                      <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                    </a>
                    <div className="has-bg-image" style={{ backgroundImage: `url('images/collection-3.jpg')` }}></div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="section shop" id="shop" aria-label="shop" data-section>
            <div className="container">
              <div className="title-wrapper">
                <h2 className="h2 section-title">Our Bestsellers</h2>
                <a href="#" className="btn-link">
                  <span className="span">Shop All Products</span>
                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>
              </div>
              <ul className="has-scrollbar">
                <li className="scrollbar-item">
                  <div className="shop-card">
                    <div className="card-banner img-holder" style={{ '--width': 540, '--height': 720 }}>
                      <img src="images/product-01.jpg" width="540" height="720" loading="lazy" alt="Facial cleanser" className="img-cover" />
                      <span className="badge" aria-label="20% off">-20%</span>
                      <div className="card-actions">
                        <button className="action-btn" aria-label="add to cart">
                          <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
                        </button>
                        <button className="action-btn" aria-label="add to wishlist">
                          <ion-icon name="star-outline" aria-hidden="true"></ion-icon>
                        </button>
                        <button className="action-btn" aria-label="compare">
                          <ion-icon name="repeat-outline" aria-hidden="true"></ion-icon>
                        </button>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="price">
                        <del className="del">$39.00</del>
                        <span className="span">$29.00</span>
                      </div>
                      <h3>
                        <a href="#" className="card-title">Facial cleanser</a>
                      </h3>
                      <div className="card-rating">
                        <div className="rating-wrapper" aria-label="5 star rating">
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                        </div>
                        <p className="rating-text">5170 reviews</p>
                      </div>
                    </div>
                  </div>
                </li>
                {/* Repeat the pattern for other products */}
              </ul>
            </div>
          </section>



          <section className="section shop" id="shop" aria-label="shop" data-section>
            <div className="container">
              <div className="title-wrapper">
                <h2 className="h2 section-title">Under $25</h2>
                <a href="#" className="btn-link">
                  <span className="span">Shop All Products</span>
                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>
              </div>
              <ul className="has-scrollbar">
                <li className="scrollbar-item">
                  <div className="shop-card">
                    <div className="card-banner img-holder" style={{ '--width': 540, '--height': 720 }}>
                      <img src="images/product-07.jpg" width="540" height="720" loading="lazy" alt="Facial cleanser" className="img-cover" />
                      <span className="badge" aria-label="20% off">-20%</span>
                      <div className="card-actions">
                        <button className="action-btn" aria-label="add to cart">
                          <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
                        </button>
                        <button className="action-btn" aria-label="add to wishlist">
                          <ion-icon name="star-outline" aria-hidden="true"></ion-icon>
                        </button>
                        <button className="action-btn" aria-label="compare">
                          <ion-icon name="repeat-outline" aria-hidden="true"></ion-icon>
                        </button>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="price">
                        <del className="del">$39.00</del>
                        <span className="span">$29.00</span>
                      </div>
                      <h3>
                        <a href="#" className="card-title">Facial cleanser</a>
                      </h3>
                      <div className="card-rating">
                        <div className="rating-wrapper" aria-label="5 star rating">
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                        </div>
                        <p className="rating-text">5170 reviews</p>
                      </div>
                    </div>
                  </div>
                </li>
                {/* Repeat the pattern for other products */}
              </ul>
            </div>
          </section>





          <section className="section banner" aria-label="banner" data-section>
            <div className="container">
              <ul className="banner-list">
                <li>
                  <div className="banner-card banner-card-1 has-before hover:shine">
                    <p className="card-subtitle">New Collection</p>
                    <h2 className="h2 card-title">Discover Our Autumn Skincare</h2>
                    <a href="#" className="btn btn-secondary">Explore More</a>
                    <div className="has-bg-image" style={{ backgroundImage: `url('images/banner-1.jpg')` }}></div>
                  </div>
                </li>
                <li>
                  <div className="banner-card banner-card-2 has-before hover:shine">
                    <h2 className="h2 card-title">25% off Everything</h2>
                    <p className="card-text">
                      Makeup with extended range in colors for every human.
                    </p>
                    <a href="#" className="btn btn-secondary">Shop Sale</a>
                    <div className="has-bg-image" style={{ backgroundImage: `url('images/banner-2.jpg')` }}></div>
                  </div>
                </li>
              </ul>
            </div>
          </section>





          <section className="section feature" aria-label="feature" data-section>
            <div className="container">
              <h2 className="h2-large section-title">Why Shop with Glowing?</h2>
              <ul className="flex-list">
                <li className="flex-item">
                  <div className="feature-card">
                    <img src="images/feature-1.jpg" width="204" height="236" loading="lazy" alt="Guaranteed PURE" className="card-icon" />
                    <h3 className="h3 card-title">Guaranteed PURE</h3>
                    <p className="card-text">
                      All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients
                    </p>
                  </div>
                </li>
                <li className="flex-item">
                  <div className="feature-card">
                    <img src="images/feature-2.jpg" width="204" height="236" loading="lazy" alt="Completely Cruelty-Free" className="card-icon" />
                    <h3 className="h3 card-title">Completely Cruelty-Free</h3>
                    <p className="card-text">
                      All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients
                    </p>
                  </div>
                </li>
                <li className="flex-item">
                  <div className="feature-card">
                    <img src="images/feature-3.jpg" width="204" height="236" loading="lazy" alt="Ingredient Sourcing" className="card-icon" />
                    <h3 className="h3 card-title">Ingredient Sourcing</h3>
                    <p className="card-text">
                      All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>


          <section className="section offer" id="offer" aria-label="offer" data-section>
            <div className="container">
              <figure className="offer-banner">
                <img src="images/offer-banner-1.jpg" width="305" height="408" loading="lazy" alt="offer products" className="w-100" />
                <img src="images/offer-banner-2.jpg" width="450" height="625" loading="lazy" alt="offer products" className="w-100" />
              </figure>
              <div className="offer-content">
                <p className="offer-subtitle">
                  <span className="span">Special Offer</span>
                  <span className="badge" aria-label="20% off">-20%</span>
                </p>
                <h2 className="h2-large section-title">Mountain Pine Bath Oil</h2>
                <p className="section-text">
                  Made using clean, non-toxic ingredients, our products are designed for everyone.
                </p>
                <div className="countdown">
                  <span className="time" aria-label="days">15</span>
                  <span className="time" aria-label="hours">21</span>
                  <span className="time" aria-label="minutes">46</span>
                  <span className="time" aria-label="seconds">08</span>
                </div>
                <a href="#" className="btn btn-primary">Get Only $39.00</a>
              </div>
            </div>
          </section>


          <section className="section blog" id="blog" aria-label="blog" data-section>
            <div className="container">
              <h2 className="h2-large section-title">More to Discover</h2>
              <ul className="flex-list">
                <li className="flex-item">
                  <div className="blog-card">
                    <figure className="card-banner img-holder has-before hover:shine" style={{ '--width': 700, '--height': 450 }}>
                      <img src="images/blog-1.jpg" width="700" height="450" loading="lazy" alt="Find a Store" className="img-cover" />
                    </figure>
                    <h3 className="h3">
                      <a href="#" className="card-title">Find a Store</a>
                    </h3>
                    <a href="#" className="btn-link">
                      <span className="span">Our Store</span>
                      <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                    </a>
                  </div>
                </li>
                <li className="flex-item">
                  <div className="blog-card">
                    <figure className="card-banner img-holder has-before hover:shine" style={{ '--width': 700, '--height': 450 }}>
                      <img src="images/blog-2.jpg" width="700" height="450" loading="lazy" alt="From Our Blog" className="img-cover" />
                    </figure>
                    <h3 className="h3">
                      <a href="#" className="card-title">From Our Blog</a>
                    </h3>
                    <a href="#" className="btn-link">
                      <span className="span">Our Store</span>
                      <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                    </a>
                  </div>
                </li>
                <li className="flex-item">
                  <div className="blog-card">
                    <figure className="card-banner img-holder has-before hover:shine" style={{ '--width': 700, '--height': 450 }}>
                      <img src="images/blog-3.jpg" width="700" height="450" loading="lazy" alt="Our Story" className="img-cover" />
                    </figure>
                    <h3 className="h3">
                      <a href="#" className="card-title">Our Story</a>
                    </h3>
                    <a href="#" className="btn-link">
                      <span className="span">Our Store</span>
                      <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </section>



        </article>
      </main>















      <footer className="footer" data-section>
        <div className="container">
          <div className="footer-top">
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Company</p>
              </li>
              <li>
                <p className="footer-list-text">
                  Find a location nearest you. See <a href="#" className="link">Our Stores</a>
                </p>
              </li>
              <li>
                <p className="footer-list-text bold">+391 (0)35 2568 4593</p>
              </li>
              <li>
                <p className="footer-list-text">hello@domain.com</p>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Useful links</p>
              </li>
              <li><a href="#" className="footer-link">New Products</a></li>
              <li><a href="#" className="footer-link">Best Sellers</a></li>
              <li><a href="#" className="footer-link">Bundle & Save</a></li>
              <li><a href="#" className="footer-link">Online Gift Card</a></li>
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Information</p>
              </li>
              <li><a href="#" className="footer-link">Start a Return</a></li>
              <li><a href="#" className="footer-link">Contact Us</a></li>
              <li><a href="#" className="footer-link">Shipping FAQ</a></li>
              <li><a href="#" className="footer-link">Terms & Conditions</a></li>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
            </ul>
            <div className="footer-list">
              <p className="newsletter-title">Good emails.</p>
              <p className="newsletter-text">
                Enter your email below to be the first to know about new collections and product launches.
              </p>
              <form action="" className="newsletter-form">
                <input type="email" name="email_address" placeholder="Enter your email address" required className="email-field" />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="wrapper">
              <p className="copyright">
                &copy; 2022 codewithsadee
              </p>
              <ul className="social-list">
                <li><a href="#" className="social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
                <li><a href="#" className="social-link"><ion-icon name="logo-facebook"></ion-icon></a></li>
                <li><a href="#" className="social-link"><ion-icon name="logo-instagram"></ion-icon></a></li>
                <li><a href="#" className="social-link"><ion-icon name="logo-youtube"></ion-icon></a></li>
              </ul>
            </div>
            <a href="#" className="logo">
              <img src="images/logo.png" width="179" height="26" loading="lazy" alt="Glowing" />
            </a>
            <img src="images/pay.png" width="313" height="28" alt="available all payment method" className="w-100" />
          </div>
        </div>
      </footer >



    </>
  )
}

export default App
