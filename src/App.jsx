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
            <p className="alert-text">Free Delivery on All Orders</p>
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
              {/* <input type="search" name="search" placeholder="Search product" className="search-field" /> */}

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
                {/* <li>
                  <a href="#blog" className="navbar-link has-after">Blog</a>
                </li> */}
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
                <img src="https://i.ebayimg.com/images/g/-noAAOSwDX9kaFtY/s-l140.webp" width="179" height="26" alt="Glowing" />
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
              {/* <li>
                <a href="#blog" className="navbar-link" data-nav-link>Blog</a>
              </li> */}
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
                    <h2 className="card-text text-white">New Leather Australian Stock White Horse Tack Saddle Size 10"-21" with accessories.</h2>
                    <p className="card-text text-white">Starting at ₹ 29,852</p>
                    <a href="https://www.etsy.com/in-en/listing/1200452407/new-leather-australian-stock-white-horse?click_key=68bd86f9a05434737be5e3633ea02c719755eef1%3A1200452407&click_sum=fd6afba0&ref=shop_home_feat_1&pro=1&frs=1" className="btn-link">
                      <span className="card-text text-white">Shop Now</span>
                      <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                    </a>
                    <div className="has-bg-image" style={{ backgroundImage: `url('https://i.etsystatic.com/32583747/r/il/896403/3799812689/il_794xN.3799812689_tm2j.jpg')` }}></div>
                  </div>
                </li>
                <li>
                  <div className="collection-card has-before hover:shine">
                    <h2 className="card-text text-white">Ridex Leather Dog Collar Padded Leather Dog Collar Fine Tooled Gorgeous Dog Collar.</h2>
                    <p className="card-text text-white">Starting at ₹ 3,731</p>
                    <a href="https://www.etsy.com/in-en/listing/1603181759/ridex-leather-dog-collar-padded-leather?click_key=583128ac645468f3812d3d66bd3c94fcd11b72ef%3A1603181759&click_sum=ffaecea0&ref=shop_home_feat_2&pro=1&frs=1" className="btn-link">
                      <span className="card-text text-white">Discover Now</span>
                      <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                    </a>
                    <div className="has-bg-image" style={{ backgroundImage: `url('https://i.etsystatic.com/32583747/r/il/db95ad/5469398654/il_794xN.5469398654_6eud.jpg')` }}></div>
                  </div>
                </li>
                <li>
                  <div className="collection-card has-before hover:shine">
                    <h2 className="card-text text-white">New Leather Western A Fork Wade Tree Ranch Roping Trail Horse Saddle</h2>
                    <p className="card-text text-white">Starting at ₹ 29,106</p>
                    <a href="https://www.etsy.com/in-en/listing/1184242704/new-leather-western-a-fork-wade-tree?click_key=e195db45b8df25a63badeaab096eedc216adeb08%3A1184242704&click_sum=35f02c64&ref=shop_home_active_64&pro=1&frs=1" className="btn-link">
                      <span className="card-text text-white">Shop Now</span>
                      <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                    </a>
                    <div className="has-bg-image" style={{ backgroundImage: `url('https://i.etsystatic.com/32583747/r/il/370864/3743366564/il_794xN.3743366564_o7y8.jpg')` }}></div>
                  </div>


                </li>
              </ul>
            </div>
          </section>

          <section className="section shop" id="shop" aria-label="shop" data-section>
            <div className="container">
              <div className="title-wrapper">
                <h2 className="h2 section-title">Our Bestsellers</h2>
                <a href="https://www.etsy.com/shop/Ridex?ref=seller-platform-mcnav&sort_order=price_asc" className="btn-link">
                  <span className="span">Shop All Products</span>
                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>
              </div>
              <ul className="has-scrollbar">
                <li className="scrollbar-item">
                  <div className="shop-card">
                    <div className="card-banner img-holder" style={{ '--width': 540, '--height': 720 }}>
                      <img src="https://i.etsystatic.com/32583747/r/il/8dab7e/5744769614/il_794xN.5744769614_eaww.jpg" width="540" height="720" loading="lazy" alt="Facial cleanser" className="img-cover" />
                      <span className="badge" aria-label="20% off">13% off</span>
                    </div>
                    <div className="card-content">
                      <div className="price">
                        <del className="del">₹ 7,720</del>
                        <span className="span">₹ 6,716</span>
                      </div>
                      <h6>
                        <a href="https://www.etsy.com/in-en/listing/1660426642/new-leather-padded-comfort-crystal?click_key=751a79bfad0f3d5cf3699da989edb03d8095ec9a%3A1660426642&click_sum=21d524e5&ref=shop_home_active_1&pro=1&frs=1" className="card-title">New Leather Padded Comfort Crystal Bridle With Matching Colour Padding Dressage Bridle</a>
                      </h6>
                      <div className="card-rating">
                        <div className="rating-wrapper" aria-label="5 star rating">
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                        </div>
                        <p className="rating-text">46 reviews</p>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="scrollbar-item">
                  <div className="shop-card">
                    <div className="card-banner img-holder" style={{ '--width': 540, '--height': 720 }}>
                      <img src="https://i.etsystatic.com/32583747/r/il/bc926a/5486198810/il_794xN.5486198810_pkww.jpg" width="540" height="720" loading="lazy" alt="Facial cleanser" className="img-cover" />
                      <span className="badge" aria-label="20% off">13% off</span>
                    </div>
                    <div className="card-content">
                      <div className="price">
                        <del className="del">₹ 2,573</del>
                        <span className="span">₹ 2,238</span>
                      </div>
                      <h3>
                        <a href="https://www.etsy.com/in-en/listing/1592704464/tan-leather-socks-winter-socks?click_key=af6ae661e0e5686dace3804534e4292d9a9f8cce%3A1592704464&click_sum=4821f9cf&ref=shop_home_active_3&pro=1&frs=1" className="card-title">Tan Leather Socks ,Winter Socks ,Comfortable Slipper Kuffain Shoes Halal Shoes Slippers .Kuff khuff Quff Men Size, Islam Mest, Feet Warmer.</a>
                      </h3>
                      <div className="card-rating">
                        <div className="rating-wrapper" aria-label="5 star rating">
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                        </div>
                        <p className="rating-text">46 reviews</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="scrollbar-item">
                  <div className="shop-card">
                    <div className="card-banner img-holder" style={{ '--width': 540, '--height': 720 }}>
                      <img src="https://i.etsystatic.com/32583747/r/il/e85a92/5675413511/il_794xN.5675413511_fvxq.jpg" width="540" height="720" loading="lazy" alt="Facial cleanser" className="img-cover" />
                      <span className="badge" aria-label="20% off">13% off</span>
                    </div>
                    <div className="card-content">
                      <div className="price">
                        <del className="del">₹7,720</del>
                        <span className="span">₹ 6,716</span>
                      </div>
                      <h3>
                        <a href="https://www.etsy.com/in-en/listing/1632087618/new-leather-padded-comfort-crystal?click_key=684bae3d2a199faef013c1dd0a7a2a317899c329%3A1632087618&click_sum=730e2ba1&ref=shop_home_active_2&pro=1&frs=1" className="card-title">New Leather Padded Comfort Crystal Bridle With Colour Padding Dressage Bridle.</a>
                      </h3>
                      <div className="card-rating">
                        <div className="rating-wrapper" aria-label="5 star rating">
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                        </div>
                        <p className="rating-text">46 reviews</p>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="scrollbar-item">
                  <div className="shop-card">
                    <div className="card-banner img-holder" style={{ '--width': 540, '--height': 720 }}>
                      <img src="https://i.etsystatic.com/32583747/r/il/b4524f/5358299605/il_794xN.5358299605_l9t0.jpg" width="540" height="720" loading="lazy" alt="Facial cleanser" className="img-cover" />
                      <span className="badge" aria-label="20% off">13% off</span>
                    </div>
                    <div className="card-content">
                      <div className="price">
                        <del className="del">₹ 18,872</del>
                        <span className="span">₹ 16,418</span>
                      </div>
                      <h3>
                        <a href="https://www.etsy.com/in-en/listing/1570627761/zebra-treeless-bareback-synthetic-saddle?click_key=ba1ef7c4e998b9fd6fd683f9fa27cea1979e66ec%3A1570627761&click_sum=b9775047&ref=shop_home_active_19&pro=1&frs=1" className="card-title">Zebra Treeless Bareback synthetic saddle + matching Girth + All Size</a>
                      </h3>
                      <div className="card-rating">
                        <div className="rating-wrapper" aria-label="5 star rating">
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                        </div>
                        <p className="rating-text">46 reviews</p>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="scrollbar-item">
                  <div className="shop-card">
                    <div className="card-banner img-holder" style={{ '--width': 540, '--height': 720 }}>
                      <img src="https://i.etsystatic.com/32583747/r/il/01c7f0/5358387173/il_794xN.5358387173_99n1.jpg" width="540" height="720" loading="lazy" alt="Facial cleanser" className="img-cover" />
                      <span className="badge" aria-label="20% off">13% off</span>
                    </div>
                    <div className="card-content">
                      <div className="price">
                        <del className="del">₹ 18,872</del>
                        <span className="span">₹ 16,418</span>
                      </div>
                      <h3>
                        <a href="https://www.etsy.com/in-en/listing/1556452102/treeless-bareback-synthetic-whiteblack?click_key=755405342e66ba2957826406b84d24ff79c823fa%3A1556452102&click_sum=6ff5cde0&ref=shop_home_active_21&pro=1&frs=1" className="card-title">Treeless bareback Synthetic white/Black Tack Saddle Gift All Sizes For Horse.</a>
                      </h3>
                      <div className="card-rating">
                        <div className="rating-wrapper" aria-label="5 star rating">
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                        </div>
                        <p className="rating-text">46 reviews</p>
                      </div>
                    </div>
                  </div>
                </li>


                <li className="scrollbar-item">
                  <div className="shop-card">
                    <div className="card-banner img-holder" style={{ '--width': 540, '--height': 720 }}>
                      <img src="https://i.etsystatic.com/32583747/r/il/5e8e3c/5232270446/il_794xN.5232270446_mpls.jpg" width="540" height="720" loading="lazy" alt="Facial cleanser" className="img-cover" />
                      <span className="badge" aria-label="20% off">13% off </span>
                    </div>
                    <div className="card-content">
                      <div className="price">
                        <del className="del">₹ 30,024</del>
                        <span className="span">₹ 26,121</span>
                      </div>
                      <h3>
                        <a href="https://www.etsy.com/in-en/listing/1121299742/durable-western-leather-hand-carve-roper?click_key=b7881d4d327ea19fd3a439a8d0b10b996a7323ba%3A1121299742&click_sum=4e953a29&ref=shop_home_active_32&pro=1&frs=1" className="card-title">Durable Western Leather Hand Carve Roper Ranch Saddle Size: (12" To 18") Inch .</a>
                      </h3>
                      <div className="card-rating">
                        <div className="rating-wrapper" aria-label="5 star rating">
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                        </div>
                        <p className="rating-text">46 reviews</p>
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
                <h2 className="h2 section-title">Under ₹ 3,000</h2>
                <a href="https://www.etsy.com/shop/Ridex?ref=seller-platform-mcnav&sort_order=price_asc" className="btn-link">
                  <span className="span">Shop All Products</span>
                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>
              </div>
              <ul className="has-scrollbar">
                <li className="scrollbar-item">
                  <div className="shop-card">
                    <div className="card-banner img-holder" style={{ '--width': 540, '--height': 720 }}>
                      <img src="https://i.etsystatic.com/32583747/r/il/dc0985/4527607288/il_794xN.4527607288_6hbg.jpg" width="540" height="720" loading="lazy" alt="Facial cleanser" className="img-cover" />
                      <span className="badge" aria-label="20% off">13% off</span>
                    </div>
                    <div className="card-content">
                      <div className="price">
                        <del className="del">₹ 2,144</del>
                        <span className="span">₹ 1,865</span>
                      </div>
                      <h3>
                        <a href="https://www.etsy.com/in-en/listing/1380882704/new-durable-leather-empty-channel?click_key=f5a6e68cf3e05807b6ded7992d8237d39a95d7fb%3A1380882704&click_sum=12c386b7&ref=shop_home_active_1&pro=1&frs=1" className="card-title">New Durable Leather Empty channel Straight Bridle Brow band Straight Shape All Size .</a>
                      </h3>
                      <div className="card-rating">
                        <p className="rating-text">46 reviews</p>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="scrollbar-item">
                  <div className="shop-card">
                    <div className="card-banner img-holder" style={{ '--width': 540, '--height': 720 }}>
                      <img src="https://i.etsystatic.com/32583747/r/il/e3ffdb/5486163864/il_794xN.5486163864_c7hy.jpg" width="540" height="720" loading="lazy" alt="Facial cleanser" className="img-cover" />
                      <span className="badge" aria-label="20% off">13% off</span>
                    </div>
                    <div className="card-content">
                      <div className="price">
                        <del className="del">₹ 2,573</del>
                        <span className="span">₹ 2,238</span>
                      </div>
                      <h3>
                        <a href="https://www.etsy.com/in-en/listing/1606863315/gray-comfortable-slipper-kuffain-home?click_key=772481ebdaacee4d70013dc2f643b905135fa9fa%3A1606863315&click_sum=bf1befbb&ref=shop_home_active_3&pro=1&frs=1" className="card-title">Gray Comfortable Slipper Kuffain Home Shoes Halal Shoes Slippers .Leather Socks ,Winter Socks ,Kuff khuff Quff Men, Islam Mest, Feet Warmer.</a>
                      </h3>
                      <div className="card-rating">
                        <p className="rating-text">46 reviews</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="scrollbar-item">
                  <div className="shop-card">
                    <div className="card-banner img-holder" style={{ '--width': 540, '--height': 720 }}>
                      <img src="https://i.etsystatic.com/32583747/r/il/99d756/3459614118/il_794xN.3459614118_diwj.jpg" width="540" height="720" loading="lazy" alt="Facial cleanser" className="img-cover" />
                      <span className="badge" aria-label="20% off">13% off</span>
                    </div>
                    <div className="card-content">
                      <div className="price">
                        <del className="del">₹ 3,002</del>
                        <span className="span">₹ 2,611</span>
                      </div>
                      <h3>
                        <a href="https://www.etsy.com/in-en/listing/1118637847/set-2-x-1-best-quality-leather-empty?click_key=bd5c2527a1dabf3465d36b7ce08807f393bb2dcb%3A1118637847&click_sum=455d7532&ref=shop_home_active_14&pro=1&frs=1" className="card-title">Set 2 x 1 Best Quality Leather Empty Chanel Bridle Browband U Shape (8 MM) .</a>
                      </h3>
                      <div className="card-rating">
                        <p className="rating-text">46 reviews</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="scrollbar-item">
                  <div className="shop-card">
                    <div className="card-banner img-holder" style={{ '--width': 540, '--height': 720 }}>
                      <img src="https://i.etsystatic.com/32583747/r/il/6a621b/4527641740/il_794xN.4527641740_6ro1.jpg" width="540" height="720" loading="lazy" alt="Facial cleanser" className="img-cover" />
                      <span className="badge" aria-label="20% off">13% off</span>
                    </div>
                    <div className="card-content">
                      <div className="price">
                        <del className="del">₹ 3,002</del>
                        <span className="span">₹ 2,611</span>
                      </div>
                      <h3>
                        <a href="https://www.etsy.com/in-en/listing/1380888668/handcrafted-new-leather-empty-channel-v?click_key=fd121e562bc0a77d7a56a036e9da2121399d148a%3A1380888668&click_sum=57ed8e4f&ref=shop_home_active_15&pro=1&frs=1" className="card-title">Handcrafted New Leather Empty channel V shape Bridle Brow band All Size .</a>
                      </h3>
                      <div className="card-rating">
                        <p className="rating-text">46 reviews</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="scrollbar-item">
                  <div className="shop-card">
                    <div className="card-banner img-holder" style={{ '--width': 540, '--height': 720 }}>
                      <img src="https://i.etsystatic.com/32583747/r/il/9f8472/5486179234/il_794xN.5486179234_oxb2.jpg" width="540" height="720" loading="lazy" alt="Facial cleanser" className="img-cover" />
                      <span className="badge" aria-label="20% off">13% off</span>
                    </div>
                    <div className="card-content">
                      <div className="price">
                        <del className="del">₹ 2,573</del>
                        <span className="span">₹ 2,238</span>
                      </div>
                      <h3>
                        <a href="https://www.etsy.com/in-en/listing/1592700802/comfortable-slipper-kuffain-home-shoes?click_key=7702d0c35401b23131c4174a00bf74d04d37856c%3A1592700802&click_sum=eb0e3da7&ref=shop_home_active_5&pro=1&frs=1" className="card-title">Comfortable Slipper Kuffain Home Shoes Halal Shoes Slippers .Leather Socks ,Winter Socks ,Islam Mest, Feet Warmer.Kuff khuff Quff Men,Green</a>
                      </h3>
                      <div className="card-rating">
                        <p className="rating-text">46 reviews</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="scrollbar-item">
                  <div className="shop-card">
                    <div className="card-banner img-holder" style={{ '--width': 540, '--height': 720 }}>
                      <img src="images/product-07.jpg" width="540" height="720" loading="lazy" alt="Facial cleanser" className="img-cover" />
                      <span className="badge" aria-label="20% off">13% off</span>
                    </div>
                    <div className="card-content">
                      <div className="price">
                        <del className="del">₹ 2,573</del>
                        <span className="span">₹ 2,238</span>
                      </div>
                      <h3>
                        <a href="https://www.etsy.com/in-en/listing/1606865403/beige-kuff-khuff-quff-men-size-shoes?click_key=366b32947d4701738cd765677af3c11adeee5dd4%3A1606865403&click_sum=b7edb6dc&ref=shop_home_active_13&pro=1&frs=1" className="card-title">Beige Kuff khuff Quff Men Size, Shoes Slippers Islam Mest, Feet Warmer, Halal Slippers,Leather Socks,Winter socks,Khuffain with One Wheeled,</a>
                      </h3>
                      <div className="card-rating">
                        <p className="rating-text">46 reviews</p>
                      </div>
                    </div>
                  </div>
                </li>
                {/* Repeat the pattern for other products */}
              </ul>
            </div>
          </section>





          {/* <section className="section banner" aria-label="banner" data-section>
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
          </section> */}





          <section className="section feature" aria-label="feature" data-section>
            <div className="container">
              <h2 className="h2-large section-title">Why Shop with Ridex?</h2>
              <ul className="flex-list">
                <li className="flex-item">
                  <div className="feature-card">
                    <img src="images/premium.jpg" width="204" height="236" loading="lazy" alt="Guaranteed PURE" className="card-icon" />
                    <h3 className="h3 card-title">Premium Quality Horse Accessories</h3>
                    <p className="card-text">
                    All Ridex products are crafted with the finest materials and undergo rigorous quality checks to ensure excellence in every detail.
                    </p>
                  </div>
                </li>
                <li className="flex-item">
                  <div className="feature-card">
                    <img src="images/handcrafted.jpg" width="204" height="236" loading="lazy" alt="Completely Cruelty-Free" className="card-icon" />
                    <h3 className="h3 card-title">Handcrafted Excellence in Every Accessory</h3>
                    <p className="card-text">
                    At Ridex, we take pride in handcrafting each accessory with meticulous attention to detail. From selecting the finest materials to conducting thorough quality checks, we ensure that every product meets our standards of excellence.                    </p>
                  </div>
                </li>
                <li className="flex-item">
                  <div className="feature-card">
                    <img src="images/quality.png" width="204" height="236" loading="lazy" alt="Ingredient Sourcing" className="card-icon" />
                    <h3 className="h3 card-title">Unparalleled Quality for Your Equine Companion</h3>
                    <p className="card-text">
                    Ridex is committed to providing unparalleled quality in every accessory we offer. Our products are crafted with the utmost care and undergo stringent quality assurance processes to guarantee durability, functionality, and style for your equine companion.                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>


          <section className="section offer" id="offer" aria-label="offer" data-section>
            <div className="container">
              <figure className="offer-banner">
                {/* <img src="images/offer-banner-1.jpg" width="305" height="408" loading="lazy" alt="offer products" className="w-100" /> */}
                <iframe src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/video_20231030_155511_wf4hox.mp4" width="305" height="408" loading="lazy" alt="offer products" className="w-100" />
                <img src="https://i.etsystatic.com/32583747/r/il/896403/3799812689/il_794xN.3799812689_tm2j.jpg" width="450" height="625" loading="lazy" alt="offer products" className="w-100" />
              </figure>
              <div className="offer-content">
                <p className="offer-subtitle">
                  <span className="span">Special Offer</span>
                  <span className="badge" aria-label="20% off">13% off</span>
                </p>
                <h2 className="h2-large section-title">New Leather Australian Stock White Horse Tack Saddle Size 10"-21" with accessories.</h2>
                <p className="section-text">
                Materials: Leather, Handmade item, Accessories free
                </p>
             
                <a href="https://www.etsy.com/in-en/listing/1200452407/new-leather-australian-stock-white-horse?click_key=ed9a9de959f2fb0e0125e1f2cfc629c9289f09a3%3A1200452407&click_sum=610205d5&ref=shop_home_feat_1&pro=1&frs=1" className="btn btn-primary"><h3> Get Only ₹29,852</h3></a>
              </div>
            </div>
          </section>


          {/* <section className="section blog" id="blog" aria-label="blog" data-section>
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
          </section> */}



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
              <li><a href="https://www.etsy.com/shop/Ridex?ref=seller-platform-mcnav&sort_order=custom#items" className="footer-link">New Products</a></li>
              <li><a href="https://www.etsy.com/shop/Ridex?ref=seller-platform-mcnav&sort_order=custom#items" className="footer-link">Best Sellers</a></li>
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Information</p>
              </li>
              <li><a href="https://www.etsy.com/shop/Ridex?ref=seller-platform-mcnav&sort_order=custom#items" className="footer-link">Contact Us</a></li>
              <li><a href="https://www.etsy.com/shop/Ridex?ref=seller-platform-mcnav&sort_order=custom#items" className="footer-link">Shipping FAQ</a></li>
              <li><a href="https://www.etsy.com/shop/Ridex?ref=seller-platform-mcnav&sort_order=custom#items" className="footer-link">Terms & Conditions</a></li>
              <li><a href="https://www.etsy.com/shop/Ridex?ref=seller-platform-mcnav&sort_order=custom#items  " className="footer-link">Privacy Policy</a></li>
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
                &copy; 2024 Ridex
              </p>
              <ul className="social-list">
                <li><a href="#" className="social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
                <li><a href="#" className="social-link"><ion-icon name="logo-facebook"></ion-icon></a></li>
                <li><a href="#" className="social-link"><ion-icon name="logo-instagram"></ion-icon></a></li>
                <li><a href="#" className="social-link"><ion-icon name="logo-youtube"></ion-icon></a></li>
              </ul>
            </div>
            <a href="#" className="logo">
              <img src="https://i.ebayimg.com/images/g/-noAAOSwDX9kaFtY/s-l140.webp" width="179" height="26" loading="lazy" alt="Glowing" />
            </a>
            {/* <img src="images/pay.png" width="313" height="28" alt="available all payment method" className="w-100" /> */}
          </div>
        </div>
      </footer >



    </>
  )
}

export default App
