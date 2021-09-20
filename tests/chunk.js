const chunkArray = (arr, len) => {
  // Init chunked arr
  const chunkedArr = []
  arr.forEach(val => {
    // GET LAST element
    const last = chunkedArr[chunkedArr.length - 1]
    // Check if las and if las length is equal to the chunk len
    if (!last || last.length === len) {
      chunkedArr.push([val])
    } else {
      last.push(val)
    }
  })
  return chunkedArr
}
module.exports = chunkArray
