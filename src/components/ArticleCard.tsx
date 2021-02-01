import Heading from './Heading';
import PublishedAt from './PublishedAt';
import Image from './Image';
import Author from './Author';
import Blurb from './Blurb';

function Article({ title, author, description, publishedAt, urlToImage }: IArticleCardProps) {
  return (
    <div className="bg-white p-4">
      <Image src={urlToImage} alt={title} />
      <Heading content={title} />
      <PublishedAt time={publishedAt} />
      <Author content={author} />
      <Blurb content={description} />
    </div>
  )
}

export default Article;
