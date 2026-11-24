import React from 'react';
import { useParams, Link } from 'react-router';

function BookDetails({ books, onIssue, onReturn }) {
  const { id } = useParams();

  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <div className="page-container">
        <h2>Book Not Found</h2>
        <p>The book you are looking for does not exist.</p>
        <Link to="/books" className="btn btn-primary">Back to All Books</Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <Link to="/books" className="btn-back">← Back to All Books</Link>

      <div className="details-card">
        <div className="details-header">
          <h2>{book.title}</h2>
          {book.availableCopies > 0 ? (
            <span className="badge badge-available">Available</span>
          ) : (
            <span className="badge badge-unavailable">Not Available</span>
          )}
        </div>

        <div className="details-info">
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Genre:</strong> {book.genre}</p>
          <p><strong>Published Year:</strong> {book.year}</p>
          <p><strong>Total Pages:</strong> {book.pages}</p>
          <p><strong>Total Copies:</strong> {book.totalCopies}</p>
          <p><strong>Available Copies:</strong> {book.availableCopies}</p>
          <p>
            <strong>Current Status:</strong>{' '}
            {book.isIssued ? 'Currently Issued by You' : 'Not Issued'}
          </p>
        </div>

        <div className="card-actions">
          {book.isIssued ? (
            <button className="btn btn-return" onClick={() => onReturn(book.id)}>
              Return Book
            </button>
          ) : book.availableCopies === 0 ? (
            <span className="out-of-stock-label">Not Available</span>
          ) : (
            <button className="btn btn-issue" onClick={() => onIssue(book.id)}>
              Issue Book
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
