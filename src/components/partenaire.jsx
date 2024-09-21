import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



  


export const Partenaire = ()=>{

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
      };

    return(
        <div className="partenaires">
            <h3>La confiance des meilleurs au monde</h3>
        <div className="partenaire-container">
        <Slider {...settings}>
          <div>
            <img
              src="src/images/biso243.jpg"
              alt="Slide 1"
              className="tailles"
            />
          </div>
          <div>
            <img
              src="src/images/Congo-Bralima-logo.png"
              alt="Slide 2"
              className="tailles"
            />
          </div>
          <div>
            <img
              src="src/images/images.jpg"
              alt="Slide 2"
              className="tailles"
            />
          </div>
          {/* <div>
            <img
              src=""
              alt="Slide 3"
            />
          </div>
          <div>
            <img
              src=""
              alt="Slide 4"
            />
          </div>
          <div>
            <img
              src=""
              alt="Slide 5"
            />
          </div> */}
        </Slider>
      </div>

      </div>
    )
}
