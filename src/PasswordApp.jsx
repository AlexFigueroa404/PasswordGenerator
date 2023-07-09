import {Range} from "./Range.jsx";
import {CheckboxOptions} from "./CheckboxOptions.jsx";
import {Display} from "./Display.jsx";
import {useEffect, useState} from "react";
import {generateLowercase, shuffle, generateNumbers, generateSymbols, generateUppercase} from "./generatePassword.js"


export const PasswordApp = () => {


    const MIN_VALUE = 6;
    const MAX_VALUE = 64

    const [rangeValue, setRangeValue] = useState(MIN_VALUE);
    const [password, setPasword] = useState("")

    const [options, setOptions] = useState({
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: true,
    });


    useEffect(() => {
        setPasword(generatePassword)
    }, [rangeValue, options])

    const onChangeCheckbox = (e) => {

        setOptions({
            ...options,
            [e.target.name]: e.target.checked
        })
    }


    const handleRange = (e) => {

        const x = e.target.value
        const percentage = ((x - MIN_VALUE) / (MAX_VALUE - MIN_VALUE)) * 100;
        e.target.style.background = `linear-gradient(90deg, rgba(47,129,247,1) ${percentage}%, rgba(255,255,255,1) ${percentage}%)`;

        setRangeValue(x)


    }


    const handleClick = () => {
        setPasword(generatePassword());
    }

    const generatePassword = () => {

        let newPassword = ""


        options.lowercase ? newPassword += generateLowercase() : newPassword

        options.uppercase ? newPassword += generateUppercase() : newPassword

        options.numbers ? newPassword += generateNumbers() : newPassword

        options.symbols ? newPassword += generateSymbols() : newPassword


        const activeOptions = Object.entries(options)
            .filter(([key, value]) => value === true).map(([key, value]) => key)


        let passwordLength = rangeValue - newPassword.length


        for (let i = 0; i < passwordLength; i++) {

            const randomIndex = Math.floor(Math.random() * activeOptions.length);

            const type = activeOptions[randomIndex];

            if (type === "lowercase") newPassword += generateLowercase()
            if (type === "uppercase") newPassword += generateUppercase()
            if (type === "numbers") newPassword += generateNumbers()
            if (type === "symbols") newPassword += generateSymbols()

        }

        return shuffle(newPassword);

    }


    return (
        <div className="flex min-h-screen items-center justify-center font-roboto text-white">
            <div
                className="flex h-[550px] min-w-fit w-[430px] flex-col rounded-xl bg-[rgb(33,38,45)] px-[28px] py-[30px] justify-between">

                <Display password={password}></Display>
                <div className="mt-7">

                    <Range rangeValue={rangeValue} onRange={handleRange} minValue={MIN_VALUE} maxValue={MAX_VALUE}
                    ></Range>

                    <CheckboxOptions onChangeCheckbox={onChangeCheckbox} options={options}></CheckboxOptions>
                </div>


                <div className="mt-10">

                    <button onClick={handleClick}
                            className="h-[50px] w-full rounded-md bg-[#2F81F7] text-base font-medium hover:bg-[#2279F6]">Generate
                    </button>
                </div>


            </div>
        </div>

    );
};

