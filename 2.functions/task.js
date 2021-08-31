// Задание 1
let numbersArray = [1, 2, 3, 4, 50];
function getArrayParams(numbersArray){

    let min = Infinity
    let max = -Infinity
   
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
    
    avg = sum / numbersArray.length
    
    avg = Number(avg.toFixed(2))
    return {
        min, max, avg
    }
}

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max

  // Ваш кода
  // for ...
  
  return max
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
