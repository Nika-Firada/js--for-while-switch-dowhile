//დავალება 1
const currentDay = new Date().getDay();
switch (currentDay) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}
console.log(day);
//დავალება 2
for(let i = 0; i < 100; i++) {
   console.log(i);
}
//დავალება 3
let numberWhile = 0;
while(numberWhile < 50){
    console.log(numberWhile);
    numberWhile++;
}
//დავალება 4
let numDoWhile = 0;
do {
    console.log(numDoWhile);
    numDoWhile++;
} while(numDoWhile < 150);
//დავალება 5
const emptyArray = [];
let counter = 0;
for(let i = 0; i < 10000; i++){
    counter = i * i
    emptyArray.push(counter);
}
console.log(emptyArray);

//დამატებითი დავალება
let myArray = [10, 9, 9, 8, 8, 11, 8, 0, 9, 1];
let biggest = myArray[0];
let nextbiggest = myArray[0];
    for(let i=0;i < myArray.length; i++){
        if(myArray[i] > biggest){
            nextbiggest = biggest;
            biggest = myArray[i];
        }
        else if(myArray[i] > nextbiggest && myArray[i] != biggest)
            nextbiggest = myArray[i];
    }
    console.log(nextbiggest);