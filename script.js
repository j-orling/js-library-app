const myLibrary = [{title: "The Watchmaker's Daughter", author: "CJ Archer", read: "read", rating: 4}, {title: "Frankenstein", author: "Mary Shelley", read: "not read", rating: null}];

function Book(title, author, read, rating) {
    this.title = title;
    this.author = author;
    this.read = read;
    this.rating = rating;

    this.bookInfo = function() {
        var infoString = this.title + " by " + this.author + ", " + this.read + ".";
        // If there is a rating, display it, too
        if(this.rating != null) {
            infoString += "Rating: " + this.rating + "/5.";
        }
        return infoString;
    }
}

Book.prototype.changeRating = function(rating) {
    this.rating = rating;
}

function addBookToLibrary(book) {
    document.getElementById('newBookErrorMessage').innerHTML = '';
    // Only add book if fields are not empty
    if(book.title != '' && book.author != '' && book.pages != null) {
        myLibrary.push(book);
        // Empty input fields
        document.getElementById('newBookTitle').value = '';
        document.getElementById('newBookAuthor').value = '';
        document.getElementById('newBookPages').value = null;
        // Refresh displayed books
        displayAllBooks();
    }
    else {
        // Display an error message for the dialog box
        var errorMessage = document.createElement('p');
        errorMessage.innerHTML = 'No fields can be left empty';
        document.getElementById('newBookErrorMessage').appendChild()
    }
    
}

function removeBookFromLibrary(book) {
    const indexToRemove = myLibrary.indexOf(book);
    if(indexToRemove > -1) {
        myLibrary.splice(indexToRemove, 1);
    }
}

function displayBook(book) {
    console.log("displaying");
    var newBook = document.createElement('li');
    newBook.innerHTML = `${book.title} by ${book.author}`;
    document.getElementById("bookInfo").appendChild(newBook);
}

function displayAllBooks() {
    // Remove any previous innerHTML from bookInfo
    document.getElementById('bookInfo').innerHTML = '';
    for(i = 0; i < myLibrary.length; i++) {
        displayBook(myLibrary[i]);
    }
}
