import React from "react";
import "./index.css";
import CarouselHomePage from "../../Global-Components/Carousel";

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

        <button className="button" onClick={handleClick}>
          Start exploring...
        </button>
      </div>
      <div id="about-us">
      <h2 className="about-us-heading">Why WalkMate?</h2>
      <div className="section2">
        


          <div className="community">
            <img 
              className="why-icon" 
              src="/circle.jpg"
              alt="graphic icon"
            />
            <div className="why-text">
              <h3>Community</h3>
              <p className="communityP">
                WalkMate is community-driven, we regularly host events to suit
                everyone. We connect people through nature and nature through people.
              </p>
            </div>
          </div>

          <div className="welcome1">
            <img 
                className="why-icon" 
                src="/flagdown.jpg"
                alt="graphic icon"
              />
              <div className="why-text">
                <h3>Everyone Welcome</h3>
                <p className="everyoneWelcomeP">
                  Whether you're an avid walker, or someone who has never taken
                  advantage of our stunning landscapes. There is something for everyone
                  at WalkMate.
                </p>
              </div>
          </div>

          <div className="enjoyable">
          <img 
                className="why-icon" 
                src="/triangle.jpg"
                alt="graphic icon"
              />
              <div className="why-text">
                <h3>Enjoyable</h3>
                <p className="enjoyableP">
                  WalkMate is community-driven, we regularly host events to suit
                  everyone. We connect people through nature and nature through people.
                </p>
              </div>
          </div>

          <div className="reliable">
          <img 
                className="why-icon" 
                src="/flagup.jpg"
                alt="graphic icon"
              />
              <div className="why-text">
                <h3>Reliable</h3>
                <p className="reliableP">
                  100% of our users have given us a 5 star rating in terms of
                  reliability. Our routes are safe, secure and our events are all
                  planned meticulously according to weather predictions.
                </p>
              </div>
          </div>

      </div>
</div>
      <div className="section3" id="events">
        <h1 className="carousel-title">Upcoming Events</h1>
        <CarouselHomePage />
      </div>

      <div className="section4">
        <div className="testimonial-header">
      <img className="testimonial-img1" src="./shapes_4.png" alt="shapes logo"></img>
      <h1 className="testimonial-title">Testimonials</h1>
      <img className="testimonial-img2" src="./shapes_4.png" alt="shapes logo"></img>
      </div>

        <div className="container-grid">

        <div className="testimonial1">
          <img className="img1" src="./sami.png " alt=""></img>
          <p className="testimonialP">
            “WalkMate has helped me overcome my social anxiety ! I don’t like
            meeting new people in confined spaces. The events have allowed me to
            meet people outdoors while enjoying a pleasant stroll. It has been
            wonderful.” <br></br>
          </p>
          <p className = "name"> John </p>
        </div>

        <div className="testimonial2">
          <img className="img2" src="./hilda.png" alt=""></img>
          <p className="testimonialP">
            "I always struggled to find accessible trails near me which were
            also pram-friendly. It always put me off going for walks as there
            was never a planned route with an estimated time length. WalkMate
            has done all the hard work for me !" <br></br>
          </p>
          <p className ="name"> Bryony </p>
        </div>

        <div className="testimonial3">
          <img className="img3" src="./businessman.png" alt=""></img>
          <p className="testimonialP">
            "I never usually find the time to go out as I’m always working. When
            I’m not at my desk I want to be outside enjoying fresh air. There
            are many apps for the extreme hiker but WalkMate is the best fit for
            a casual stroller like me!" <br></br>
          </p>
          <p className = "name"> Dave </p>
        </div>
        </div>
      </div>
      
    </div>
  );
}

export default LandingPage;
