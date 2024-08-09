import Checkbox from "./CheckBox";
import Fast from "./Fast";
import FastAnimation from "./FastAnimation"
import { HiOutlineDownload } from "react-icons/hi";


function FirstPage() {
  return (
    <div className="mt-24">
        <div className="flex items-center text-center justify-center">
            <img src="chrome.png" alt="logo" className="w-20 h-20 flex text-center"/>
        </div>
        <div className="tracking-normal font-bold text-center text-7xl  mb-4">
            <h1>The browser</h1>
            <h1 className="text-4xl flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-3">
          Built to be
          <FastAnimation />
        </h1>
        </div>
        <div className="mt-10 flex items-center justify-center">
            <button className=" bg-blue-500 px-8 py-4 rounded-3xl text-white font-medium flex items-center gap-3"><HiOutlineDownload  className="text-white"/>Download Chrome</button>
        </div>
        <div className="flex items-center justify-center text-sm mt-3 text-gray-500">
            <p>For Windows 11/10 64-bit.</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:gap-3 p-4">
          <Checkbox/>
          <p className="text-sm text-gray-500 mt-2 lg:mt-0 lg:ml-4">
             Help make Google Chrome better by automatically sending usage statistics and crash
                <br className="lg:hidden" />
                  <p>reports to Google. <span className="cursor-pointer text-blue-500 hover:underline ">Learn more</span></p>
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center text lg:gap-5 p-4">
          <p className="text-sm text-gray-500">By downloading Chrome, you agree to the <span className="text-blue-500 hover:underline cursor-pointer">Google Terms of Service and </span><p className="text-blue-500 hover:underline cursor-pointer ml-8">Chrome and ChromeOS Additional Terms of Service</p></p>
        </div>
        <div className="mt-20">
          <Fast/>
        </div>
    </div>
  )
}

export default FirstPage
