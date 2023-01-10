import React from 'react';
import starOn from '../images/starOn.png'
import starOff from '../images/starOff.png'

const rightCitiesComp = ({cityDisplay,listCity,setlistCity}) => {
    return (
        <div className="right">
            <div className="headingText">
                        <div className="city">
                            <span>{cityDisplay.name}</span>
                        </div>
                        <div 
                        onClick={()=>{


                            listCity.forEach(val=>{
                                if(val.id===cityDisplay.id)
                                val.favFlag=!val.favFlag
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

            </div>
            
        // </div>
    );
};

export default rightCitiesComp;