import './App.css';
import Header from './Components/Header';
import Art from './Components/Art';
import Team from './Components/Team';
import RoadMap from './Components/RoadMap';
import LustPage from './Races/Lust/Lust.js';
import WrathPage from './Races/Wrath/Wrath.js';
import GluttonyPage from './Races/Gluttony/Gluttony.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContent from './Components/MainContent';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faOpensea } from "./Components/BrandLogos/Opensea";
import Footer from './Components/Footer';
library.add(fab);
library.add(faOpensea);

function App() {
  return (
    <Router>
      <Header/>
      <Routes >
        <Route path='/Art' element={<Art/>}></Route>
        <Route path='/' element={<MainContent/>} ></Route>
        <Route path='/Team' element={<Team/>}></Route>
        <Route path='/RoadMap' element={<RoadMap/>}></Route>
        <Route path='/Lust' element={<LustPage/>}></Route>
        <Route path='/Wrath' element={<WrathPage/>}></Route>
        <Route path='/Gluttony' element={<GluttonyPage/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;


