const sumAll = function(...args) {
    let i = args[0]
    let j = args[1]

    //Check args for interation
    if (!Number.isInteger(i) || 
        !Number.isInteger(j) ||
        i < 0 || j < 0) {
        return 'ERROR'
    }
    //Optional swap to allow for proper loop function
    if (i > j) {
        temp = i
        i = j
        j = temp
    }
    
    let res = 0
    for (; i <= j; i++) {
        res += i
    }
    return res
}
module.exports = sumAll