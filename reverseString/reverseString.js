const reverseString = function(s) {
    output = ''
    for (let i = s.length - 1; i >= 0; i--) {
        output += s[i]
    }
    return output
}

module.exports = reverseString
