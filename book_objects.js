let myLibrary = [
    {title:"The Hobbit",author:"J.R.R. Tolkien", pages:299, read:"Read"},
    {title:"Winnie the Pooh",author: "A.A. Milne", pages:112, read:"Not Read"}
];

const main = document.getElementById("main")
const form = document.querySelector("form")

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read_status = read;
    }


function addBooktoLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read)
    //newBook.index = (myLibrary.length+1)
    //console.log(newBook.index)
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
        let delCardBtn = document.createElement("button")
        delCardBtn.classList.add("delCardBtn")
        delCardBtn.id = i;
        let delCardProp = document.createTextNode("Delete");
        delCardBtn.appendChild(delCardProp);
        book_card.appendChild(delCardBtn);
        main.appendChild(book_card) 
        delCardBtn.addEventListener("click",(event) => {
            console.log((event.target.previousSibling))
            myLibrary.splice(i,1)
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
    const submit_pages = document.querySelector(".pages_input").value
    let submit_read
    if (document.getElementById("yes_read").checked) {
        submit_read = "Read"
    }
    else {
        submit_read = "Not Read"
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
/*
let delete_btns = document.getElementsByClassName(".delCardBtn");
for (let i = 0; i < delete_btns.length; i++) {
    console.log(delete_btns)
    button.addEventListener("click", () => {
        console.log("hi")
    })
}*/