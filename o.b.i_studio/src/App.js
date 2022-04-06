import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContent from './Components/MainContent';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <MainContent></MainContent>
      
    </div>
  );
}

export default App;
