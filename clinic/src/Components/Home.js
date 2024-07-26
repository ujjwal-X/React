import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="slider-area">
        <div className="slider-active dot-style">
          <div className="single-slider d-flex align-items-center slider-height">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-8 col-md-10">
                  <div className="hero-wrapper">
                    <div className="video-icon">
                      <Link
                        className="popup-video btn-icon bg-dark"
                        href="https://www.youtube.com/watch?v=up68UAfH0d0"
                        data-animation="bounceIn"
                        data-delay=".4s"
                      >
                        <i className="fas fa-play"></i>
                      </Link>
                    </div>
                    <div className="hero__caption">
                      <h1 data-animation="fadeInUp" data-delay=".3s">
                        Health is wealth keep it healthy
                      </h1>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        Almost before we knew it, we
                        <br />
                        had left the ground
                      </p>
                      <Link
                        to="services.html"
                        className="btn bg-dark"
                        data-animation="fadeInLeft"
                        data-delay=".3s"
                      >
                        Make an appointment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
