interface IBlurb {
  content: string;
}

export default function Blurb(content: IBlurb) {
  return (
    <div>
      {content.content}
    </div>
  )
}
