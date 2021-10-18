class PrintEditionItem {
    constructor(name, releaseDate, pageCount) {
      this.name = name
      this.releaseDate = releaseDate
      this.pageCount = pageCount
      this._state = 100
      this.type = null
    }
    fix() {
      this.state = this.state * 1.5
    }
    set state(val) {
      if (val > 100) {
        val = 100
      }
      if (val < 0) {
        val = 0
      }
      this._state = val
    }
    get state() {
      return this._state
    }
  
  }
  
  const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
  
  console.log(sherlock.releaseDate);
  console.log(sherlock.state);
  sherlock.fix();
  console.log(sherlock.state);
  
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pageCount) {
      super(name, releaseDate, pageCount)
      this.type = 'magazine'
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(name, releaseDate, pageCount) {
      super(name, releaseDate, pageCount)
      this.type = 'book'
    }
  }
  
  class NovelBook extends Book {
    constructor(name, releaseDate, pageCount) {
      super(name, releaseDate, pageCount)
      this.type = 'novel'
    }
  }
  
  class FantasticBook extends Book {
    constructor(name, releaseDate, pageCount) {
      super(name, releaseDate, pageCount)
      this.type = 'fantastic'
    }
  }
  
  class DetectiveBook extends Book {
    constructor(name, releaseDate, pageCount) {
      super(name, releaseDate, pageCount)
      this.type = 'detective'
    }
  }
  
  const picknick = new FantasticBook(
    "Пикник на обочине",
    1972,
    168
  );
  
  console.log(picknick.name);
  picknick.state = 10;
  console.log(picknick.state);
  picknick.fix();
  console.log(picknick.state);
  
  // Задача 2
  
  class Library {
    constructor() {
      this.name = "LibraryName"
      this.books = []
    }
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book)
      }
    }
    findBookBy(type, value) {
      for (let i = 0; i < this.books.length; i += 1) {
        if (this.books[i][type] === value)
          return this.books 
      }
      return null
    }
    giveBookByName(bookName) {
      let book = null
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].name === bookName) {
          book = this.books[i]
          this.books.splice(i, 1)
        }
      }
      return book
    }
  }
  
  const library = new Library("Библиотека имени Ленина");
  
  library.addBook(
    new NovelBook(
      "Сказки", 1919, 138)
      );
  library.addBook(
    new DetectiveBook(
      "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
      2019,
      1008
    )
  );
  library.addBook(new Magazine("Мурзилка", 1924, 60));
  
  
  
  console.log(library.findBookBy("Властелин колец")); 
  console.log(library.findBookBy("releaseDate", 1924)); 
  
  console.log("Количество книг до выдачи: " + library.books.length); 
  library.giveBookByName("Машина времени");
  console.log("Количество книг после выдачи: " + library.books.length); 