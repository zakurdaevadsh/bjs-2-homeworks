//1
function cachingDecoration(func) {
  let cache = {}
  function wrapper(...args) {
    console.log(cache)
    let key = args.join(',')
    if (key in cache) {
      return 'Из кеша: ' + cache[key]
    }
    if (Object.keys(cache).length > 4) {
      delete cache[Object.keys(cache).shift()]
    }

    let res = func(...args)
    cache[key] = res
    return res
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

//2
const showCoords = (x, y) => console.log(`Клик:(${x},${y})`); 
 
function decorator(f, ms) { 
  let lock = false; 
  return (...args) => { 
    if(!lock){ 
      f(...args) 
      lock = true 
      setTimeout(() => lock = false, ms) 
    } 
  } 
} 
 
const delayedFunc =  decorator(showCoords, 1000); 
 
console.time("time"); 
 
setTimeout(() => delayedFunc(10,5)); 
setTimeout(() => delayedFunc(20,10),980); 
setTimeout(() => delayedFunc(30,30),2000);

//3
const showCoords = (x, y) => console.log(`Клик:(${x},${y})`); 
 
function decorator(f, ms) { 
  let lock = false; 
  let count = 0;
  console.log(count);

  return (...args) => { 
    if(!lock){
      count++ 
      console.log(count);
      f(...args) 
      lock = true 
      setTimeout(() => lock = false, ms) 
    } 
  } 
} 
 
const delayedFunc =  decorator(showCoords, 1000); 
 
console.time("time"); 
 
setTimeout(() => delayedFunc(10,5)); 
setTimeout(() => delayedFunc(20,10),980); 
setTimeout(() => delayedFunc(30,30),2000);