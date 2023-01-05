import React, { useState } from "react";
import style from './home.css'
import Navigation from "../components/navigation";
import Header from "../components/header";
import Modal from "../components/modal";
import starOn from '../images/starOn.png'


const Home=({changeCity,cityList,setcityList})=>{
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
                    {
                        // check if atleast one of the cities in the list is selected as favorite using the favFlag
                        //.map gives an array of true or false values of each city and .includes as 'if atleast on is set as false' display the none message 
                        cityList.map(val=>{return val.favFlag}).includes(true)>0?
                                cityList.filter(val=>val.favFlag).map(val=>{

                                    return <div className="item-fav">
                                                <div>
                                                    <div>{val.name}</div>
                                                    <div onClick={()=>{
                                                        cityList.forEach(val1=>{
                                                            if(val1.id===val.id){
                                                                return val1.favFlag=!val1.favFlag

                                                            }
                                                        });
                                                        setchange(state=>!state)

                                                    }}>
                                                        <img className="star"   alt="On" src={starOn} />
                                                    </div>
                                                    
                                                </div>
                                                <div className="item-fav-details">
                                                    {val.desc}
                                                </div>
                                                <div className="item-fav-details">
                                                    <span>Temperature:</span> {val.temp}
                                                </div>
                                                <div className="item-fav-details">
                                                    <span>Humidity:</span> {val.humidity}
                                                </div>
                                            </div>
                                            })
                                            :
                                            <span>You have not selected any city as a favorite yet.</span>
                    }
                </div>
            </div>
        </div>
    )
}
export default Home