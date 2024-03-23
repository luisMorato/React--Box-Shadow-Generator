import { SetStateAction, useCallback, useMemo } from "react";
import { FaCheck } from "react-icons/fa";

import Inputs from "./Inputs";

type Data = {
  horizontal: number,
  vertical: number,
  blur: number,
  spread: number,
  color: string,
  opacity: number,
  inset: boolean
}

type inputsProps = {
    id: string,
    text: string,
    type: string,
    min: string,
    max: string,
    step?: string
}[];

type ConfigurationProps = {
  setData: React.Dispatch<SetStateAction<Data>>
  data: Data
}

const Configuration = ({ setData, data }: ConfigurationProps) => {
  const inputs: inputsProps = useMemo(() => [
    {
        id: "horizontal",
        text: "Horizontal Displacement:",
        type: "range",
        min: "-30",
        max: "40",
    },
    {
        id: "vertical",
        text: "Vertical Displacement:",
        type: "range",
        min: "-10",
        max: "40",
    },
    {
        id: "blur",
        text: "Blur:",
        type: "range",
        min: "0",
        max: "65",
    },
    {
        id: "spread",
        text: "Spread:",
        type: "range",
        min: "0",
        max: "30",
    },
    {
        id: "opacity",
        text: "Opacity:",
        type: "range",
        min: "0",
        max: "1",
        step: "0.01"
    }
  ], []);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    if(e.target.id === 'color'){
      setData((prevData) => {
        return {
          ...prevData,
          [e.target.name]: e.target.value,
        }
      });
      return;
    }

    const value = e.target.id === 'inset' ? e.target.checked : parseFloat(e.target.value);
    
    setData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: value,
      }
    });
  }, [setData]);

  return (
    <div className="flex flex-col gap-y-8 w-fit">
      <h2 className="text-2xl font-medium">Configuration</h2>
      <div>
        {inputs.map((input) => (
          <Inputs
            key={input.id} 
            id={input.id}
            text={input.text} 
            type={input.type} 
            min={input.min}
            max={input.max}
            step={input.step}
            handleInputChange={handleInputChange} 
            data={data}
          />
        ))}
        <div className="flex flex-col gap-y-4 mt-5 w-full">
          <label 
            className="font-medium" 
            htmlFor="color"
          >
            Shadow Color:
          </label>
          <div className="flex justify-between items-center gap-x-2 text-sm">
              <input
                id="color"
                name="color"
                type="color"
                value={data["color"]}
                onChange={(e) => handleInputChange(e)}
                className="cursor-pointer"
              />
              <div className="flex items-center gap-x-2">
                <div className="flex items-center justify-center border border-neutral-400 py-2 px-2 font-medium">{data["color"]}</div>
                <span className="font-medium">px</span>
              </div>
          </div>
        </div>
        <div>
          <label className="flex gap-x-3 mt-5">
            <span className="font-medium">Inset Shadow?</span>
            <div className="relative flex items-center justify-center">
              <input
                id="inset"
                name="inset"
                type="checkbox"
                onChange={(e) => handleInputChange(e)}
                className="appearance-none relative border border-neutral-400 h-[15px] w-[15px] rounded cursor-pointer peer"
              />
              <FaCheck 
                size={10} 
                className="absolute text-violet-600 hidden pointer-events-none
                  peer-checked:block
                "
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Configuration;