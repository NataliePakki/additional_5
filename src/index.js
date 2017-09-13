module.exports = function check(str, bracketsConfig) {
  var brackets = [];
    for(var i = 0; i < str.length; i++) {
      var symbol = str[i];      
      if(symbol !== " ") {
        var isFindClose = false;
        for(var j = 0; j < bracketsConfig.length; j ++) {
            if(isFindClose) break;
            var config = bracketsConfig[j];
            
            
            if(symbol === config[0]) {
                for(k = i + 1; k < str.length; k ++ ) {
                    if(str[k] === config[1]) {
                        isFindClose = true;
                        brackets.push({start: i, end: k});
                        str = str.substr(0, k) + " " + str.substr(k + 1)
                        // return str;
                        break;
                    }
                }
            }
        }
      }
      if(!isFindClose) return false;
    }
    // // return brackets;
    // for(var i = 0; i < brackets.length; i ++) {
    //     var firstBracker = brackets[i];
    //     for(var j = i + 1; j < brackets.length; j ++) {
    //         var secondBracket = brackets[j];
    //         if( ( (firstBracker.start < secondBracket.start && firstBracker.start < secondBracket.end) && (firstBracker.end < secondBracket.start && firstBracker.end < secondBracket.end) ) || (firstBracker.start < secondBracket.start && firstBracker.start < secondBracket.end) && (firstBracker.end > secondBracket.start && firstBracker.end > secondBracket.end) ) {
    //             continue;
    //         }
    //         else {
    //             return false;
    //         }
    //     }
    // }    

    return true;
}
