module.exports = function check(str, bracketsConfig) {
    // your solution
    let seporatArr;
    if (str.length % 2 != 0) {
        return false;
    }else {
        for (let item = 0; item < bracketsConfig.length;) {
            seporatArr = bracketsConfig[item].join("");
            // console.log(seporatArr);
            if (str.indexOf(seporatArr) != "-1") {
                str = str.replace(seporatArr, "");
                //console.log(str)
                item = 0;
            } else {
                item += 1;
            }
        }

        return (str.length == "0") ? true : false;
        
    }



};

// console.log(check('((()))()', [
//     ['(', ')']
// ])); // -> true
// console.log(check('())(', [
//     ['(', ')']
// ])); // -> false))
// console.log(check('([{}])', [
//     ['(', ')'],
//     ['[', ']'],
//     ['{', '}']
// ])); // -> true
// console.log(check('[(])', [
//     ['(', ')'],
//     ['[', ']']
// ])); // -> false
// console.log(check('()', [
//     ['(', ')']
// ])); // -> true
// console.log(check('((()))()', [
//     ['(', ')']
// ])); // -> true)
