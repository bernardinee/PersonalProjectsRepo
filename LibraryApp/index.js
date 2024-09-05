function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

let library = [];

function addBookToLibrary(title, author, pages, hasRead) {
    const newBook = new Book(title, author, pages, hasRead);
    library.push(newBook); 
    displayBooks(library); 
}

function displayBooks(library) {
    const booksContainer = document.getElementById('books-container');
    booksContainer.innerHTML = ''; 

    library.forEach((book, index) => {
        const bookCard = document.createElement('div'); 
        bookCard.classList.add('book-card'); 

        const title = document.createElement('h3');
        title.textContent = `Title: ${book.title}`;
        bookCard.appendChild(title);

        const author = document.createElement('p');
        author.textContent = `Author: ${book.author}`;
        bookCard.appendChild(author);

        const pages = document.createElement('p');
        pages.textContent = `Pages: ${book.pages}`;
        bookCard.appendChild(pages);

        const hasRead = document.createElement('p');
        hasRead.textContent = `Read: ${book.hasRead ? 'Yes' : 'No'}`;
        bookCard.appendChild(hasRead);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.setAttribute('data-index', index); 
        removeButton.addEventListener('click', removeBook); 
        bookCard.appendChild(removeBtn);

        const toggleReadButton = document.createElement('button');
        toggleReadButton.textContent = 'Toggle Read Status';
        toggleReadButton.setAttribute('data-index', index); 
        toggleReadButton.addEventListener('click', toggleReadStatus); 
        bookCard.appendChild(toggleReadBtn);

        booksContainer.appendChild(bookCard);
    });
}

function removeBook(event) {
    const bookIndex = event.target.getAttribute('data-index'); 
    library.splice(bookIndex, 1); 
    displayBooks(library); 
}

function toggleReadStatus(event) {
    const bookIndex = event.target.getAttribute('data-index'); 
    library[bookIndex].toggleReadStatus(); 
    displayBooks(library); 
}

Book.prototype.toggleReadStatus = function() {
    this.hasRead = !this.hasRead; 
};

document.getElementById('new-book-btn').addEventListener('click', function() {
    const form = document.getElementById('book-form');
    form.style.display = 'block';  
});

document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const hasRead = document.getElementById('hasRead').checked;

    
    addBookToLibrary(title, author, pages, hasRead);

   
    document.getElementById('book-form').reset(); 
    document.getElementById('book-form').style.display = 'none'; 
});

library.push(new Book('The Hobbit', 'J.R.R. Tolkien', 310, true));
library.push(new Book('The Girl Who Can', 'Ama Atta Aidoo', 328, false));

displayBooks(library);
