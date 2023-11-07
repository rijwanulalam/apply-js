const findBooks = (arrOfBooks) => {
    //write your code here
   //don't forget to return
    let yearGreaterThan2000 = [];
    
    for( let i = 0; i < arrOfBooks.length; i++){
      const book = arrOfBooks[i];
      let year = book.year;
    //   console.log(year);
      if(year >= 2000){
        yearGreaterThan2000.push(book);
      }
    }
    return yearGreaterThan2000;
  }
  
  const arrOfBooks = [
     { 
        title: 'To Kill a Mockingbird', 
        author: 'Harper Lee', 
        year: 1960 
     },
                                  
    { 
        title: 'Harry Potter and the Philosopher Stone', 
        author: 'J.K. Rowling',
        year: 1997 
    },
                                                      
    { 
        title: 'The Hunger Games', 
        author: 'Suzanne Collins', 
        year: 2008
    }
  ]

//   console.log(arrOfBooks.length);
console.log(findBooks(arrOfBooks));
// //   console.log(greater2000);
// for(let i = 0; i < arrOfBooks.length; i++){
//     let book = arrOfBooks[i];
//     console.log(book.year);
// }