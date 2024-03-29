import React from "react";
import "./index.css";
import CarouselHomePage from "../../Global-Components/Carousel";
import { LandingPageCarouselInfo } from "../../Utility/data";
/*

Create Hero Image
    - wrap image in a div


Create CTA
    - Create button
    - On-click, navigate to map page
    - Utilize colour palette from hi-fi wireframe


Create About Us
    - Create About Us section - wrap in p tags
    - add relevant background images

Create Upcoming Events Carousel (cards that you can scroll through - component that will be reused)

*/

/*function App() {
    const [map, getMapl] = useState(null);
    const [map, setMap] = useState(null);
}

function MyButton() {
    function handleClick() {
      alert('You clicked me!');
    }
  
    return (
      <button onClick={handleClick}>
        Click me
      </button>
    );
  }
*/

function handleClick() {}

function LandingPage() {
  return (
    <div>
      <div className="section1" id="home">
        <h1>Want To Go For A Walk?</h1>
        <a href="/explore#explore">
          <button className="button" onClick={handleClick}>
            Start exploring...
          </button>
        </a>
      </div>
      <div id="about-us">
        <h2 className="about-us-heading">Why WalkMate?</h2>
        <div className="section2">
          <div className="community">
            <img className="why-icon" src="/assets/circle.jpg" alt="graphic icon" />
            <div className="why-text">
              <h3>Community</h3>
              <p className="communityP">
                WalkMate is community-driven, we regularly host events to suit
                everyone. We connect people through nature and nature through
                people.
              </p>
            </div>
          </div>

          <div className="welcome1">
            <img className="why-icon" src="/assets/flagdown.jpg" alt="graphic icon" />
            <div className="why-text">
              <h3>Everyone Welcome</h3>
              <p className="everyoneWelcomeP">
                Whether you're an avid walker, or someone who has never taken
                advantage of our stunning landscapes. There is something for
                everyone at WalkMate.
              </p>
            </div>
          </div>

          <div className="enjoyable">
            <img className="why-icon" src="/assets/triangle.jpg" alt="graphic icon" />
            <div className="why-text">
              <h3>Enjoyable</h3>
              <p className="enjoyableP">
                We want to make sure that everyone has a great time when they
                use WalkMate. We have a range of routes to suit all abilities
                and interests, such as routes with great suggestions for foraging
                or stunning views.
              </p>
            </div>
          </div>

          <div className="reliable">
            <img className="why-icon" src="/assets/flagup.jpg" alt="graphic icon" />
            <div className="why-text">
              <h3>Reliable</h3>
              <p className="reliableP">
                We strive to make all of our routes as accessible as possible, 
                so that everyone can enjoy the beauty of nature. All our routes 
                are tested by our team of walkers to ensure they are safe and
                enjoyable.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section3" id="events">
        <h1 className="carousel-title">Upcoming Events</h1>
        <CarouselHomePage arr={LandingPageCarouselInfo} />
      </div>

      <div className="section4">
        <div className="testimonial-header">
          <img
            className="testimonial-icon"
            src="./assets/shapes_4.png"
            alt="shapes logo"
          ></img>
          <h1 className="testimonial-title">Testimonials</h1>
          <img
            className="testimonial-icon"
            src="./assets/shapes_4.png"
            alt="shapes logo"
          ></img>
        </div>

        <div className="container-grid">
          <div className="testimonial1">
            <img className="testimonial-img" src="./assets/male-testimonial.png " alt=""></img>
            <p className="testimonialP">
              “WalkMate has helped me overcome my social anxiety ! I don’t like
              meeting new people in confined spaces. The events have allowed me
              to meet people outdoors while enjoying a pleasant stroll. It has
              been wonderful.” <br></br>
            </p>
            <p className="name"> - Jacob </p>
          </div>

          <div className="testimonial2">
            <img className="testimonial-img" src="./assets/mum-testimonial.png" alt=""></img>
            <p className="testimonialP">
              "I always struggled to find accessible trails near me which were
              also pram-friendly. It always put me off going for walks as there
              was never a planned route with an estimated time length. WalkMate
              has done all the hard work for me !" <br></br>
            </p>
            <p className="name"> - Isolde </p>
          </div>

          <div className="testimonial3">
            <img className="testimonial-img" src="./assets/businessman.png" alt=""></img>
            <p className="testimonialP">
              "I never usually find the time to go out as I’m always working.
              When I’m not at my desk I want to be outside enjoying fresh air.
              There are many apps for the extreme hiker but WalkMate is the best
              fit for a casual stroller like me!" <br></br>
            </p>
            <p className="name"> - David </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
