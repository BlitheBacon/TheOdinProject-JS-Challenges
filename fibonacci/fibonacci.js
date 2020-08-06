const fibonacci = function(n) {
    
    //Input validation
    if (n < 0) {
        return "OOPS"
    }
    if (typeof(n) !== 'number') {
        n = parseInt(n)
    }

    let next = 0
    let current = 0

    for (let i = 1; i <= n; i++) {
        if (i == 1) {
            current = 1
        }
        else if (i % 2 == 0) {
            next += current
        }
        else {
            current += next
        }
    }
    if (next > current) {
        return next
    }
    else {
        return current
    }
}
module.exports = fibonacci
