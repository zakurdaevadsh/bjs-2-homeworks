// Задача 1
function parseCount(num) {
    const result = Number.parseInt(num);
    if (Number.isNaN(result)) {
      throw new Error("Невалидное значение");
    }
    return result
  }
  
  function validateCount(num) {
    let result
    try {
      result = parseCount(num)
    } catch (e) {
      return e
    }
    return result
  }
  
  validateCount(1)


  
// Задача 2
  class Triangle {
    constructor(a, b, c) {
      if((a + b) < c){
          throw new Error("Треугольник не существует");
      }
      this.a = a
      this.b = b
      this.c = c
    }
    getPerimeter(){
      let P = this.a + this.b + this.c;
      return(P)
    }
    getArea(){
      let p = 0.5*(this.a + this.b + this.c);
      let s = (p*(p-this.a)*(p-this.b)*(p-this.c))^2;
      return(s)
    }
  }
  
  function getTriangle(a, b, c){
      let triangle
      try{
          triangle = new Triangle (a, b, c)
      }catch(e){
          e.getArea = () => '! Ошибка треугольника не существует'
          e.getPerimeter = () => '! Ошибка треугольника не существует'
          return e
      }
      return triangle
  }
  
  const triangle = getTriangle(2, 3, 40)
  console.log(triangle.getPerimeter())
  console.log(triangle.getArea())