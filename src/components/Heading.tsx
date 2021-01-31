interface IHeadingProps {
  content: string;
}

function Heading(content: IHeadingProps) {
  return (
    <h1>{content.content}</h1>
  )
}

export default Heading;
