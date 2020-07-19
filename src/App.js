import React from 'react';
import logo from './logo.svg';
import Navbar from './components/shared/navbar/index';
import Banner from './components/home/banner/index';
import Form from './components/home/form/index';
import Caption from './components/home/caption/index'

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Banner></Banner>
        <Caption></Caption>
        <Form></Form>

    </div>
  );
}

export default App;
