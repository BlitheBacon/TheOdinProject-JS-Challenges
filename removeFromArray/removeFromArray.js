const removeFromArray = function(...args) {
    let arr    = args[0]
    let filt   = args.slice(1)
    return res = arr.filter(f => !filt.includes(f))
}

module.exports = removeFromArray