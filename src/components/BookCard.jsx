import React from 'react';
import { Link } from 'react-router';

function BookCard({ book, onIssue, onReturn }) {
  return (
    <div className="book-card">
      <div className="card-header">
        <h3>{book.title}</h3>
        {book.availableCopies > 0 ? (
          <span className="badge badge-available">Available</span>
        ) : (
          <span className="badge badge-unavailable">Not Available</span>
        )}
      </div>

      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Available Copies:</strong> {book.availableCopies}</p>

      <div className="card-actions">
        {book.isIssued ? (
          <button className="btn btn-return" onClick={() => onReturn(book.id)}>
            Return
          </button>
        ) : book.availableCopies === 0 ? (
          <span className="out-of-stock-label">Not Available</span>
        ) : (
          <button className="btn btn-issue" onClick={() => onIssue(book.id)}>
            Issue
          </button>
        )}

        <Link to={`/books/${book.id}`} className="btn btn-details">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default BookCard;
