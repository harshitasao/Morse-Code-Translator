const crypt = {
    "A" : ".-", "B" : "-...","C" : "-.-.", "D" : "-..",
    "E" : ".", "F" : "..-.", "G" : "--.", "H" : "....",
    "I" : "..", "J" : ".---", "K" : "-.-", "L" : ".-..",
    "M" : "--", "N" : "-.", "O" : "---", "P" : ".--.",
    "Q" : "--.-", "R" : ".-.", "S" : "...", "T" : "-",
    "U" : "..-", "V" : "...-", "W" : ".--", "X" : "-..-",
    "Y" : "-.--", "Z" : "--..",
    
    
    "0" : "-----",
    "1" : ".----", "2" : "..---", "3" : "...--",
    "4" : "....-", "5" : ".....", "6" : "-....",
    "7" : "--...", "8" : "---..", "9" : "----."
};

const textToMorse = () => {
    let input = document.getElementById('word').value;
    input = input.toUpperCase();
    let array1 = input.split("");
    let array2 = array1.map((x) => {
        if(crypt[x])
        {
            return crypt[x];
        }
        else{
            return x;
        }
    })
    let result = array2.join(" ");
    document.getElementById('morseText').value = result;
}

function getKey(obj, val) {
    return Object.keys(obj).find(key => obj[key] === val);
  }

const morseToText = () => {
    let input1 = document.getElementById('morseCode').value;
    let arr1 = input1.split(" ");

    let arr2 = arr1.map((x) => {
        if(getKey(crypt,x))
        {
            return getKey(crypt,x);
        }
        else if(x == ""){
            return " ";
        }
        else{
            return x;
        }
    });
    let text = arr2.join("").replace(/\s\s+/g,' ');
    document.getElementById('plainText').value = text;
}