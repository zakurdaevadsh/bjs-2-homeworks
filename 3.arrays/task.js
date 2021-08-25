let arr1 = [8, 1, 2];
let arr2 = [8, 1, 2];
function compareArrays(arr1, arr2) {
  return arr1.every((item, idx) => arr2[idx] === item)
}
console.log(compareArrays(arr1, arr2))

let arr = [-1, 6, -9, 3, 17];
function advancedFilter(arr) {
  return arr.filter(item => item > 0 && item % 3 === 0).map(item => item * 10)
}
console.log(advancedFilter(arr))
