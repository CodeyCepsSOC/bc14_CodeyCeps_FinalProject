import './App.css';
import ExplorePage from './pages/ExplorePage';
import LandingPage from './pages/LandingPage';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<LandingPage/>}/>
          <Route path="explore" element={<ExplorePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
