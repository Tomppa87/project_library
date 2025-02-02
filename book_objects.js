const myLibrary = [
    ["The Hobbit","J.R.R. Tolkien", 299, false],
    ["Winnie the Pooh", "A.A. Milne", 112, true]
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

let update = document.getElementById("update_btn");
update.addEventListener("click", function() {
    for (books in myLibrary) {
        console.log(books.key)
    }
    
})

//const hobbit = new Book("The Hobbit","J.R.R. Tolkien", 299, false)
//const pooh = new Book("Winnie the Pooh", "A.A. Milne", 112, true)
//console.log(hobbit.info());
//console.log(pooh.info())

/*Object.getPrototypeOf(hobbit) === Book.prototype;
Object.getPrototypeOf(pooh) === Book.prototype;
console.log(Object.getPrototypeOf(hobbit))*/