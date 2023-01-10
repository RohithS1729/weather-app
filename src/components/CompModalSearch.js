import React from 'react';

const CompModalSearch = ({cityName,setsearchArr}) => {
    const searchBarInput=(e)=>{
        const{value}=e.target;
        let str=value.toLowerCase()
        
        if(str.length>0){
            let newArr=cityName.filter(val=>{
                return val.name.toLowerCase().indexOf(str)>-1})

            setsearchArr([...newArr])
        }else{
            setsearchArr([...cityName])
        }
    }

    return (
        <div className="serchBarModal">
                        <input placeholder="search city" id="inputValue" type={'text'} onChange={searchBarInput} />
            
        </div>
    );
};

export default CompModalSearch;