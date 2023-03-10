import React from 'react';

const CompModalClose = ({toggleModals}) => {
    return (
        <div className="modalHeading">
            <span>Add City Modal</span>

            <svg cursor={'pointer'} onClick={()=>{
                toggleModals(state=>!state)
            }} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 1L1 16" stroke="#333333" strokeWidth={"2"} strokeMiterlimit={"10"} strokeLinecap={"round"} strokeLinejoin={"round"}></path>
                <path d="M1 1L16 16" stroke="#333333" strokeWidth={"2"} strokeMiterlimit={"10"} strokeLinecap={"round"} strokeLinejoin={"round"}></path></svg>
        </div>
    );
};

export default CompModalClose;