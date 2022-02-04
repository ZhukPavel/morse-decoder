const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '*****': ' ',
       '00': '',
       '10':'.',
       '11':'-',
       '**':'*',
};




function decode(expr){
let result = ''
let res = ''
let simbol = ''
let word = ''
let start = 0;
let end = 10
let p_start=0;
let p_end =2;
  for (i=0; i<=expr.length/10-1; i++){
    res = expr.slice(start,end)
    
      for( p=0; p<=res.length/2-1; p++){
        simbol = res.slice(p_start, p_end)
        word = word + MORSE_TABLE[simbol] 
        
        p_start = p_start+2;
        p_end = p_end +2
      }
       result = result + MORSE_TABLE[word];
      
    word=''
    start = start+10;
    end= end+10;
    p_start=0;
    p_end =2;  
  }
return result
}

module.exports = {
    decode
}