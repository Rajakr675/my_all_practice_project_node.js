let axios=require("axios");
let input=require('prompt-sync')();
const url='http://api.navgurukul.org/courses';



function cheakgmail () {
    var mail = input(`Plese enter your gmail id => `)
    if ( mail.includes('@') && mail.includes('gmail.com') ){
        return mail;
    } else {
        console.log(`\nyour gmail id is not right\nplease enter your right gmail id \n`);
        return cheakgmail ();
    }
}




const create = async () => {
    let mail=cheakgmail()
    const {data} = await axios.post('http://api.navgurukul.org/courses',
    {
        'Gmail':mail,
       'first-name':input('enter your first name => '),
       'last-name':input('Please enter your last name => '),
       'age':input('enter your age =>'),
    })
    console.log("your data is post succesfully..");
   
};
const read=async()=>{
    const {data}=await axios.get('http://api.navgurukul.org/courses')
    // console.log(data);
    let id=parseInt(input("enter id which id you want to read => "))
    for(let i of data){
        // console.log(i["id"]);
        if(i.id==id){
            console.log(i);
            break
        }
    }
}
const update=async (url)=>{
    const {data}=await axios.get('http://api.navgurukul.org/courses')
    let id=input("enter id which id you want to update => ")
    for(let i of data){
        if(i.id==id){
            let mail=cheakgmail()
            await axios.patch(url+'/'+id,
            {
                'Gmail':mail,
                'first-name':input('enter your first name => '),
                'last-name':input('Please enter your last name => '),
                'age':input('enter your age =>'),
            });
            console.log("Data your update succesfully..!");
            
        }
    }
}

const delet=async(url)=>{
    const {data}=await axios.get(url)
    console.log(data);
    const id=parseInt(input("enter the which id delete => "))
    for(let i of data){
        if(i.id==id){

            const {Data}=await axios.delete(url+'/'+id)
            console.log("Data your deleted succesfully..!");
        }
        else{
            console.log("sorry bro this id is not avilable..!");
        }
    }
}




console.log("press 1).for creat \npress 2).for read \npress 3).for update \npress 4).for delete.");
let choice=parseInt(input("\nEnter the choice => "));
if(choice==1){
    create()
}else if(choice==2){
    read()
}else if(choice==3){
    update(url)
}else if(choice==4){
    delet(url)
}else{
    process.exit();
}



