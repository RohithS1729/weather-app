import React,{ createContext, useState } from "react";
import Home from '../pages/home'
import Cities from '../pages/cities';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

export const context=createContext()
const Router=()=>{
    // list
    const [cityData,setcitiesData]=useState([])
    //preserve select
    const [selectedCity,setselectedCity]=useState()


    return(
        <BrowserRouter>

        {/* <context.Provider value={{actualData:mainData,changeData:setmainData}}> */}
          <Routes>
              <Route path='/' element={<Home cityList={cityData}  changeCity={setcitiesData} />}></Route>


              <Route path='/cities' element={<Cities setlistCity={setcitiesData} listCity={cityData} changeCity={setcitiesData} cityDisplay={selectedCity} setcityDisplay={setselectedCity}  />}></Route>
          </Routes>
        {/* </context.Provider> */}

    </BrowserRouter>
    )
}
export default Router