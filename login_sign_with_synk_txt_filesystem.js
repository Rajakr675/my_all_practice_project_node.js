console.log("!----*-> well-come to Login_sign with_sync_txt_file <-*----!");

let input = require('prompt-sync')();
const fs = require("fs");
while (true) {
    if (!fs.existsSync('login.txt')) {
        fs.writeFileSync('login.txt')
        console.log("<--Done file is created-->");
    }else {
        const lod = fs.readFileSync('login.txt', 'utf-8')
        console.log('::read file::');
    }
    function signup() { //username,phoneNumber,pin 
        userName = input('Enter your userName:-')
        password=input("Enter your password")
        Email=input("Enter Your Email-id")
        space='\n'
        fs.appendFileSync('login.txt',`[${userName},${password},${Email}]${space}`)
        console.log('your account created sucessfully....');
    };

        function login(){
            reaD =fs.readFileSync('login.txt','utf-8')
            let name = input('Enter The UserName : - ')
            let pass=input("Enter The Password : -")
            let check = true;
            for (const i of reaD.split('\n')){
                if (i.includes(name)){
                    check = false;
                    console.log()
                    console.log(i,"Login is successful")
                    break
                }
            }
            if(check){
                console.log("Name is Incroct..!Plz Try Again..");
            }
        }
    console.log("1).signup  2).login");
    let choice = input("Enter your choice :")

    if (choice == 1) {
        signup()
    }
    else if(choice==2) {
        login()
    }else{
        console.log("sorry incroct choice...!Plz Try Again....");
    }

}
