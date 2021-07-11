interface IRootState {
  searchQuery: string;
  articles: IArticle[];
}

interface IResponse {
  articles: IArticle[];
  status: string;
  totalResults: number;
}

interface IArticleCardProps {
  author: string | null;
  description: string;
  publishedAt: string;
  title: string;
  url: string;
  urlToImage: string;
}

interface ISource {
  id: string;
  name: string;
}

interface IArticle {
  author: string | null;
  content: string;
  description: string;
  publishedAt: string;
  source: ISource;
  title: string;
  url: string;
  urlToImage: string;
}
