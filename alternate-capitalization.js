function capitalize(s) {
  let count = 0

  let first = s.replace(/[a-z]/gi, x => {
    if (count % 2 === 0 || count === 0) {
      count++
      // console.log('hit count')
      return x.toUpperCase()
      console.log(x)
    } else {
      count++
      return x
    }
  })

  let second = first.replace(/[a-z]/gi, x => {
    if (x === x.toUpperCase()) {
      count++
      // console.log('hit count')
      return x.toLowerCase()
      console.log(x)
    } else {
      return x.toUpperCase()
      count++
    }
  })

  return [first, second]
}
