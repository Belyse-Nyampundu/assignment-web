// //Write a function that takes in a string and returns it when reversed
// //let food = “eating”

 let food="eating"
 food.reverse()
 console.log(food)
 function eat(){
    let food="eating"
    for(elements of food){

    }
 }


//Write a function that takes in the following array and consoles the target if it is found else
//null
//let num = [2,8,0,23,5,45,76]
//Target = 23

// function divide(num){
//     if(num.length < 1){
//         return num
//     }
//     let left=num.slice(0,middle)
//     let right=num.slice(middle) 
//     console.log(merged(divide(left),divide(right)))
// }
// function merged(left,right);
// let emptyArray=[]
// let middle=Math.floor(num.length/2)
// while(left.length && right.length){
//     if(left[0]< right[0]){
//     emptyArray.push(left.shift())
//     }else{
//         emptyArray.push(right.shift())
//     }
//     console.log(emptyArray)
//     return[...emptyArray,...left,...right]
//  }
//  let num=[2,8,0,23,5,45,76]
// console.log(divide(num))

function binary(arr,target){
    let leftIndex=0
    let rightIndex=arr.length -1
    let middle=Math.floor((leftIndex+rightIndex)/2)
    while(leftIndex && rightIndex)
    if(arr[middle]===target){
        return null
    }else if(arr[middle]<target){
        return leftIndex=midddle+1
    }else{
        return rightIndex=middle-1
    }
    
  return middle

}
let arr=[0,2,5,8,23,45,76,]
let target=23
console.log(binary(arr,target))

//Given years between 2000 and 2023, 
//console all the leap years in the following
//sentence, i.e “2020 is a leap year” 
//if not console log i.e “2001 is not a leap year”
// let year=[2000,...2023];

//Given a range of numbers from 0 to 100, console”Fizz” 
//if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” 
//if divisible by both 3 and 5.


//Write a function that takes in an array of numbers and 
//returns an array that has all
//elements multiplied by 4.
//let numArray = [12,87,45,75,23,64,73]
 

 function multiplication(){
    let numArray=[12,87,45,75,23,64,73]
    for(element of numArray){
         console.log(element*4)
    }   
}
 multiplication()

 //Write a function that takes in an array of strings 
 //and returns an array with every element
//turned into a number
//let nums = [“10”,”24”,”45”,”56”,”67”]

function stringss(){
    let nums = ["10","24","45","56","67"];


    
}
