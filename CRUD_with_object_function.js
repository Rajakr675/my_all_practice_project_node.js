// CRUD WITH OBJECT AND FUNCTION...........
console.log("---------*Well-Come To CRUD  Opreation*-----------");

let prompt=require('prompt-sync')();
// const inputt= prompt("enter your number")
let obj={}
while (true){
    // creat....!
    const creat = () =>{
        var phone_no=prompt("Enter your phone_no -:")
        if (phone_no.length==10){
            obj[phone_no]={name:prompt("Enter your name: "),email:prompt("Enter your email: "),addres:prompt("Enter your address: ")}
            console.log(obj);
        }
        else{
            console.log("plz valied phone no :","⚠" );
        }
    }
    // read....!
    const read = () =>{
        console.log("* Wich mobile number want to read *");
        var phone_no=prompt("Enter the register mobile-no :")
        if (phone_no in obj){
            console.log(obj[phone_no]);
        }else{
            console.log("Your enter number is wrong !.please try again","⚠" );
        }
    }
    // update...!
    const update=()=>{
        console.log("*.Wich phone no id want to update.*");
        var phone_no=prompt("Enter the register phone-no -:")
        if (phone_no in obj){
            console.log("*Which property update in data...\n1).name \n2).email\n3).addres\n4).phone-no");
            var choice=parseInt(prompt("Enter your choice -:"))
            if (choice==1){
                var name=prompt("Enter your new-name :")
                obj[phone_no]["name"]=name
                console.log("Your name is updated succesfully.","👍" );
            }else if(choice==2){
                var email=prompt("Enter your new-email :")
                obj[phone_no]["email"]=email
                console.log("Your email is updated succesfully","👍" );
            }else if (choice==3){
                var addres=prompt("Enter your new-addres :")
                obj[phone_no]["addres"]=addres
                console.log("Your addres is update succesfully","👍" );

            }
            else if(choice==4){
                let phone = prompt("Enter new phone number: ")
                obj[phone] = obj[phone_no]
                delete obj[phone_no]
                console.log('updated successfully...');

            }
        }else{
            console.log("This phone-no is not avlible.");
        }
        console.log(obj);
    }
    //Delete.....!
    const Delete=()=>{
        var no=prompt("Which phone-no id !.You want to delete: Plz Enter :")
        if (no in obj ){
            delete obj[no]
            console.log(obj);
        }
        else{
            console.log("This number is not avlaible it");
        }
    }
    
    console.log("\npress 1). for Creat\npress 2). for Read\npress 3). for Update\npress 4). for Delete.\npress 5). For Exits.\n");
    var x=parseInt(prompt("* Enter the choice -:"))
    // creat...!
    if (x==1){
        creat()    
    }
    // read...!
    else if(x==2){
        read()
    }
    // update...!
    else if(x==3){
        update()
    }
    //Delete...!
    else if(x==4){
        Delete()
    }
    else if(x==5){
        console.log("* Thank You *");
        break
    }
    else{
        console.log("somthing-wrong","⚠" );
        break
    }
}






