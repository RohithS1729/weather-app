import React, { useState } from "react";
import style from './home.css'
import Navigation from "../components/navigation";
import Header from "../components/header";
import Modal from "../components/modal";
// import starOn from '../images/starOn.png'
import PropTypes from 'prop-types'

import FavouriteComp from "../components/favourite";


const Home=({changeCity,cityList})=>{
    const [toggleModal,setToggleModal]=useState(false)
    const [change,setchange]=useState(true)
    const page='Home'

    
    return(
        <div className="homePage">
            <Navigation pages={page} />
            <div className="main">
                <Header toggle={setToggleModal}/>
                {toggleModal?
                <Modal addCity={changeCity} toggleModals={setToggleModal}/>:
                null}
                <div className="container-fav">
                    <FavouriteComp cityList={cityList} setchange={setchange}/>
                </div>
            </div>
        </div>
    )
}
export default Home

Home.propTypes={
    changeCity: PropTypes.func,
    cityList: PropTypes.array
}