function repeatString(texto, repeticiones){
    for ( let i=0; i<repeticiones; i++){
        console.log(texto)
    }
}
repeatString("hola", 3)

function reverseString(texto){
    str= texto.split("").reverse().join("")
    console.log(str)
}
reverseString("iara")

function removeFromArray(arreglo, item){
    const index = arreglo.indexOf(item)
    if (index > -1){
        arreglo.splice(index, 1);
    }
    console.log(arreglo);
}
removeFromArray([1,2,3,4],3)

function sumAll(a,b){
    let suma = 0
    const min = Math.min(a,b)
    const max = Math.max(a,b)

    for (let i = min; i <=max; i++){
        suma+=i;
    }
    console.log(suma)
}
sumAll(1, 4)

function leapYears(year){
    if (year%4 ===0 && year%100 != 0){
        return console.log("año bisiesto")
    }
    else if(year%400 ===0 && year%100 ===0){
        return console.log("año bisiesto")
    }
    console.log("no bisiesto")
}
leapYears(2024)

function getTheTitles(books){
    const titles = books.map(book => book.title);
    console.log(titles);
    return titles;
}
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
getTheTitles(books);

function findTheOldest(people){
    
}