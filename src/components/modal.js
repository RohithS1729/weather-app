import React, {  useContext, useEffect, useState } from "react";
import style from './modal.css'
import PropTypes from 'prop-types'

import {context} from '../App'

const Modal =({toggleModals,addCity})=>{
    const [serachArr,setsearchArr]=useState([])   
    const city1=useContext(context)

    const cityName=city1.actualData
    const changeCity=city1.changeData
    const searchBarInput=(e)=>{
        const{value}=e.target;
        let str=value.toLowerCase()
        
        if(str.length>0){
            let newArr=cityName.filter(val=>{
                return val.name.toLowerCase().indexOf(str)>-1})
            // console.log(newArr)
            setsearchArr([...newArr])
        }else{
            setsearchArr([...cityName])
        }
    }
    const addAndDeleteCity=(key)=>{
        const selectedArr=cityName.filter( val=>{return val.id==key})
        selectedArr.forEach(val=>{
            if(val.favFlag===undefined){
                return val.favFlag=false
            }
        })
        
        changeCity([...cityName.filter( val=>{return val.id!==key})])
        addCity(state=>[...state,...selectedArr])
       
}

    useEffect(()=>{
        
        setsearchArr([...cityName])
    },[cityName])

    return(
        <div>
            <div className="ModalOverlay">
                <div className="modalDiv">
                    <div className="modalHeading">
                        <span>Add City Modal</span>

                        <svg cursor={'pointer'} onClick={()=>{
                            toggleModals(state=>!state)
                        }} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 1L1 16" stroke="#333333" strokeWidth={"2"} strokeMiterlimit={"10"} strokeLinecap={"round"} strokeLinejoin={"round"}></path>
                            <path d="M1 1L16 16" stroke="#333333" strokeWidth={"2"} strokeMiterlimit={"10"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></svg>
                    </div>
                    <div className="serchBarModal">
                        <input placeholder="search city" id="inputValue" type={'text'} onChange={searchBarInput} />

                    </div>
                    <div className="givenCities">
                        {serachArr.length>0?serachArr.map(val=>{
                            return(
                                <div key={val.id} className="city-item">
                                    <span>{val.name}</span>
                                    <div>
                                        <div>
                                            <svg cursor={'pointer'} onClick={()=>{addAndDeleteCity(val.id)}}  viewBox="64 64 896 896" focusable="false" data-icon="plus-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            )
                        }):'nothing'}                



                    </div>
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