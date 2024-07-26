import { Link } from "react-router-dom";

export default function Service() {
  return (
    <>
      <section
        className="wantToWork-area section-bg3"
        data-background="assets/img/gallery/section_bg01.png"
      >
        <div className="container">
          <div className="wants-wrapper w-padding2">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-7 col-lg-9 col-md-8">
                <div className="wantToWork-caption wantToWork-caption2">
                  <h2>
                    Happy mind <br />
                    healthy life
                  </h2>
                  <p>
                    Almost before we knew it, we
                    <br />
                    had left the ground
                  </p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4">
                <Link to="services.html" className="btn f-right sm-left">
                  Take a Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="service-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <img src="assets/img/icon/services1.svg" alt="" />
                </div>
                <div className="cat-cap">
                  <h5>
                    <a to="services.html">Physical Activity</a>
                  </h5>
                  <p>
                    Praesent porttitor, nulla vitae posuere iaculis, arcu nisl
                    dignissim dolor, a pretium mi sem ut ipsum.
                  </p>
                  <Link to="services.html" className="plus-btn">
                    <i className="ti-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <img src="assets/img/icon/services2.svg" alt="" />
                </div>
                <div className="cat-cap">
                  <h5>
                    <a to="services.html">Physical Activity</a>
                  </h5>
                  <p>
                    Praesent porttitor, nulla vitae posuere iaculis, arcu nisl
                    dignissim dolor, a pretium mi sem ut ipsum.
                  </p>
                  <Link to="services.html" className="plus-btn">
                    <i className="ti-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <img src="assets/img/icon/services3.svg" alt="" />
                </div>
                <div className="cat-cap">
                  <h5>
                    <a to="services.html">Physical Activity</a>
                  </h5>
                  <p>
                    Praesent porttitor, nulla vitae posuere iaculis, arcu nisl
                    dignissim dolor, a pretium mi sem ut ipsum.
                  </p>
                  <Link to="services.html" className="plus-btn">
                    <i className="ti-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
