import React from "react";
import style from './header.css'
const Header=({toggle})=>{
    const newCity=()=>{
        toggle(state=>!state)
    }
    return(
        <div>
            <div className="heading">
                <div>
                    <span>My favorite cities</span>
                </div>
                <div >
                    <button id="homeNewCityBtn" onClick={newCity}>Add New City</button>
                </div>
            </div>
        </div>
    )
}
export default Header