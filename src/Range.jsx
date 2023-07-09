import {useEffect, useState} from "react";


export const Range = ({minValue, maxValue, rangeValue, onRange}) => {


    return (
        <div className="rounded-md bg-[#1D2026] flex items-center h-[48px] pl-4 pr-3">
            <div className="">
                <span>Length</span>
            </div>
            <div className=" flex items-center flex-grow">
                <input onInput={onRange}
                       className="  w-full mx-4  h-[3px] appearance-none rounded-full"
                       type="range" value={rangeValue} name="range" id="range" min={minValue} max={maxValue}/>
                <span className="  text-center w-10  text-lg font-medium ">{rangeValue}</span>
            </div>
        </div>
    );
};

