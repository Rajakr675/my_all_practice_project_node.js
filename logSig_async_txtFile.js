console.log("!----*-> well-come to Login_sign with_async_txt_file <-*----!");
let input = require('prompt-sync')();
const fs = require("fs");
function login_Signup_Async(){

    console.log('\nPress 1. for Signup\nPress 2. for Log in\n');
    let choice = input("Enter your choice => ")
    if (choice == '1') {
        Signup();
    }
    else if(choice=="2") {
        login()
    }else{
        console.log("sorry incroct choice...!Plz Try Again....");
    }
    function Signup (){
        if (fs.existsSync('login.txt')){
            fs.readFile('login.txt','utf-8',(err,data)=>{
                const Email=input("Enter Your Email-id => ");
                if(data.includes(Email)){
                    console.log('Your data allready have ');
                }else{
                    const userName = input('Enter your userName:-')
                    const password=input("Enter your password")
                    space='\n'
                    fs.appendFile('login.txt',`[${userName},${password},${Email}]${space}`,(err,data)=>{
                        console.log('your account created sucessfully....',"👍");
                    })
                }
            })
        }else{
            fs.createWriteStream('login.txt')
            console.log('Your file is created ');
            Signup();
        }
    }

    function login(){
        let name = input('Enter The UserName : - ')
        let pass=input("Enter The Password : -")
        fs.readFile('login.txt','utf-8',(err,data)=>{
            let userData = data.split('\n');
            for(d of userData){
                if (d.includes(name) && d.includes(pass)) {
                    console.log(d,":::-Login is successful-:::","👍" );
                    break
                }else{
                    console.log("sorry pass or name incroct plz try again.!!!!","👎" );
                }
            }
        })
    }
}

login_Signup_Async()