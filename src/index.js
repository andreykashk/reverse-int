module.exports = function reverse (n) {
    const res = [];
    const arrLength = (Math.abs(n) + '').split('').length;
    console.log(arrLength)
    for (let i = arrLength - 1; i >= 0; i--) {
        res.push((Math.abs(n) + '').split('')[i])
    }

  return +res.join('')
}

// console.log(reverse(-192))
