import React from 'react';

function Carousel() {

    const carouselStyle1 = {
        "width": "100%",
        "height": "500px",
        "background-position": "center",
        "background-size": "cover",
        "background-image": "url('./img2.jpg')"
      }
      const carouselStyle2 = {
        "width": "100%",
        "height": "500px",
        "background-position": "center",
        "background-size": "cover",
        "background-image": "url('./online.jpg')"
      }
      const carouselStyle3 = {
        "width": "100%",
        "height": "500px",
        "background-position": "center",
        "background-size": "cover",
        "background-image": "url('./img3.jpg')"
      }

    return (
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div style={carouselStyle1} className="carousel-image carousel1"></div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Tutoring Online System</h5>
              <p>Learn anytime, anywhere</p>
            </div>
          </div>
          <div className="carousel-item">
            <div style={carouselStyle2} className="carousel-image carousel2"></div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Register as a student or a tutor </h5>
              <p>you choose the timings that suits you.</p>
            </div>
          </div>
          <div className="carousel-item">
            <div style={carouselStyle3} className="carousel-image carousel3"></div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Variety of courses to choose from</h5>
              <p>Courses are tailored to the needs of the students.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
}

export default Carousel;