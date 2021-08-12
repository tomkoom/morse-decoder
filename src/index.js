const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    exprArr = expr.split('');

    function getKeyByValue(obj, value) {
        return Object.keys(obj).find(key => obj[key] === value);
    }

    exprArr = exprArr.map(value => getKeyByValue(MORSE_TABLE, value));

    for (let i = 0; i < exprArr.length; i++) {
        if (exprArr[i] === undefined) {
            exprArr[i] = '*';
        }
    }

    function encodedToNum(encoded) {
        encoded = encoded.split('')
            .map(x => x === '.' ? x = '10' : x === '-' ? x = '11' : x = '**********').join('');
        let encodedArr = encoded.split('');

        for (let i = 0; i < (10 - encoded.length); i++) {
            encodedArr.unshift('0');
        }
        return encodedArr.join('');
    }

    exprArr = exprArr.map(encoded => encodedToNum(encoded)).join('');
    return exprArr;
}


module.exports = {
    decode
}