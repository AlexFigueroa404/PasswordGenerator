import React from 'react';

export const CheckboxItem = ({option, checkValue, onChangeCheckbox}) => {


    return (
        <div className="flex justify-between mb-4">
            <label
                htmlFor={option}>Include {option} {option === "symbols" || option === "numbers" ? "" : "Letters"} </label>
            <input onChange={onChangeCheckbox} checked={checkValue} type="checkbox"
                   name={option}
                   id={option}/>
        </div>
    );
};

