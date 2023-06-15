import './App.css';
import Footer from './Global-Components/Footer';
import ExplorePage from './pages/ExplorePage';
import LandingPage from './pages/LandingPage';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    /*We wrap our content first with <BrowserRouter>.
Then we define our <Routes>. An application can have multiple <Routes>. 
Layout is used as an example here- will be replaced by header with different route paths.
<Route>s can be nested. The first <Route> has a path of / and renders the Layout component.
The nested <Route>s inherit and add to the parent route. So the explore path is combined with the parent and becomes /explore.
The Landingpage component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is /.
Setting the path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page.-- will come back to this !
    */
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<LandingPage/>}/>
            <Route path="explore" element={<ExplorePage/>}/>
          </Route>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
