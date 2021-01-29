import React, { useState, useEffect } from 'react';
import { URL } from './config';
import Article from './components/Article';
import './App.css';

function App() {

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
              <Article
                key={index}
                {...newsItem}
              />
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
