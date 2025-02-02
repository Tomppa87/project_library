const myLibrary = [
    {title:"The Hobbit",author:"J.R.R. Tolkien", pages:299, read:false},
    {title:"Winnie the Pooh",author: "A.A. Milne", pages:112, read:true}
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read_status = read;
    let output;
    this.info = function() {
        let read = this.read_status === true ? "Read" : "Not read yet";        
        output = this.title + " by " + this.author + ", " + this.pages
        + " pages, " + read;
    return output;
    }
}

function addBooktoLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
}

const main = document.getElementById("main")

let update = document.getElementById("update_btn");
update.addEventListener("click", function() {
    for (let i in myLibrary) {
        let book_card = document.createElement("div");
        book_card.classList.add("book_card")
        let book_card_content = document.createTextNode(Object.values(myLibrary[i]))
        book_card.appendChild(book_card_content);
        main.appendChild(book_card)
        
        //console.log(Object.values(myLibrary[i]))
        /*let card;
        for (let key in myLibrary[i]) {
            console.log(Object.values(myLibrary[i])) 
        }
            */
        
    }
    
})

//const hobbit = new Book("The Hobbit","J.R.R. Tolkien", 299, false)
//const pooh = new Book("Winnie the Pooh", "A.A. Milne", 112, true)
//console.log(hobbit.info());
//console.log(pooh.info())

/*Object.getPrototypeOf(hobbit) === Book.prototype;
Object.getPrototypeOf(pooh) === Book.prototype;
console.log(Object.getPrototypeOf(hobbit))*/