import React from 'react';
import {CheckboxItem} from "./CheckboxItem.jsx";

export const CheckboxOptions = ({options, onChangeCheckbox}) => {
    return (
        <div className="mt-6 px-4">

            <CheckboxItem onChangeCheckbox={onChangeCheckbox} option="lowercase"
                          checkValue={options.lowercase}></CheckboxItem>

            <CheckboxItem onChangeCheckbox={onChangeCheckbox} option="uppercase"
                          checkValue={options.uppercase}></CheckboxItem>

            <CheckboxItem onChangeCheckbox={onChangeCheckbox} option="numbers"
                          checkValue={options.numbers}></CheckboxItem>

            <CheckboxItem onChangeCheckbox={onChangeCheckbox} option="symbols"
                          checkValue={options.symbols}></CheckboxItem>


        </div>
    );
};

