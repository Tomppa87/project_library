const myLibrary = [
    {title:"The Hobbit",author:"J.R.R. Tolkien", pages:299, read:false},
    {title:"Winnie the Pooh",author: "A.A. Milne", pages:112, read:true}
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read_status = read;
    //let output;
    /*this.info = function() {
        let read = this.read_status === true ? "Read" : "Not read yet";        
        output = this.title + " by " + this.author + ", " + this.pages
        + " pages, " + read;*/
    //return output;
    }


function addBooktoLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
}

function clearCards() {
    document.querySelectorAll(".book_card").forEach(e => e.remove())
}
function updateCards() {
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
}

const main = document.getElementById("main")
const form = document.querySelector("form")

let update = document.getElementById("update_btn");
update.addEventListener("click", function() {
    clearCards()
    updateCards();
      
})
const newBtn = document.getElementById("submit_btn");

newBtn.addEventListener("click", function(event) {
    event.preventDefault()
    const submit_title = document.querySelector(".title_input").value
    const submit_author = document.querySelector(".author_input").value
    const submit_pages = document.querySelector(".pages_input").value
    const submit_read = document.querySelector(".read_input").value
    
    addBooktoLibrary(submit_title,submit_author,submit_pages,submit_read);
    console.log(myLibrary)
    updateCards();
    form.reset();
});
updateCards();
