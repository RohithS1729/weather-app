import React, { useRef,useState } from "react";
import {Link} from 'react-router-dom'
import style from './navigation.css'

const Navigation=({pages})=>{
    // console.log(pages)
    return(
        
        <div>

            <div  className="nav-container">
                <div >
                    <Link  className="linkNav" to={'/'}><div style={{
                        backgroundColor:pages==='Home'?'#ffce5e':pages==='Cities'?'#633ea5':null,
                        color:pages==='Home'?'#633ea5':pages==='Cities'?'#ae9bcf':null
                    }}  className="selectPage">Home</div></Link>
                </div>

                <div >
                <Link className="linkNav" to={'/cities'}><div style={{
                        backgroundColor:pages==='Home'?'#633ea5':pages==='Cities'?'#ffce5e':null,
                        color:pages==='Home'?'#ae9bcf':pages==='Cities'?'#white':null


                }}  className="selectPage">Cities</div></Link>

                </div>

            </div>
        </div>
    )
}
export default Navigation