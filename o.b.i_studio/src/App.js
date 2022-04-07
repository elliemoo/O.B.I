import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Art from './Components/Art';
import Team from './Components/Team';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContent from './Components/MainContent';
import ScrollToTop from './Components/ScrollToTop';
import RoadMap from './Components/RoadMap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faOpensea } from "./Components/BrandLogos/Opensea";
library.add(fab);
library.add(faOpensea);

function App() {
  return (
    <Router>
      <Header/>
      <Routes >
        <Route path='/Art' element={<Art/>}></Route>
        <Route path='/' element={<MainContent/>} ></Route>
        {/* <Route path='/Art' element={<Team></Team>}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;


