type Props = {
  time: string;
}

export default function PublishedAt(time: Props) { // you can do inline default export like this.
  return (
    <div className="font-normal text-gray-500">
      {time.time}
    </div>
  )
}

// Used a Type here instead of interface as the data type is quite simple.
// read more: https://blog.logrocket.com/types-vs-interfaces-in-typescript/
