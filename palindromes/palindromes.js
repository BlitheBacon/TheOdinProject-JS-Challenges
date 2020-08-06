const palindromes = function(string) {
    const punctuation = '!"#$%&\'\\s()*+,-./:;<=>?@[\\]^_`{|}~'
    const toReplace = new RegExp('[' + punctuation + ']', 'g')
    let fString = string.replace(toReplace, '').toLowerCase()

    for (let i = 0, j = (fString.length - 1); i < fString.length; i++, j--) {
        if (fString[i] != fString[j]) {
            return false
        }
    }
    return true
}
module.exports = palindromes
