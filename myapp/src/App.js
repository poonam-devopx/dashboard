import React from 'react'
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import './App.css'
import Home from './components/pages/home/Home';
import Signup from './Signup';
import { Container } from "react-bootstrap"

function App() {
  return (
    <>
    {/* <Topbar/>
    <div className="container">
      <Sidebar/>
      <Home className="home"/>
      
    </div> */}
<Container className="d-flex align-item-center" style={{minHeight:"100vh"}}>
  <div className="w-100 " style={{minWidth:"400px"}}>
   <Signup/>
   </div>
   </Container>
    

    </>
  );
}

export default App;
