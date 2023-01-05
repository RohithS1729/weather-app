import './App.css';
import Home from './pages/home'
import {Helmet} from "react-helmet";

import Cities from './pages/cities';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import React, { createContext, useEffect, useState } from 'react';
import CitiesData from './components/jsonDummyData';

//first change

export const context=createContext()
function App() {
  // main data 
  const [mainData,setmainData]=useState([]);

  // list
  const [cityData,setcitiesData]=useState([])
  //preserve select
  const [selectedCity,setselectedCity]=useState()

  useEffect(()=>{
    setmainData([...CitiesData])
  },[])

  return (
    <BrowserRouter>
        <Helmet>
                <meta charSet="utf-8" />
                <title> Weather Application </title>


        </Helmet>
        <context.Provider value={{actualData:mainData,changeData:setmainData}}>
          <Routes>
              <Route path='/' element={<Home cityList={cityData} setcityList={setcitiesData} changeCity={setcitiesData} />}></Route>


              <Route path='/cities' element={<Cities setlistCity={setcitiesData} listCity={cityData} changeCity={setcitiesData} cityDisplay={selectedCity} setcityDisplay={setselectedCity}  />}></Route>
          </Routes>
        </context.Provider>

    </BrowserRouter>
  );
}

export default App;
