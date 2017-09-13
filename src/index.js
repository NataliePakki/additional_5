module.exports = function check(str, bracketsConfig) {
    var openBrackets = [];
    for (var i = 0; i < str.length; i++) {
        var symbol = str[i];
        for (var j = 0; j < bracketsConfig.length; j++) {
            var bracketConfig = bracketsConfig[j];
            if (symbol == bracketConfig[1]) {
                var topOpenBracket = openBrackets.pop();
                if (topOpenBracket !== j) {
                    if (symbol == bracketConfig[0]) {
                        if (topOpenBracket != undefined) {
                            openBrackets.push(topOpenBracket);
                        }
                        openBrackets.push(j);
                        break;
                    } else {
                        return false;
                    }
                }
            }
            else if (symbol == bracketConfig[0]) {
                openBrackets.push(j);
                break;
            }
        }
    }
    if (openBrackets.length != 0) {
        return false;
    }
    return true;
}
