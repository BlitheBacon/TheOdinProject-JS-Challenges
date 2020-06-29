const ftoc = function(temp) {
  res = (temp - 32) * (5/9)
  return (Math.round(res * 10) / 10)
}

const ctof = function(temp) {
  res = (temp * (9/5) + 32)
  return (Math.round(res * 10) / 10)
}
module.exports = {
  ftoc,
  ctof
}