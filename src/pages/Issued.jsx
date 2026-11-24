import React from 'react';
import BookCard from '../components/BookCard';

function Issued({ books, onIssue, onReturn }) {
  const issuedBooks = books.filter((book) => book.isIssued);

  return (
    <div className="page-container">
      <h1>Issued Books</h1>
      <p className="subtitle">Books currently issued by you.</p>

      {issuedBooks.length === 0 ? (
        <p className="empty-message">No books issued yet</p>
      ) : (
        <div className="books-grid">
          {issuedBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onIssue={onIssue}
              onReturn={onReturn}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Issued;
