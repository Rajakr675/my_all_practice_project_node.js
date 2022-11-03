// console.log("!!!-----*Well-Come To CRUD  Opreation*---with tras file and restore (New-fitures)--!!!");

let input=require('prompt-sync')();
const fs=require("fs")
// let lis=[]
let obj={}
while(true){
    console.log("!!!-----*Well-Come To CRUD  Opreation*-----!!!");
    function cheakgmail () {
            var mail = input(`Plese enter your gmail id => `)
            if ( mail.includes('@') && mail.includes('gmail.com') ){
                return mail;
            } else {
                console.log(`\nyour gmail id is not right\nplease enter your right gmail id \n`);
                return cheakgmail ();
            }
        }
    function creat(){
        if ( !fs.existsSync('file.json') ){ 
            const mail = input(`Plese enter your gmail id => `)
            if ( mail.includes('@') && (mail.includes('gmail.com'))) {
                console.log(` your gmail is right `,"👍");
                obj[mail]={'user-id':input('Please enter your user id => '),
                'first-name':input('enter your first name => '),
                'last-name':input('Please enter your last name => '),
                'age':input('enter your age =>'),
                'M-Number':input("mob_number")
                }
                fs.writeFileSync("file.json",JSON.stringify(obj,null,4));
                console.log('data is done',"👍");
            }
            else {
                console.log(`your gmail is not right\nplease enter your right gmail .`);
            }
        }
        else {
            const data = fs.readFileSync('file.json','utf-8')
            const info = JSON.parse(data);
            if(info!=""){
                // yaha function ko call kiya hai 
                const mail = cheakgmail ();
                console.log(`your gmail is right :`,"👍");
                info[mail] = {'user-id':input('Please enter your user id => '),
                'first-name':input('enter your first name => '),
                'last-name':input('Please enter your last name => '),
                'your-age':input('enter your age => '),
                'Phoone-Number':input("Mo_Number =>")}
                fs.writeFileSync("file.json",JSON.stringify(info,null,4));
                console.log('data is done',"👍");

            } else {
                console.log(' here is not Data ');
            }
        }
    }
    function read(){
        const data=fs.readFileSync("file.json","utf-8")
        const info=JSON.parse(data)
        console.log("all-data",info);
        console.log("which id read");
        const mail=cheakgmail()
        if (mail in info){
            console.log('Your gmail data ',info[mail]);
        }else {
            console.log('mail is not exit ');
            read ();
        }
    }
    function update(){
        const data=fs.readFileSync("file.json","utf-8")
        const info=JSON.parse(data)
        const mail=cheakgmail()
        if (mail in info){
            console.log("your data",info[mail]);
            console.log("what do you want to update ");
            console.log(`\npress 1. for user id update,\npress 2. for first name update.\npress 3. for last name update.\npress 4. for age update.\npress 5. for mobile number update.\npress 6. for all update.\n`);
            const choice = input('Please enter your choice=> ');

            if (choice =="1"){
                info[mail]["user-id"]=input("enter your new user-id =>")
                fs.writeFileSync("file.json",JSON.stringify(info,null,4))
                console.log("-:updated your user-id;-","👍");
            } else if (choice =="2"){
                info[mail]["first-name"]=input("enter your new first name =>")
                fs.writeFileSync("file.json",JSON.stringify(info,null,4))
                console.log("-:uodated your first name:-","👍");
            } else if (choice =="3"){
                info[mail]["last-name"]=input("enter your new last name =>")
                fs.writeFileSync("file.json",JSON.stringify(info,null,4))
                console.log("-:updaated your last name;-","👍");
            } else if (choice =="4"){
                info[mail]["your-age"]=input("enter your new age =>")
                fs.writeFileSync("file.json",JSON.stringify(info,null,4))
                console.log("-:updated your age;-","👍");
            } else if (choice =="5"){
                info[male]["Phoone-Number"]=input("enter your new Phoone-Number =>")
                fs.writeFileSync("file.json",JSON.stringify(info,null,4))
                console.log(":-updated your Phoone-Number:-","👍");
            } else if (choice =="6"){
                info[mail] = {'user-id':input('Please enter your new user id => '),
                'first-name':input('Please enter your new first name => '),
                'last-name':input('Please enter your new last name =>'),
                'your-age':input('Please enter your new age =>'),
                'Phoone-Number':input("plz enter your new phone number =>")
            }
            fs.writeFileSync('file.json',JSON.stringify(info,null,4));
            console.log(`-:data is updated;-`,"👍");}
        } else {
            console.log("gmaile is not exist");
            update()
        }
    }
    function delet(){
        const data=fs.readFileSync("file.json","utf-8")
        const info=JSON.parse(data)
        console.log("*which id delete in data*");
        const mail=cheakgmail()
        if (mail in info){
            function recall(){
                if(fs.existsSync("Tras.json")){
                    const lod=fs.readFileSync("Tras.json","utf-8")
                    const stt=JSON.parse(lod)
                    // console.log("info: ",info[mail]);
                    stt[mail]=info[mail]
                    // console.log("str: ",stt);
                    fs.writeFileSync("Tras.json",JSON.stringify(stt,null,4))
                    delete info[mail]
                    fs.writeFileSync('file.json',JSON.stringify(info,null,4));
                    console.log("your id is deleted");
                }else{
                    let temp={}
                    fs.writeFileSync("Tras.json",JSON.stringify(temp,null,4))
                    console.log("file is created.");
                    recall()
                }
            }recall()
            
        } else{
            console.log("mail is not exists");
        }
    }
    function Tras(){
        // console.log("aagaya");
        const data=fs.readFileSync("Tras.json","utf-8")
        const info=JSON.parse(data)
        console.log("!!> your all data <!!\n",info);
        console.log("press 1).Permanant-Delete\npress 2).Restore-Data");
        let choice=input("\nEnter your choice =>")
        if (choice=="1"){
            const mail=cheakgmail()
            if(mail in info){
                delete info[mail]
                fs.writeFileSync('Tras.json',JSON.stringify(info,null,4));
                console.log("your data is permanant deleted.");
            }
        }else if(choice =="2"){
            const data=fs.readFileSync("Tras.json","utf-8")
            const info=JSON.parse(data)
            console.log("your all deleted data.\n",info);
            console.log("which data you are Restore in Tras file.\n");
            const mail=cheakgmail()
            if(mail in info){
                const main_file=fs.readFileSync("file.json","utf-8")
                const chang_str=JSON.parse(main_file)
                chang_str[mail]=info[mail]
                fs.writeFileSync("file.json",JSON.stringify(chang_str,null,4))
                delete info[mail]
                // again sett your data
                fs.writeFileSync('Tras.json',JSON.stringify(info,null,4));
                console.log("your data is Restored.");
                
            }
        }
    }
    console.log("press 1).for creat \npress 2).for read \npress 3).for update \npress 4).for delete \npress 5).for Tras");
    const x=input("\nenter the choice =>")
    if(x=="1"){
        creat()
    }else if(x=="2"){
        read()
    }else if(x=="3"){
        update()
    }else if(x=="4"){
        delet()
    }else if(x=="5"){
        Tras()
    }else{
        break
    }
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
