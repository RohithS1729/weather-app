import React, { useState } from "react";
import Navigation from "../components/navigation";
import style from './cities.css'
import Modal from "../components/modal";
import PropTypes from 'prop-types'
import LeftCitiesComp from "../components/leftCitiesComp";
import RightCitiesComp from "../components/rightCitiesComp";

import ContextApi from "../components/ContextApi";



const Cities=({listCity,changeCity,setlistCity,cityDisplay,setcityDisplay})=>{
    const [toggleModal,setToggleModal]=useState(false)
    let highlight='-1'
    if(cityDisplay){
        highlight=cityDisplay.id
    }

    const page='Cities'
    return(
        <div className="citiesPage">
            
            <Navigation  pages={page}/>
            <ContextApi>

                {toggleModal?
                    <Modal  addCity={changeCity} toggleModals={setToggleModal}/>:
                    null}

            </ContextApi>
            <main className="citiesMain">
                    <LeftCitiesComp listCity={listCity} setToggleModal={setToggleModal} setcityDisplay={setcityDisplay} highlight={highlight}/>

                {/* city details */}
                {
                    cityDisplay?<RightCitiesComp cityDisplay={cityDisplay} listCity={listCity} setlistCity={setlistCity}/>:null

                }
            </main>

        </div>
    )
}
export default Cities

Cities.propTypes={
    listCity:PropTypes.array,
    changeCity:PropTypes.func,
    setlistCity:PropTypes.func,
    cityDisplay:PropTypes.shape({
        id:PropTypes.string,
        name:PropTypes.string,
        desc:PropTypes.string,
        temp:PropTypes.string,
        humidity:PropTypes.string,
        favFlag:PropTypes.bool
    }),
    setcityDisplay:PropTypes.func
}