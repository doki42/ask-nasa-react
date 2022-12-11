import React from "react";
import './App.css';
import {Layout} from "./Layout/Layout";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import {GetMonthlyPic} from "./services/Gallery"
import {GetPic} from "./services/ApiRequest";


function App() {


  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='/' element={<GetPic/>}></Route>
                    <Route path='/Home' element={<GetPic/>}></Route>
                    <Route path='/Gallery' element={<GetMonthlyPic/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
