import React, {  createContext,useEffect,useState,useContext } from 'react';
import CitiesData from './jsonDummyData';

export const MainCityData=createContext(null)

  
  export const useEmitter = () => useContext(MainCityData);

const ContextApi = ({children}) => {
    const [mainData,setmainData]=useState([]);
    // console.log(children)
    useEffect(()=>{
        setmainData([...CitiesData])
    },[])
    const value= {
        mainData,setmainData
    }
    return         <MainCityData.Provider value={value}>{children}</MainCityData.Provider>
    
};



export default ContextApi;