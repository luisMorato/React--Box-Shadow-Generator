import { useState } from "react";

import Box from "../Components/Box";
import Configuration from "../Components/Configuration";
import Result from "../Components/Result";
import Footer from "../Components/Footer";

type Data = {
  horizontal: number,
  vertical: number,
  blur: number,
  spread: number,
  color: string,
  opacity: number,
  inset: boolean
}

const Home = () => {
  const [data, setData] = useState<Data>({
    horizontal: 5,
    vertical: 5,
    blur: 10,
    spread: 3,
    color: "#000000",
    opacity: 1,
    inset: false
  });
  
  return (
    <div className="flex flex-col w-full mx-auto border m-5 p-5 pb-0
    sm:w-4/5
    md:w-3/5
    lg:w-4/5
    2xl:w-3/5
    min-[1700px]:w-1/2">
        <header className="self-center">
          <h1 className="relative text-3xl text-nowrap font-medium inline-block mt-8
          after:content-['']
          after:absolute
          after:bg-violet-600
          after:h-[2px]
          after:w-full
          after:top-full
          after:left-0">Box Shadow Generator</h1>
        </header>
        <div className="flex flex-col-reverse gap-y-20 w-full mt-14
        sm:items-center
        lg:flex-row
        lg:justify-center
        lg:items-start
        lg:gap-x-14">
          <Configuration
            setData={setData}
            data={data}
          />
          <Box 
            data={data}
          />
        </div>
        <Result 
          data={data}
        /> 
        <Footer />
    </div>
  )
}

export default Home;