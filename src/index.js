module.exports = function check(str, bracketsConfig) {
    // your solution
    let count = 0;
    let arr = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] == "(" || str[i] == "{" || str[i] == "[" || str[i] == "|") {           
            if (str[i] == "|") {
                arr.push(str[i]);          
            }
            count++;

        } else {
            count--;
        }

        if (count < 0) {
            break;
        }
    }

    if (arr.length % 2 == 0) {
        count = count - 2 * (arr.length / 2);

    } else {
        count--;
    }

    if (count != 0) {
        return false;
    } else {
        return true; //
    }

};
