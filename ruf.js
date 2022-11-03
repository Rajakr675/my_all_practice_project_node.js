// Q1
// let arr = [1,2,3,4,5,6,7,8,9,76,5,4,,3,];
// let b=[]
// for(let i in arr){
//     if (!arr.includes(i)){
//         b.push(i)
//     }
// }
// console.log(b);



// Q2 
// let d = {1:'apple',2:"bat",3:'cat'};
// let lis=[]
// let lis1=[]
// for(let i in d){
//     lis.push(i)
//     lis1.push(d[i])
// }
// console.log(lis);
// console.log(lis1);
//Q3 

// let str = 'apple'  //output = 'aple'
// let b=''
// for(let i of str){
   
// }
// console.log(b);


let input=require('prompt-sync')();

let a=input("enter the string :- ")
let b=a.split("")
console.log(b);
let c=b.reverse()
console.log(c);
let d=c.join("")
console.log(d);
if (a==d){
    console.log("it is palindrom");

}else{
    console.log("not palindrom");
}




// let s=[3,5,7,9]
// output=[1,2,3,4,5,6,7,8,9]