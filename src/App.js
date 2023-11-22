import React from 'react';
import './App.css'; // Import the CSS file

const NewsArticle = ({ article }) => {
  return (
    <div className="news-article">
      <a href={article.homeUrl} className="home-button">Home</a>
      <img src={article.logo} alt="Publication Logo" className="publication-logo" />
      <hr className="separator" />
      <h2>{article.title}</h2>
      <div className="overview"><b>Overview:</b> {article.overview}</div>
      <div className="article-meta">
        <span className="date-time">{article.date} | {article.time}</span>
        <span className="publication">{article.publication}</span>
      </div>
      <img src={article.image} alt={article.title} className="article-image" />
      <p>{article.content}</p>
    </div>
  );
};

// Define your main App component
const App = () => {
  // Sample article data
  const article = {
    title: "'Friends' actor Matthew Perry passes away after apparent drowning: Report",
    date: '29 Oct 2023',
    time: '10:00 AM',
    publication: 'THE DAILY BUGLE',
    homeUrl: 'https://daily-bugle-ej94.vercel.app/', // replace with your home URL
    logo: '../logo.jpg', // replace with the path to your logo
    overview: 'Matthew Perry, best known for his role in the TV series "Friends", has passed away at the age of 54. Perry was found dead in his Los Angeles apartment, with no drugs found at the scene. The Los Angeles Police Department responded to the incident, but the identity of the deceased has not been officially confirmed. TMZ reported that there was no foul play involved.', // replace with your news overview
    content: `Matthew Perry from the popular 'Friends' series passes away at the age of 54.
    The actor was reportedly found dead at his Los Angeles apartment on
    Saturday.
    A report in TMZ stated that Perry was found in a jacuzzi at the home, and no
    drugs were found at the scene. A source from the Los Angeles Police
    Department informed PEOPLE that they were called to Perry's residence in
    response to the passing of a man in his fifties.
    However, they did not verify the identity of the deceased.
    TMZ also reportedly stated that there was no foul play involved. The first-
    responders were called to the residence for cardiac arrest.
    Matthew Perry was born in Williamstown, Massachusetts, on August 19, 1969.
    He was raised in Ottawa, Canada, and during his time there, he attended
    elementary school alongside Canadian Prime Minister Justin Trudeau. His
    mother, Suzanne Morrison, was a journalist and press secretary to Prime
    Minister Pierre Trudeau, Justin's father.
    Matthew Perry's stepfather is Keith Morrison from Dateline. His biological
    father, John Bennett Perry, was both an actor and model. In fact, a notable
    moment in Matthew Perry's early career occurred when he made a guest
    appearance on his father's cop show, "240-Robert," in 1979.
    Matthew Perry relocated to Los Angeles during his teenage years. Initially, he
    secured a few television guest roles before gaining recognition for his recurring
    role as Chazz Russell on 'Boys Will Be Boys' from 1987 to 1988. He went on to
    appear in series like 'Growing Pains' and 'Sydney.' However, his major
    breakthrough came in 1994 when he joined the cast of the iconic NBC sitcom.`,
    image: '../photo.avif' // replace with the path to your image
  };

  return (
    <div className="App">
      <NewsArticle article={article} />
    </div>
  );
};

export default App;
