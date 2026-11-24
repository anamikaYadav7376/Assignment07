import React from 'react';
import { Link } from 'react-router';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">📚 Library Manager</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/books">All Books</Link>
        <Link to="/issued">Issued Books</Link>
      </div>
    </nav>
  );
}

export default Navbar;
