import './App.css';
import ExplorePage from './ExplorePage';
import MapDisplay from './ExplorePage/MapDisplay';
import CarouselTest from './Global-Components/Carousel';
import LandingPage from './LandingPage';

function App() {
  return (
    <div className="App">
      {<h1>
        WalkMate Coming Soon!
      </h1> }

        <ExplorePage/>

      <LandingPage/>

    </div>
  );
}

export default App;
