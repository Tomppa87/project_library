// placeholder books
let myLibrary = [
    {title:"The Hobbit",author:"J.R.R. Tolkien", pages:"299 pages", read:"Read"},
    {title:"Winnie the Pooh",author: "A.A. Milne", pages:"112 pages", read:"Not Read"}
];

const main = document.getElementById("main")
const form = document.querySelector("form")

/*function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    }
    */

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}    

function default_state() {
    updateCards();    
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
            let book_index = document.createElement("span");
            book_index.innerText = i;
            book_index.classList.add("index");
            book_card_content.appendChild(book_card_property)
            book_card_content.appendChild(book_index)
            book_card.appendChild(book_card_content)            
        }
        // create read or not read button
        
        let read_updateBtn = document.createElement("button");
        read_updateBtn.classList.add("read_updateBtn")
        read_updateBtn.innerText = myLibrary[i].read
        if (read_updateBtn.innerText === "Read") {
            read_updateBtn.style.backgroundColor = "#66FF99"
        } else {
            read_updateBtn.style.backgroundColor = "red"
        }
        
        book_card.appendChild(read_updateBtn)

        // create delete book card button 
        let delCardBtn = document.createElement("button")
        delCardBtn.classList.add("delCardBtn")
        delCardBtn.id = i;
        let delCardProp = document.createTextNode("Delete");
        delCardBtn.appendChild(delCardProp);
        book_card.appendChild(delCardBtn);
        
        // append buttons

        main.appendChild(book_card) 

        // delete book button functionality
        delCardBtn.addEventListener("click",() => {            
            myLibrary.splice(i,1)
            clearCards();
            updateCards();
        })
        read_updateBtn.addEventListener("click",() => {            
            console.log(myLibrary[i].read)
            if (myLibrary[i].read === "Read") {
                myLibrary[i].read = "Not Read"
            } else {
                myLibrary[i].read = "Read"
            }
            clearCards();
            updateCards();
        })
    }      
}

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
    const submit_pages = (document.querySelector(".pages_input").value)+" pages"
    let submit_read = ""
    if (document.getElementById("yes_read").checked) {
        submit_read = "Read"        
    }
    else {
        submit_read = "Not Read";
        
    }    
    addBooktoLibrary(submit_title,submit_author,submit_pages,submit_read);
    console.log(myLibrary)
    clearCards();
    updateCards();
    form.reset();
});
function clearLibrary() {
    myLibrary = [];    
}
// Button to Clear myLibrary array and empty card page
const clearBtn = document.getElementById("delete_btn");
clearBtn.addEventListener("click", function(){
    clearLibrary();
    clearCards();
    updateCards();
})

default_state();
