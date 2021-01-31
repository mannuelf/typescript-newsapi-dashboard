interface IImageProp {
  src: string;
  alt?: string;
}

function Image(image: IImageProp) {
  return (
    <img src={image.src} alt={image.alt} />
  )
}

// or you can export like this too
export default Image;
