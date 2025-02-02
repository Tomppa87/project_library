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
        for (let prop in myLibrary[i]) {            
            let book_card_content = document.createElement("div")
            book_card_content.classList.add(prop)
            let book_card_property = document.createTextNode(myLibrary[i][prop])
            book_card_content.appendChild(book_card_property)
            book_card.appendChild(book_card_content)
        }
        main.appendChild(book_card)               
    }
    
})