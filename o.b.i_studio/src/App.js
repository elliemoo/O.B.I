import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Art from './Components/Art';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContent from './Components/MainContent';

function App() {
  return (
    <Router>
      <div className='App'>
      <Header></Header>
        
      <Routes>
      
        <Route path='/' element={<MainContent/>} ></Route>
        <Route path='/Art' element={<Art/>}></Route>
        {/* <Route path='/Art' element={<Team></Team>}></Route> */}
      </Routes>
      
      </div>
    </Router>
    
  );
}

export default App;
