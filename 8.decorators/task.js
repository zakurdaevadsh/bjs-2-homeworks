function cachingDecoration(func) {
  const cacheHistory = []
  let cache = {}
  function wrapper(...args) {
    let key = args.join(',')
    if (key in cache) {
      return 'Из кеша: ' + cache[key]
    } else {
      if (cacheHistory.length > 4) {
        delete cache[cacheHistory.shift()]
      }
      cacheHistory.push(key)
      console.log(cacheHistory)
      let res = func(...args)
      cache[key] = res
      return res
    }
  }
  return wrapper
}

const add = (a, b) => a + b

const c = cachingDecoration(add)

console.log(c(2, 2))
console.log(c(3, 2))
console.log(c(2, 1))
console.log(c(2, 3))
console.log(c(2, 5))
console.log(c(2, 4))
console.log(c(2, 7))
console.log(c(2, 8))
console.log(c(2, 7))
console.log(c(2, 2))


function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}
