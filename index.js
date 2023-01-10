
let roman_symbol = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
let decimal_number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
let Div1 = document.getElementById("div1");

function getRoman(num) {
    let romanConvert = "";
    let number_thousands = 0;
    for (let i = 0; i < roman_symbol.length; i++) {
        if (num == 0) break;
        /*
        ALGORITHM of GetRoman
            num = 0 -> break
            num >= highest decimal number indicated by roman_symbol
                -> {
                    output += roman_symbol satisfied above
                    input -= decimal number indicated by roman_symbol

                    if (roman_symbol at that position == M (highest)) --> add number of 1000 to the number
                }
        */
        while (num >= decimal_number[i]) {
            num -= decimal_number[i];
            romanConvert += roman_symbol[i];
            if (roman_symbol[i] == 'M')
                number_thousands++;
        }
    }
    return {
        number_thousands: number_thousands,
        romanConvert: romanConvert
    };
}
function decToRoman() {
    const num = document.getElementById("decimal").value;
    if (num <= 0 || num > 50000) {
        alert("Out of range supported.");
        return 0;
    }

    if (num != parseInt(num)) {
        alert("Please input an integer.");
        return 0;
    }
    let romanConvert = "";
    let roman1 = getRoman(num);
    if (roman1.number_thousands > 4) {  //>4000
        let thousand_string = "";
        let tmp = roman1.number_thousands;
        
        while (tmp > 0) {
            thousand_string += "M";     //Add M to converted 
            tmp--;
        }
        let thousands1 = getRoman(roman1.number_thousands);
        let thousandBase = "<span>" + thousands1.romanConvert + "</span>";
        romanConvert = roman1.romanConvert.replace(thousand_string, thousandBase);
    }
    else romanConvert = roman1.romanConvert;
    // return romanConvert;
    Div1.innerHTML = romanConvert;
}