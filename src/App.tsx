import React, { useState, useEffect } from 'react';
import { URL } from './config';
import './App.css';

function App() {
  interface InewsItemProps {
    author: (string | null);
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
        {/* 
          <Article title={}, url_to_image={}, author={}, description={} />
        */}
        {
          news.map((newsItem: InewsItemProps, index: number) => {
            return (
              <div key={index}>
                <h1>{newsItem.title}</h1>
                <img src={newsItem.urlToImage} alt={newsItem.title} />
                <span>{newsItem.author}</span>
                <p>{newsItem.description}</p>
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
