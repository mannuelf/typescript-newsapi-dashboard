import React, { useState, useEffect } from 'react';
import './App.css';

const API_KEY: string = '4bf001f99d6d424a9b3e683d28593d31';
const COUNTRY: string = 'no';
const URL: string = `http://newsapi.org/v2/top-headlines?country=${COUNTRY}&apiKey=${API_KEY}`;

function App() {

  interface InewsItemProps {
    author: (string|null);
    content: string;
    description: string;
    publishedAt: string;
    source: object;
    title: string;
    url: string;
    urlToImage: string;
  }
  
  const [news, setNews] = useState<InewsItemProps[]>([]);

  useEffect(() => {
    fetch(`${URL}`)
      .then((response) => response.json())
      .then((response) => {
        setNews(response.articles)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (news) {
    return (
      <div className="App">
        {
          news.map((newsItem: InewsItemProps, index: number) => {
            return (
              <div key={index}>
                <h1>{ newsItem.title }</h1>
                <img src={newsItem.urlToImage} alt={newsItem.urlToImage} />
                <span>{ newsItem.author}</span>
                <p>{ newsItem.description }</p>
              </div>
            )
          })
        }
      </div>
    );
  }

  return (
    <div className="App">No news for you sorry.</div>
  )
}

export default App;
