const repeatString = function(sInput, iInput) {
    let s = ''
    if (iInput >= 0) {
        for (let i = 0; i < iInput; i++) {
            s += sInput
        }
    } 
    else {
        return 'ERROR'
    }
    return s
}

module.exports = repeatString
