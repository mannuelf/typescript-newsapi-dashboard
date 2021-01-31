import { useState, useEffect } from 'react';
import { URL } from './config/config';
import ArticleCard from './components/ArticleCard';

function App() {
  const [news, setNews] = useState<IArticleCardProps[]>([]);

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
          news.map((newsItem: IArticleCardProps, index: number) => {
            return (
              <ArticleCard
                key={index}
                {...newsItem} // Destructured, as apposed to having a list props
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
