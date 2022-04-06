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

function App() {
  return (
    // <Router>
      
    //   <Header/>
    //   <ScrollToTop/>
    //   <Routes>
    //     <Route path='/' element={<MainContent/>} ></Route>
    //     <Route path='/Art' element={<Art/>}></Route>
    //     {/* <Route path='/Art' element={<Team></Team>}></Route> */}
    //   </Routes>
    //   <div> this is my footer </div>
    // </Router>
    <Router>
      <Header/>
      <ScrollToTop/>
      <MainContent/>
      <Art/>
      <Team/>
      <RoadMap/>
    </Router>
  );
}

export default App;
