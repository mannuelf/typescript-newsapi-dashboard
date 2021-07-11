import { useState, useEffect } from 'react';
import { URL } from '../config/config';
import ArticleCard from './article-card/ArticleCard';
import SearchForm from './SearchForm';

function App() {
  const [news, setNews] = useState<IArticle[]>([]);

  useEffect(() => {
    fetch(`${URL}`)
      .then((response) => response.json())
      .then((response) => {
        setNews(response.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (news) {
    return (
      <>
        <header className="sticky top-0 z-40 lg:z-50 w-full max-w-8xl mx-auto bg-white flex-none flex">
          <h1 className="text-3xl">Welcome to React news</h1>
        </header>
        <section className="container mx-auto">
          <SearchForm searchQuery="usa" />
          <div className="grid grid-cols-3 gap-4 py-8 px-4">
            {news.map((newsItem: IArticle, index: number) => {
              return <ArticleCard key={index} {...newsItem} />;
            })}
          </div>
        </section>
      </>
    );
  }

  return <div className="App">No news for you sorry.</div>;
}

export default App;
