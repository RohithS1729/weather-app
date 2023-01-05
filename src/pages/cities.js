import React, { useState } from "react";
import Navigation from "../components/navigation";
import style from './cities.css'
import Modal from "../components/modal";
import starOn from '../images/starOn.png'
import starOff from '../images/starOff.png'

const Cities=({listCity,changeCity,setlistCity,cityDisplay,setcityDisplay})=>{
    const [toggleModal,setToggleModal]=useState(false)

    // console.log(cityDisplay)
    const page='Cities'
    return(
        <div className="citiesPage">
            
            <Navigation  pages={page}/>
            {toggleModal?
                <Modal  addCity={changeCity} toggleModals={setToggleModal}/>:
                null}
            <main className="citiesMain">
                <div className="left">
                    <div className="left-heading">
                        <span>Cities</span>
                        <div>
                                <svg onClick={()=>{
                                setToggleModal(state=>!state)
                            }}  viewBox="64 64 896 896" focusable="false" data-icon="plus-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
                        </div>
                    </div>
                    <div  className="cityList">
                        {/* city list */}
                {
                    listCity.length>0?listCity.map(val=>{
                        return(
                            <div className={val.id===cityDisplay.id?'class2':'class1'} 
                              onClick={()=>{
                                setcityDisplay(val)
                                
                            }}
                             key={val.id}>

                                {val.name}<br />
                                {val.temp}
                            </div>
                        )
                    }):<span>You have not selected any city.</span>
                }

                    </div>
                </div>
                {/* city details */}
                {
                    cityDisplay?<div className="right">
                    <div className="headingText">
                        <div className="city">
                            <span>{cityDisplay.name}</span>
                        </div>
                        <div 
                        onClick={()=>{


                            listCity.forEach(val=>{
                                if(val.id===cityDisplay.id)
                                return val.favFlag=!val.favFlag
                            });
                            setlistCity([...listCity])

                        }} className="selectFav">
                            
                            {
                                cityDisplay.favFlag?
                                <img className="star"   alt="On" src={starOn} />:
                                <img className="star"   alt="On" src={starOff} />
                            }
                        </div>
                    </div>
                    <div className="details">
                        <div className="details-item">
                            <div>
                                {cityDisplay.desc}
                            </div>
                            <div>
                                <span>Temperature: </span>{cityDisplay.temp}
                            </div>
                            <div>
                            <span>Humidity: </span>{cityDisplay.humidity}
                            </div>
                        </div>
                    </div>

                </div>:null
                }
            </main>

        </div>
    )
}
export default Cities