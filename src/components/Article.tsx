function Article({ title, author, description, publishedAt, urlToImage }: InewsItemProps) {
    return (
        <div>
            <h1>{title}</h1>
            <span>{publishedAt}</span>
            <img src={urlToImage} alt={title} />
            <span>{author}</span>
            <p>{description}</p>
        </div>
    )
}

export default Article;