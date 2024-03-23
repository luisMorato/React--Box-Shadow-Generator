type Data = {
    horizontal: number,
    vertical: number,
    blur: number,
    spread: number,
    color: string,
    opacity: number
}

type ComponentProps = {
    id: string,
    text: string,
    type: string,
    min: string, 
    max: string,
    step?: string,
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    data: Data
}

const Inputs = ({ id, text, type, min, max, step, handleInputChange, data }: ComponentProps) => {
    return (
    <div className="mb-4">
        <label
            htmlFor={id}
            className="font-medium"
        >
            {text}
        </label>
        <div className="flex justify-between mt-2">
            <input
                id={id}
                name={id}
                type={type}
                onChange={(e) => handleInputChange(e)}
                value={(data[id as keyof Data]) as number}
                min={min}
                max={max}
                step={step}
                className="appearance-none mr-28
                [&::-webkit-slider-runnable-track]:h-1
                [&::-webkit-slider-runnable-track]:bg-[#B5B5B5]
                [&::-webkit-slider-runnable-track]:min-w-52
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none 
                [&::-webkit-slider-thumb]:h-5 
                [&::-webkit-slider-thumb]:w-5
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-violet-600
                [&::-webkit-slider-thumb]:-translate-y-[40%]
                md:[&::-webkit-slider-runnable-track]:min-w-72
                md:mr-44"
            />
            <div className="flex items-center gap-x-2 text-sm">
                <div className="flex items-center justify-center border border-neutral-400 h-10 w-10 font-medium">{data[id as keyof Data]}</div>
                <span className="font-medium">px</span>
            </div>
        </div>
    </div>
  )
}

export default Inputs;