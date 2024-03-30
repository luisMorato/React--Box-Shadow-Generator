import { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { hexToRgb } from "../utils/Functions";
import { toast } from "react-toastify";

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

const Result = ({ data }: Data) => {
  const [result, setResult] = useState<Data>();

  useEffect(() => {
    setResult((prevResult) => {
      return {
        ...prevResult,
        data
      }
    });
  }, [data]);

  const copyCode = () => {
    const div = document.getElementById("rules");
    if(div){
      navigator.clipboard.writeText(`
      ${div.childNodes[1].textContent}
      ${div.childNodes[2].textContent}
      ${div.childNodes[3].textContent}
      `);
    }
    toast.success('Coppied To Clipboard!');
  }

  return result && (
    <div className="mx-auto mt-14 w-full
    lg:w-4/5
    xl:w-3/5
    2xl:w-4/5">
      <h2 className="text-center text-2xl font-medium mb-4">Copy and Paste on Your CSS Code</h2>
      <div id="rules" className="relative flex flex-col justify-center items-center gap-y-4 bg-neutral-200 py-8 px-2">
          <button
            onClick={() => copyCode()}
            className="absolute top-2 right-2"
          >
            <FaCopy size={18} className="hover:text-violet-600 transition duration-200" />
          </button>
          <p className="text-sm lg:text-base">
            box-shadow: {result.data.horizontal}px {result.data.vertical}px {result.data.blur}px {result.data.spread}px {hexToRgb(result.data.color, result.data.opacity)} {result.data.inset && "inset"};
          </p>
          <p className="text-sm lg:text-base">
            -webkit-box-shadow: {result.data.horizontal}px {result.data.vertical}px {result.data.blur}px {result.data.spread}px {hexToRgb(result.data.color, result.data.opacity)} {result.data.inset && "inset"};
          </p>
          <p className="text-sm lg:text-base">
            -moz-box-shadow: {result.data.horizontal}px {result.data.vertical}px {result.data.blur}px {result.data.spread}px {hexToRgb(result.data.color, result.data.opacity)} {result.data.inset && "inset"};
          </p>
      </div>
      <p className="text-sm text-neutral-400 text-center">Click on the Icon to Copy</p>
    </div>
  )
}

export default Result;