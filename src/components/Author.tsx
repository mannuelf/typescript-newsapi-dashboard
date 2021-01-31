interface IAuthor {
  content?: (string | undefined | null);
}

export default function Author(content: IAuthor) {
  return (
    <div>
      {content.content}
    </div>
  )
}
