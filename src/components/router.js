import React,{ createContext, useEffect, useState } from "react";
import Home from '../pages/home'
import Cities from '../pages/cities';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import CitiesData from './jsonDummyData';

export const context=createContext()
const Router=()=>{
    const [mainData,setmainData]=useState([]);
    // list
    const [cityData,setcitiesData]=useState([])
    //preserve select
    const [selectedCity,setselectedCity]=useState()

    useEffect(()=>{
        setmainData([...CitiesData])
      },[])
    return(
        <BrowserRouter>

        {/* <context.Provider value={{actualData:mainData,changeData:setmainData}}> */}
          <Routes>
              <Route path='/' element={<Home cityList={cityData} setcityList={setcitiesData} changeCity={setcitiesData} />}></Route>


              <Route path='/cities' element={<Cities setlistCity={setcitiesData} listCity={cityData} changeCity={setcitiesData} cityDisplay={selectedCity} setcityDisplay={setselectedCity}  />}></Route>
          </Routes>
        {/* </context.Provider> */}

    </BrowserRouter>
    )
}
export default Router