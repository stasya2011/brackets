module.exports = function check(str, bracketsConfig) {
    // your solution
    let count =0;
    let arr = [];

  for(let i=0; i<str.length; i++){
      for(let k=0; k<bracketsConfig.length; k++){
          if(str[i] == bracketsConfig[k][0] && bracketsConfig[k][0] === bracketsConfig[k][1]){
              count++;            
             
          }else if(str[i] == bracketsConfig[k][0] && bracketsConfig[k][0] !== bracketsConfig[k][1]){
            arr.push(str[i]);
          }else if(str[i] == bracketsConfig[k][1]){
              if(arr.length === 0 || arr[arr.length-1] !== bracketsConfig[k][0]){
                  console.log(arr);
                  return false;
              }

              arr.pop();
              console.log(arr);
          }
      }
  }
  return arr.length === 0 && count%2===0;

};
