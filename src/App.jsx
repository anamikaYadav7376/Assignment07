import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { initialBooks } from './data/books';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Books from './pages/Books';
import BookDetails from './pages/BookDetails';
import Issued from './pages/Issued';
import './index.css';

function App() {
  const [books, setBooks] = useState(initialBooks);

  function handleIssue(bookId) {
    const updatedBooks = books.map((book) => {
      if (book.id === bookId) {
        if (book.availableCopies > 0 && !book.isIssued) {
          return {
            ...book,
            isIssued: true,
            availableCopies: book.availableCopies - 1,
          };
        }
      }
      return book;
    });

    setBooks(updatedBooks);
  }

  function handleReturn(bookId) {
    const updatedBooks = books.map((book) => {
      if (book.id === bookId) {
        if (book.isIssued) {
          return {
            ...book,
            isIssued: false,
            availableCopies: book.availableCopies + 1,
          };
        }
      }
      return book;
    });

    setBooks(updatedBooks);
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home books={books} />} />
            <Route
              path="/books"
              element={
                <Books
                  books={books}
                  onIssue={handleIssue}
                  onReturn={handleReturn}
                />
              }
            />
            <Route
              path="/books/:id"
              element={
                <BookDetails
                  books={books}
                  onIssue={handleIssue}
                  onReturn={handleReturn}
                />
              }
            />
            <Route
              path="/issued"
              element={
                <Issued
                  books={books}
                  onIssue={handleIssue}
                  onReturn={handleReturn}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
