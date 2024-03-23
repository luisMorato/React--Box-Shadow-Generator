import { useEffect, useState } from "react"
import { hexToRgb } from "../utils/Functions"

type Data = {
  data: { 
    horizontal: number,
    vertical: number,
    blur: number,
    spread: number,
    color: string,
    opacity: number,
    inset: boolean
  }
}

const Box = ({ data }: Data) => {
  const [style, setStyle] = useState<Data>();

  useEffect(() => {
    setStyle((prevData) => (
        {
          ...prevData,
          data
        }
    ));
  }, [data]);

  return style && (
    <div className="flex flex-col gap-y-8">
      <h2 className="text-2xl font-medium">Preview:</h2>
      <div 
        className="bg-violet-600 w-[260px] h-[225px]
          sm:w-[324px] 
          sm:h-[285px]
        "
        style={{boxShadow:`${style.data.horizontal}px ${style.data.vertical}px ${style.data.blur}px ${style.data.spread}px ${hexToRgb(style.data.color, style.data.opacity)} ${style.data.inset ? "inset" : ""}`}}
      ></div>
    </div>
  )
}

export default Box;