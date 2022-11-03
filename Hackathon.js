
// const input = require("prompt-sync")();
// const fs = require("fs");

// class Bike_Rentel{
//     constructor( ){


//     }show_bikes(){
//         let read = fs.readFileSync("i_Bikes.json", "utf-8")
//         let parse = JSON.parse(read)
//         console.log("!----> Bikes all here <----!");
//         for (let i in parse) {
//             console.log(i);
//             console.log(parse[i]);
//         }
//     }rent_Bikes(){
//         let read = fs.readFileSync("i_Bikes.json", "utf-8");
//         let parse = JSON.parse(read);
//         console.log("!---Bikes-Categorys---!");
//         let count = 1
//         for (let Bikes in parse) {
//             console.log(count, ")", Bikes);
//             count += 1
//         }
//         const category = input("Ener the  choice wich category_Name you want Bikes => ");
//         // const BN=input("enter bike name => ")
//         console.log("!--Your Book List--!");
//         let count_1=1
//         for (let i in parse[category]) {
//             console.log(count_1,").", i,parse[category][i]);
//             count_1+=1
//         }

//         let Bike_Name = input("which Bike_Name you want Chose one of them => ");
//         let Bike_quty = parseInt(input("Enter Book Quantaty => "));
//         if(Bike_quty <= parse[category][Bike_Name]["count"]){
//             let decries=parse[category][Bike_Name]["count"]-Bike_quty
//             parse[category][Bike_Name]["count"]=decries
//             fs.writeFileSync("i_Bikes.json", JSON.stringify(parse, null, 4));
//             console.log("//////////");


//         }else{
//             console.log("sorry yaar something wrong chek your bike quantaty..!");
//         }
//     }

// }
// const obj=new Bike_Rentel()
// console.log("press 1).for show_Bikes\npress 2).for rent_Bike\npress 3).for return_Bike");
// let choice=input("enter your choice => ");
// if (choice=="1"){
//     obj.show_bikes()
// }
// else if(choice =="2"){
//     obj.rent_Bikes()
    
// }





// let a={"nigma@gmail.com":{
//     "Name":"nigma",
//     "ph":23456789,
//     "password":"djf",
//     "bikes":{
//         "ktm":6,
//         "rsdrt":5,
//         "duke":34
//     }
// }}
// let id=input("enter gmail => ");

// if(id in a){
//     console.log("right your email..");
//     let pas=input("enter password => ");
//     if(pas == a[id]["password"]){
//         console.log("right your password..");
//         let bike_name=input("enter the bike name => ");
//         if(bike_name in a[id]["bikes"]){
//             let bike_quantaty=input("bhai kitne bike return karoge number daal de => ");
//             if(bike_quantaty <= a[id]["bikes"][bike_name]){
//                 let dec=a[id]["bikes"][bike_name]-bike_quantaty
//                 let d=a[id]["bikes"][bike_name]=dec
//                 console.log(a);

//             }else{
//                 console.log("sorry something wrong..plz chek bike quantaty..!");
//             }

//         }else{
//             console.log("sorry bro this bike is not avilable..!");
//         }
//     }else{
//         console.log("wrong your password..");
//     }
// }else{
//     console.log("wrong your email..");
// }





// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>