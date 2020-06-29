const caesar = function(s, shift) {
    if (shift < -26) {
        shift %= -26
    }
    if (shift > 26) {
        shift %= 26
    }
    let ns = ''
    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) > 64 && s.charCodeAt(i) < 91) {
            if ((s.charCodeAt(i) + shift) > 90) {
                ns += String.fromCharCode(s.charCodeAt(i) + shift - 90 + 64)
            }
            else if ((s.charCodeAt(i) + shift) < 65) {
                ns += String.fromCharCode(91 - (65 - (s.charCodeAt(i) + shift)))
            }
            else {
                ns += String.fromCharCode(s.charCodeAt(i) + shift)
            }
        }
        else if (s.charCodeAt(i) > 96 && s.charCodeAt(i) < 123) {
            if ((s.charCodeAt(i) + shift) > 122) {
                ns += String.fromCharCode(s.charCodeAt(i) + shift - 122 + 96)
            }
            else if ((s.charCodeAt(i) + shift) < 97) {
                ns += String.fromCharCode(123 - (65 - (s.charCodeAt(i) + shift)))
            }
            else {
                ns += String.fromCharCode(s.charCodeAt(i) + shift)
            }
        }
        else {
            ns += s[i]
        }
    }
    return ns
}
module.exports = caesar
