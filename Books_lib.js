
const input = require("prompt-sync")();
const fs = require("fs");


class Books_Category {
    constructor() {

    } user_rent() {
        let read = fs.readFileSync("library.json", "utf-8");
        let parse = JSON.parse(read);
        // console.log("Book categrys-->", "1).Horror_Books", "2).Cartoon_Books", "3).Love_Books", "4).Magician_Books");
        console.log("!---Books-Categorys---!");
        let count = 1
        for (let Book in parse) {
            console.log(count, ")", Book);
            count += 1
        }
        const category = input("Ener the  choice wich category_Name you want => ");
        console.log("!--Your Book List--!");
        for (let i in parse[category]) {
            console.log(i);
        }

        let Book_Nmae = input("which book_Name you want Chose one of them => ");
        let Book_quty = parseInt(input("Enter Book Quantaty => "));
        if (Book_quty <= parse[category][Book_Nmae]) {
            let decries = parse[category][Book_Nmae] - Book_quty
            parse[category][Book_Nmae] = decries
            fs.writeFileSync("library.json", JSON.stringify(parse, null, 4));

            const Book_user = input("Enter your user_name...=> ");
            const user_mob = input("Enter your mobile_No....=> ");

            if (!fs.existsSync("user.json")) {
                let obj = {};
                fs.writeFileSync("user.json", JSON.stringify(obj, null, 4));
                let data = fs.readFileSync("user.json", "utf-8");
                let info = JSON.parse(data);
                info[user_mob] = { "Books_Name":[{[Book_Nmae]:Book_quty}], "user_name": Book_user };
                fs.writeFileSync("user.json", JSON.stringify(info, null, 4))
                console.log("Book rent is succesfully....");
            } else {
                let data = fs.readFileSync("user.json", "utf-8");
                let info = JSON.parse(data)
                info[user_mob] = { "Books_Name": [{[Book_Nmae]: Book_quty}], "user_name": Book_user };
                fs.writeFileSync("user.json", JSON.stringify(info, null, 4));
                console.log("Book rent is succesfully....");

            }
        }else{
            console.log("sorry yaar itna to nahi ha hamare paas Books..");
        }


    }
    user_return() {
        let data = fs.readFileSync("user.json", "utf-8")                             //"user.json"File.
        let info = JSON.parse(data)

        let read = fs.readFileSync("library.json", "utf-8");                    //"library.json"File.
        let parse = JSON.parse(read);

        let user_mob = input("Enter your Rejisted phone_No-id =>")
        if (user_mob in info) {
            let counter = 1
            for (let categorys in parse) {
                console.log(counter, ")", categorys);
                counter += 1
            }
            const category = input("Enter the which category_Name return you want => ");

            for (let i in parse[category]) {
                console.log(i);
            }
            let Book_Nmae = input("Which book return Enter the Name.=> ")
            if (Book_Nmae in info[user_mob] || Book_Nmae in parse[category]) {
                let Book_quty = parseInt(input("Enter Book Quantaty => "));
                let incries = parse[category][Book_Nmae] + Book_quty
                parse[category][Book_Nmae] = incries
                fs.writeFileSync("library.json", JSON.stringify(parse, null, 4));

                delete info[user_mob]
                fs.writeFileSync("user.json", JSON.stringify(info, null, 4))
                console.log("Your book is return is succesfully.");


            } else {
                console.log("Sorry This Book is no avlaible in my data .");
                this.user_return()
            }

        }else{
            console.log("sorry this phone_no-id is not avlaible.");
        }


    }


}



class Big_laibrary extends Books_Category {
    constructor(all_books, Books, Books_Category) {
        super()
        this.all_books = all_books
        this.Books = Books
        this.Books_Category = Books_Category

    }
    show_Books() {
        let read = fs.readFileSync("library.json", "utf-8")
        let parse = JSON.parse(read)
        console.log("!----> Books all here <----!");
        for (let i in parse) {
            console.log(parse[i]);

        }
    }
    rent_books() {
        // console.log("Book categrys-->","1).Horror_Books","2).Cartoon_Books","3).Love_Books","4).magician_Books")
        this.user_rent()

    }
    returan_book() {
        this.user_return()

    }
    add_Books(Book_category, Book_Nmae, Book_Quantaty) {
        let data = fs.readFileSync("library.json", "utf-8")
        let parse = JSON.parse(data)
        if (Book_category in parse) {
            if (Book_Nmae in parse[Book_category]) {
                let add = parse[Book_category][Book_Nmae] + Book_Quantaty
                parse[Book_category][Book_Nmae] = add
                fs.writeFileSync("library.json", JSON.stringify(parse, null, 4))
                console.log("your book is donate is succesfully...!");
            }else{
                parse[Book_category][Book_Nmae] = Book_Quantaty
                fs.writeFileSync("library.json", JSON.stringify(parse, null, 4))
                console.log("your book is donate is succesfully...!");
            }
        }else{
            parse[Book_category] = { [Book_Nmae]: Book_Quantaty }
            fs.writeFileSync("library.json", JSON.stringify(parse, null, 4))
            console.log("your book is donate is succesfully...!");
        }
    }

}
let obj = new Big_laibrary()



// New class.for rent book.





while (true) {
    console.log("!----> Well-come to this Laiabrary.! <----!");

    console.log("\npress 1). For see all books\n",
        "press 2).For rent books\n",
        "press 3).For return books\n",
        "press 4).For add books\n",
        "press 5).For Exits laibrary\n"
    );
    const choice = input("Enter your choice => ");
    if (choice == "1") {
        obj.show_Books()
    } else if (choice == "2") {

        obj.rent_books()
    } else if (choice == "3") {
        obj.returan_book()
    } else if (choice == "4") {
        let Book_category = input("Enter the Book category => ")
        let Book_Nmae = input("Enter the Book name => ")
        let Book_Quantaty = parseInt(input("Enter the Book_Qunataty =>"))

        obj.add_Books(Book_category, Book_Nmae, Book_Quantaty)
    } else if (choice == "5") {
        break
    }
}

// 😠 ... my code is done