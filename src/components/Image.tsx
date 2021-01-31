interface IImageProp {
  src: string;
  alt?: string;
}

function Image(image: IImageProp) {
  return (
    <div className="text-gray-900">
      <img src={image.src} alt={image.alt} />
    </div>
  )
}

// or you can export like this too
export default Image;
