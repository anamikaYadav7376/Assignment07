import React from 'react';
import { Link } from 'react-router';

function Home({ books }) {
  const totalBooks = books.length;
  const issuedBooksCount = books.filter((book) => book.isIssued).length;
  const notAvailableCount = books.filter((book) => book.availableCopies === 0).length;

  return (
    <div className="page-container">
      <h1>Library Dashboard</h1>
      <p className="subtitle">Welcome to the Library Book Management System</p>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Books</h3>
          <p className="stat-number">{totalBooks}</p>
        </div>

        <div className="stat-card">
          <h3>Issued Books</h3>
          <p className="stat-number">{issuedBooksCount}</p>
        </div>

        <div className="stat-card">
          <h3>Not Available</h3>
          <p className="stat-number">{notAvailableCount}</p>
        </div>
      </div>

      <div className="quick-links">
        <Link to="/books" className="btn btn-primary">Browse All Books</Link>
        <Link to="/issued" className="btn btn-secondary">View Issued Books</Link>
      </div>
    </div>
  );
}

export default Home;
