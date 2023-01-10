import React from "react";
import starOn from '../images/starOn.png'


const FavouriteComp=({cityList,setchange})=>{

    return(
        <div>
            {
                        // check if atleast one of the cities in the list is selected as favorite using the favFlag
                        //.map gives an array of true or false values of each city and .includes as 'if atleast on is set as false' display the none message 
                        cityList.map(val=>{return val.favFlag}).includes(true)>0?
                                cityList.filter(val=>val.favFlag).map(val=>{

                                    return <div key={val.id} className="item-fav">
                                                <div>
                                                    <div>{val.name}</div>
                                                    <div onClick={()=>{
                                                        cityList.forEach(val1=>{
                                                            if(val1.id===val.id){
                                                                val1.favFlag=!val1.favFlag

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
    )

}
export default FavouriteComp

