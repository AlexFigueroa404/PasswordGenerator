import {CopyButtom} from "./CopyButtom.jsx";
import {useEffect, useState} from "react";

export const Display = ({password}) => {

    const [iscopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        if (!password.isEmpty) {

            const display = document.querySelector("#display")

            copyFunction(display)
            setIsCopied(true)

            setTimeout(() => {
                setIsCopied(false)
            }, 3000)


        }
    }


    const copyFunction = (element) => {
        navigator.clipboard.writeText(element.value)
            .then(() => {
                console.log("copied")
            })
            .catch((error) => {
                alert(`Copy failed! ${error}`);
            });
    }

    return (
        <div className="flex flex-col">
            <div className="flex justify-center">
                <h1 className="pb-6 text-xl font-medium">Password Generator</h1>
            </div>
            <div className="flex">
                <input id="display" value={password} readOnly={true} type="text"
                       className="cursor-not-allowed flex-grow text-base w-full rounded-l-md h-[48px] text-[#1D2026] px-4"/>

                <CopyButtom copy={iscopied} handleCopy={handleCopy}></CopyButtom>
            </div>
        </div>

    );
};

