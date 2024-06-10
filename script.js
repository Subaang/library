const myLibrary = [];
let id = 1;

function Book(id, name,author,pages) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.pages = pages;
     
}

function PlaceBooks(){
    document.getElementsByClassName('books-container')[0].innerHTML = "";
    for(let item of myLibrary){
        let book = document.createElement('div');
        book.style.width = "150px";
        book.style.height = "200px";
        book.style.border = '2px solid black';
        book.innerHTML = "Name:" + item.name + "<br>Author:" + item.author + "<br>Pages:" + item.pages +"<br>";

        let ongoing = document.createElement('button');
        ongoing.id = "book-"+item.id;
        ongoing.style.backgroundColor = "green";
        ongoing.innerHTML = "Ongoing"
        ongoing.onclick = ()=>{
            if(ongoing.style.backgroundColor == 'green'){
                ongoing.style.backgroundColor = 'yellow';
            }
            else{
                ongoing.style.backgroundColor = "green";
            }
            
        };

        let del = document.createElement('button');
        del.id = "delete-"+item.id;
        del.innerHTML = "Delete"
        del.style = "background:red";
        del.addEventListener("click", (e)=>{
            for(let i = 0; i < myLibrary.length; i++){
               
                if("delete-"+myLibrary[i].id == e.target.id){         
                    myLibrary.splice(i,1);
                }
            }

             PlaceBooks();
        });

        book.appendChild(ongoing);
        book.appendChild(del);
        document.getElementsByClassName('books-container')[0].appendChild(book);
        
    }
}



function addBookToLibrary(book) {
    myLibrary.push(book);
    document.getElementsByClassName('books-container')[0].innerHTML="";
}


const addBookButton = document.getElementById('add-book-button');
const finishAddButton = document.getElementById('finish-add-button');

let name = document.getElementById('name');
let author = document.getElementById('author');
let pages = document.getElementById('pages');



addBookButton.addEventListener('click',()=>{
    document.getElementsByClassName('add-dialog-box')[0].style.display="grid";
});

finishAddButton.addEventListener('click',()=>{
    document.getElementsByClassName('add-dialog-box')[0].style.display="none";
    let newBook = new Book(id,name.value,author.value,pages.value)
    addBookToLibrary(newBook);
    id += 1;
    name.value = "";
    author.value = "";
    pages.value = "";
    
    PlaceBooks();
});


