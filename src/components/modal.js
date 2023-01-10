import React, {  useContext, useEffect, useState } from "react";
import style from './modal.css'
import PropTypes from 'prop-types'

import {context} from './router'
import CompModalCities from "./CompModalCities";
import CompModalSearch from "./CompModalSearch";
import CompModalClose from "./CompModalClose";

import {MainCityData} from "./ContextApi";

const Modal =({toggleModals,addCity})=>{
    const [serachArr,setsearchArr]=useState([])   
    const city1=useContext(MainCityData)
    const cityName=city1.mainData

    const changeCity=city1.setmainData


    // const data=useContext(MainCityData)
   

    useEffect(()=>{
        
        setsearchArr([...cityName])
    },[cityName])

    return(
        <div>
            <div className="ModalOverlay">
                <div className="modalDiv">
                    <CompModalClose toggleModals={toggleModals}/>

                    <CompModalSearch cityName={cityName} setsearchArr={setsearchArr}/>

                    <CompModalCities cityName={cityName} changeCity={changeCity} addCity={addCity} serachArr={serachArr} />


                </div>

            </div>
        </div>
    )
}
export default Modal

Modal.propTypes={
    toggleModals:PropTypes.func,
    addCity:PropTypes.func

}