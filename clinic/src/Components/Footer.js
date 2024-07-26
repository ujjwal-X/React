import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div
          className="footer-wrappr section-bg3"
          data-background="assets/img/gallery/footer-bg.png"
        >
          <div className="footer-area footer-padding">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-logo mb-25">
                      <Link to="index.html">
                        <img src="assets/img/logo/logo2_footer.png" alt="" />
                      </Link>
                    </div>
                    <d iv className="header-area">
                      <div className="main-header main-header2">
                        <div className="menu-main d-flex align-items-center justify-content-start">
                          <div className="main-menu main-menu2">
                            <nav>
                              <ul>
                                <li>
                                  <Link to="/">Home</Link>
                                </li>
                                <li>
                                  <Link to="about">About</Link>
                                </li>
                                <li>
                                  <Link to="services">Services</Link>
                                </li>
                                <li>
                                  <Link to="blog">Blog</Link>
                                </li>
                                <li>
                                  <Link to="contact">Contact</Link>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </d>

                    <div className="footer-social mt-50">
                      <Link to="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link to="https://bit.ly/sai4ull">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link to="#">
                        <i className="fab fa-pinterest-p"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div className="single-footer-caption">
                    <div className="footer-tittle mb-50">
                      <h4>Subscribe newsletter</h4>
                    </div>

                    <div className="footer-form">
                      <div id="mc_embed_signup">
                        <form
                          target="_blank"
                          action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                          method="get"
                          className="subscribe_form relative mail_part"
                          novalidate="true"
                        >
                          <input
                            type="email"
                            name="EMAIL"
                            id="newsletter-form-email"
                            placeholder=" Email Address "
                            className="placeholder hide-on-focus"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Enter your email'"
                          />
                          <div className="form-icon">
                            <button
                              type="submit"
                              name="submit"
                              id="newsletter-submit"
                              className="email_icon newsletter-submit button-contactForm"
                            >
                              Subscribe
                            </button>
                          </div>
                          <div className="mt-10 info"></div>
                        </form>
                      </div>
                    </div>
                    <div className="footer-tittle">
                      <div className="footer-pera">
                        <p>
                          Praesent porttitor, nulla vitae posuere iaculis, arcu
                          nisl dignissim dolor, a pretium misem ut ipsum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom-area">
            <div className="container">
              <div className="footer-border">
                <div className="row">
                  <div className="col-xl-10">
                    <div className="footer-copy-right">
                      <p>
                        Copyright &copy;
                        <script>
                          document.write(new Date().getFullYear());
                        </script>
                        All rights reserved by
                        {/* <i className="fa fa-heart" aria-hidden="true"></i> */}
                        <Link to="https://colorlib.com" target="_blank">
                          Ansh Clinic
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
