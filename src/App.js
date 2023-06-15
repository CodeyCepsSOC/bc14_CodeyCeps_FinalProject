import './App.css';
import ExplorePage from './ExplorePage';
import MapDisplay from './ExplorePage/MapDisplay';
import CarouselTest from './Global-Components/Carousel';
import LandingPage from './LandingPage';
import Header from './Global-Components/Header';

function App() {
  return (
    <div className="App">
      {/* {<h1>
        WalkMate Coming Soon!
      </h1> } */}
        <Header />
        <ExplorePage/>
        <LandingPage/>
    </div>
  );
}

export default App;
