// Задание 1
let numbersArray = [-100, -1, 0, 1, 100];
function getArrayParams(numbersArray){

let min = numbersArray[0]
let max = numbersArray[0]

let sum = 0

for(let i = 0; i < numbersArray.length; i++){

const num = numbersArray[i]

if(num < min){
min = num
}

if(num > max){
max = num
}

sum += num
}

let avg = sum / numbersArray.length

avg = Number(avg.toFixed(2))

return {
min, max, avg
}
}
getArrayParams(numbersArray)

// Задание 2
const arrOfArr=[[1, 2, 3, 4], [10, 20, -10, -20]];

const worker = (arr) => arr.reduce((acc, item) => {
  return acc + item
  },0);
  

const makeWork = (arrOfArr, worker) => {
  let max = 0;
  arrOfArr.forEach((item) => {
    let res = worker(item);
    if(res > max) max = res
  })
  return max;
}
makeWork(arrOfArr, worker);

// Задание 3
const worker2 = (arr) => {
  let max = arr[0];
  let min = arr[0]; 

  arr.forEach(i => {
		if(i < min) min = i
		if(i > max) max = i
	});

  return max-min;
}

makeWork(arrOfArr, worker2);
