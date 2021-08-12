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
    let letter = '';
    strLength = expr.length / 10;
    s = '';
    let arr = [];

    for (let i = 0; i < strLength; i++) {
        letter = expr.substr(-10);
        arr.push(letter);
        expr = expr.slice(0, -10);
    }

    arr = arr.map(x => x.match(/.{1,2}/g).map(x => x == '10' ? x = '.' : x == '11' ? x = '-' : x = '').join(''));

    arr = arr.map(x => x == '' ? x = ' ' : x = MORSE_TABLE[x]).reverse().join('');
    return arr;
}


module.exports = {
    decode
}