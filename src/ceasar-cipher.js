

export function cipher (str, factor) {
    let cipherText = ""
    for(let i = 0; i<str.length; i++) {
        const charCode = str.charCodeAt(i)+factor
        cipherText += String.fromCharCode(charCode)
    }
    return cipherText
} 


console.log(cipher("XYZ", 3));
