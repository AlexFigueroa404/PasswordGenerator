export const generateNumbers = () => {

    return String.fromCharCode(Math.floor((Math.random() * 10) + 48))

}


export const generateLowercase = () => {
    return String.fromCharCode(Math.floor((Math.random() * 26) + 97))
}

export const generateUppercase = () => {
    return String.fromCharCode(Math.floor((Math.random() * 26) + 65))

}

export const generateSymbols = () => {
    const SYMBOLS = "!@#$%^&*"

    const randomNumber = Math.floor(Math.random() * SYMBOLS.length)

    return SYMBOLS[randomNumber];
}

export const shuffle = (string) => {

    const arr = Array.from(string);

    for (let i = arr.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [arr[j], arr[i]] = [arr[i], arr[j]];

    }

    return arr.join('')


}






