<?php
    include_once("dbConnection.php")
?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./stylesheet.css">
    <script src="script.js"></script>
    <title>Library App - Josefin Örling</title>
</head>
<body onload="displayAllBooks()">
    <div id="content">
        <h1>Library Catalogue</h1>
        <!-- Display books in list, add new books via button -->
        <div class="bookList">
            <button>Add book</button>
            <ul id = "bookInfo">
                
            </ul>
        </div>

        <!-- Dialog to add books -->
        <dialog id="addBookDialog" open>
            <h3>Add new book</h3>
            <div id="newBookInputFields">
                <div>
                    <label for="newBookTitle">Book title</label>
                    <input id="newBookTitle" type="text">
                </div>
                
                <div>
                    <label for="newBookAuthor">Author</label>
                    <input id="newBookAuthor" type="text">
                </div>
                
                <div>
                    <label for="newBookPages">Pages</label>
                    <input id="newBookPages" type="number">
                </div>
                
            </div>
            <div id="newBookErrorMessage">

            </div>
            

            <button id="newBookSubmit" onclick="addBookToLibrary({
                title: document.getElementById('newBookTitle').value,
                author: document.getElementById('newBookAuthor').value,
                pages: document.getElementById('newBookPages').value
            })">Add book</button>
        </dialog>
    </div>
    
</body>
</html>