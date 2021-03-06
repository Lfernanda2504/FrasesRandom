import React, { useState, useEffect } from 'react';
import './App.css';
import { FiTwitter } from 'react-icons/fi';


function App() {
  const [quote, setQuote] = useState(" ");
  const [author, setAuthor] = useState(" ");

  // http://api.quotable.io/random
  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);
          setAuthor(quote.author);
        }
      )
  }, []);
  let NewQuote = () => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);
          setAuthor(quote.author);
        }
      )
  }
  return (
    <div>
      <h1 className='title'><strong>Random Quote App</strong></h1>
      <div className="container">
        <div className="quote" id="quote-box">
          <div id="text">{quote}</div>
          <small id="author">-{author}-</small>
        </div>
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col-6 md-1">
            <button id="new-quote" onClick={NewQuote}>Generate New Quote</button>
            </div>
            <div className="col-6 md-1">
            <a  id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${quote} -${author}-`} target="_blank"  rel="noopener noreferrer">
            <FiTwitter></FiTwitter>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
