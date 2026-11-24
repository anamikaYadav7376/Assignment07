import React, { useState } from 'react';
import BookCard from '../components/BookCard';

function Books({ books, onIssue, onReturn }) {
  const [selectedGenre, setSelectedGenre] = useState('All');

  const filteredBooks = books.filter((book) => {
    if (selectedGenre === 'All') {
      return true;
    }
    return book.genre === selectedGenre;
  });

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>All Books</h1>

        <div className="filter-container">
          <label htmlFor="genre-filter">Filter by Genre: </label>
          <select
            id="genre-filter"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Biography">Biography</option>
            <option value="Fiction">Fiction</option>
            <option value="Technology">Technology</option>
            <option value="Self-Help">Self-Help</option>
          </select>
        </div>
      </div>

      {filteredBooks.length === 0 ? (
        <p className="empty-message">No books found in this genre.</p>
      ) : (
        <div className="books-grid">
          {filteredBooks.map((book) => (
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

export default Books;
