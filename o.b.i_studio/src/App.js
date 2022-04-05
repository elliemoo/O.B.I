import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Art from './components/Art';
import { Container } from '@mui/material';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  return (
    // <div className='container'>
    //   <Header/>
    //   <Body/>
    // </div>

    <Router>
      <div className='App'>
        <Header/>
        <div className='Content'>
          <Routes>
            <Route path="/" element={<Body/>} ></Route>
            <Route path='/Art' element={<Art/>}></Route>
          </Routes>
          
        </div>
      </div>
    </Router>
      
    
  );
}

export default App;
