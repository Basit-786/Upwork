import { useState } from "react";
import { AiOutlineClose, AiOutlineCalendar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const Home = () => {
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "address") {
      setAddress(value);
    } else if (name === "note") {
      setNote(value);
    }
  };
  return (
    <div className="">
      <div className="bg-[#262626]">
        <header className=" py-5 px-8 flex justify-between mb-10 max-w-7xl  mx-auto gap-4">
          <h1 className="font-semibold text-3xl text-white ">
            Choose the form of payment
          </h1>

          <AiOutlineClose className="text-white text-2xl bg-[#F34822] p-1 cursor-pointer mt-3 md:mt-0" />
        </header>
      </div>
      <div className="px-7 md:px-12 max-w-7xl  mx-auto ">
        <div className="bg-[#F8FAFC] border border-[#E5ECF3] p-4 flex items-center justify-between rounded-2xl mb-10 flex-wrap gap-5">
          <div className="flex items-center gap-5 ">
            <div className="bg-[#EDF2F8] flex items-center justify-center w-16 h-16 text-black text-3xl font-semibold rounded-full">
              J
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold">John</h2>
              <p className="text-[#B4BDC9] text-lg ">(88) 99602-2404</p>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="bg-[#EDF2F8] font-medium py-4 px-6 cursor-pointer rounded-lg text-xl"
            >
              Logout
            </button>
          </div>
        </div>
        <h1 className="text-[29px] md:text-3xl mb-4 font-bold">
          Selected service
        </h1>
        <div className="flex items-center gap-8 p-5 border border-[#E5ECF3] rounded-2xl mb-8 flex-wrap">
          <div className="w-16 h-16 rounded-lg">
            <img
              src="/pic.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col ">
            <h3 className="text-2xl font-medium">Japanese lessons</h3>
            <p className="flex items-center gap-3 text-[#88898a] text-lg">
              <AiOutlineCalendar />
              <span>Nov 7, 2020 - 11:30</span>
            </p>
            <p className="flex items-center gap-3 text-[#88898a] text-lg">
              <GoLocation />
              <span>Client's place</span>
            </p>
            <h3 className="text-2xl font-medium">Rp 350.000</h3>
          </div>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="address" className="font-medium text-2xl mb-3">
            Enter your location
          </label>

          <input
            type="text"
            value={address}
            name="address"
            onChange={handleChange}
            id="address"
            placeholder="Enter address"
            className="border border-[#E5ECF3] text-[#88898a] py-4 px-6 rounded-xl text-xl outline-none"
          />
        </div>
        <div className="flex flex-col mb-8">
          <label htmlFor="note" className="font-medium text-2xl mb-3">
            Note (optional)
          </label>
          <input
            type="text"
            value={note}
            name="note"
            onChange={handleChange}
            id="note"
            placeholder="Enter text here"
            className="border border-[#E5ECF3] text-[#88898a] py-4 px-6 rounded-xl text-xl outline-none"
          />
        </div>
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Choose a way to pay
          </h2>
          <div className="flex items-center gap-5 flex-wrap">
            <button className="border-[#FFCD2A] px-10 md:px-20 text-xl md:text-2xl py-3 md:py-4 border-[5px] md:border-[7px] font-medium ">
              Cash
            </button>
            <button className="bg-[#d6d6db] px-10 md:px-20 text-xl md:text-2xl py-3 md:py-5 rounded-lg font-medium ">
              Credit card
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-8">
          <input type="checkbox" className="border border-[#B0B0B0] w-7 h-7" />
          <p className="text-[#7A889D] text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed{" "}
            <span className="text-[#1F21FF]">
              <a href="#" className="underline">
                do eiusmodd
              </a>
            </span>
          </p>
        </div>
        <div className="flex items-center justify-between border-t border-[#E5ECF3] py-5 flex-wrap gap-5">
          <button className="text-xl font-medium px-5 py-4">Previous</button>
          <button className="px-10 py-4 bg-[#1F21FF] text-white text-xl font-normal rounded-lg">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
