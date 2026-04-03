import React, { useState } from "react";
import { searchBooksAPI } from "./api";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const searchBooks = async () => {
    if (!query.trim()) {
      alert("Enter something first");
      return;
    }

    console.log("Searching for:", query);

    setLoading(true);
    setError(null);

    try {
      const results = await searchBooksAPI(query);

      console.log("BOOK RESULTS:", results);

      setBooks(results);
    } catch (err) {
      console.error("ERROR:", err);
      setError(err.message);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`book-search-app ${darkMode ? "dark" : "light"}`}>
      <header>
        <nav>
          <h1>📚 AI Book Finder</h1>
          <div className="nav-links">
            <button className="toggle-btn" onClick={toggleDarkMode}>
              {darkMode ? "🌙 Dark" : "☀️ Light"}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h2>Discover Your Next Great Read</h2>

          <div className="search-container">
            <input
              type="text"
              placeholder="Search books..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && searchBooks()}
            />

            <button onClick={searchBooks} disabled={loading}>
              {loading ? <span className="spinner"></span> : "Search"}
            </button>
          </div>
        </section>

        <section className="results">
          {loading ? (
            <div className="loading">Loading...</div>
          ) : error ? (
            <div className="error-message">{error}</div>
          ) : books.length === 0 ? (
            <div className="no-results">No results yet</div>
          ) : (
            <div className="book-grid">
              {books.map((book, index) => (
                <div key={index} className="book-card">
                  <h3>{book.title}</h3>
                  <p className="author">by {book.author}</p>
                  <p>{book.description}</p>
                  <p>⭐ {book.rating}</p>
                  <p>💰 {book.price}</p>
                  <p>📅 {book.publishedYear}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;