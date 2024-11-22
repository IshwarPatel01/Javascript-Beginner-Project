// Get DOM elements
const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const bookList = document.getElementById('book-list');
const btn = document.querySelector('.btn');

// Function to add a new book (Create)
function addBook() {
  // Get book details from input fields
  const bookTitle = title.value;
  const bookAuthor = author.value;
  const bookYear = year.value;

  // Check if all fields are filled
  if (!bookTitle || !bookAuthor || !bookYear) {
    alert('Please fill in all fields');
    return;
  }

  // Create a new book element
  const bookItem = document.createElement('li');
  bookItem.classList.add('book-item');
  bookItem.innerHTML = `
    <strong>${bookTitle}</strong> by ${bookAuthor} (${bookYear})
    <button class="delete-btn">Delete</button>
    <button class="edit-btn">Edit</button>
  `;

  // Append new book to the list
  bookList.appendChild(bookItem);

  // Clear input fields
  title.value = '';
  author.value = '';
  year.value = '';
}

// Function to handle deleting a book (Delete)
function deleteBook(e) {
  if (e.target.classList.contains('delete-btn')) {
    e.target.parentElement.remove(); // Remove the book item
  }
}

// Function to handle editing a book (Update)
function editBook(e) {
  if (e.target.classList.contains('edit-btn')) {
    const bookItem = e.target.parentElement;
    const bookTitle = bookItem.querySelector('strong').textContent;
    const bookAuthor = bookItem.textContent.split('by')[1].split('(')[0].trim();
    const bookYear = bookItem.textContent.split('(')[1].split(')')[0].trim();

    // Populate the form with existing values
    title.value = bookTitle;
    author.value = bookAuthor;
    year.value = bookYear;

    // Remove the book item from the list
    bookItem.remove();
  }
}

// Event listener to add a new book
btn.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent page reload on form submit
  addBook();
});

// Event listener to handle delete and edit actions
bookList.addEventListener('click', function (e) {
  deleteBook(e);
  editBook(e);
});
