

export function cipher (str, factor) {
    let cipherText = ""
    for(let i = 0; i<str.length; i++) {
        let charCode = str.charCodeAt(i)
        // console.log(charCode);

        if((charCode > 96 && charCode < 123) || (charCode>64 && charCode < 91)){
            charCode = checkWrapping(charCode, factor)
        }
        cipherText += String.fromCharCode(charCode)
    }
    return cipherText
} 

function checkWrapping (charCode, factor) {
    const char = String.fromCharCode(charCode)
    let isLower = checkCase(char)
    if(isLower && charCode+factor > 122){
        charCode = charCode - 26
    }else if (!isLower && charCode+factor > 90){
        charCode = charCode - 26
    }
    return charCode+factor
}

function checkCase(char) {
    return char === char.toLowerCase()
}

console.log(cipher('XYZ', 3));
