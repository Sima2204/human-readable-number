module.exports = function toReadable (number) {
  
    function row1(numStr) {
        switch (numStr) {
            case '0':
                return "";
                break;
            case '1':
                return "one";
                break;
            case '2':
                return "two";
                break;
            case '3':
                return "three";
                break;
            case '4':
                return "four";
                break;
            case '5':
                return "five";
                break;
            case '6':
                return "six";
                break;
            case '7':
                return "seven";
                break;
            case '8':
                return "eight";
                break;
            case '9':
                return "nine";
                break;
            case '10':
                return "ten";
                break;
            case '11':
                return "eleven";
                break;
            case '12':
                return "twelve";
                break;
            case '13':
                return "thirteen";
                break;
            case '14':
                return "fourteen";
                break;
            case '15':
                return "fifteen";
                break;
            case '16':
                return "sixteen";
                break;
            case '17':
                return "seventeen";
                break;
            case '18':
                return "eighteen";
                break;
            case '19':
                return "nineteen";
                break;
            default:
                break;
        }
    }
    
    function row2(numStr) {
        switch (numStr) {
            case '2':
                return "twenty";
                break;
            case '3':
                return "thirty";
                break;
            case '4':
                return "forty";
                break;
            case '5':
                return "fifty";
                break;
            case '6':
                return "sixty";
                break;
            case '7':
                return "seventy";
                break;
            case '8':
                return "eighty";
                break;
            case '9':
                return "ninety";
                break;
            default:
                break;
        }
    }
    
    function row3(number) {
        return row1(number) + " hundred ";
    }

    let numStr = String(number);

    if (numStr === '0') {
        result = `zero`
    } else if (numStr.length === 1) {
        result = row1(numStr)
    } else if (numStr.length === 2 && numStr[0] === '1') {
        result = row1(numStr) 
    } else if (numStr.length === 2 && numStr[0] === '0') {
        result = row2(numStr) 
    } else if (numStr.length === 2 && numStr[0] !== '1') {
        result = row2(numStr[0]) + ` ` + row1(numStr[1])
    } else if (numStr.length === 3 && numStr[1] === '0' && numStr[2] === '0') {
        result = row3(numStr[0])
    } else if (numStr.length === 3 && numStr[1] === '0' && numStr[2] !== '0') {
        result = row3(numStr[0]) + row1(numStr[2])
    } else if (numStr.length === 3) {
        result = row3(numStr[0]) + row2(numStr[1]) + ` ` + row1(numStr[2])
    };

    return result;

}