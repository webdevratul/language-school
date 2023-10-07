import { AiFillCaretRight } from "react-icons/ai";

const Packages = () => {
    return (
        <div className="py-10 mx-auto bg-[#F6F6F6]">
            <h2 className="text-center text-6xl font-bold my-20">Premium Price Packages</h2>
            <div className="grid grid-cols-3 w-[60%] mx-auto gap-x-4 mb-14">
                <div className=" flex flex-col gap-y-4 bg-white py-14 px-6 cursor-pointer rounded-lg shadow-2xl">
                    <h2 className="text-center font-bold text-3xl">BASIC PLAN</h2>
                    <h1 className="text-center font-bold text-5xl">$50</h1>
                    <div className="mx-auto flex flex-col gap-y-4">
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl">All Video for 3 Months</p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl">Testing for 10 Courses</p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl">Checking 5 Homework</p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl">Mentor Consultation</p>
                        </div>
                    </div>
                    <button className="px-4 py-3 border-2 border-[#FFD32B] text-black font-bold rounded-lg shadow-md">Explore More</button>
                </div>
                <div className=" flex flex-col gap-y-4 bg-yellow-50 py-14 px-6 cursor-pointer rounded-lg shadow-2xl">
                    <h2 className="text-center font-bold text-3xl">STANDART PLAN</h2>
                    <h1 className="text-center font-bold text-5xl">$160</h1>
                    <div className="mx-auto flex flex-col gap-y-4">
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl">All Video for 12 Months</p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl">Testing for 15 Courses</p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl">Checking 10 Homework</p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl">Mentor Consultation</p>
                        </div>
                    </div>
                    <button className="px-4 py-3 border-2 border-[#FFD32B] text-black font-bold rounded-lg shadow-md">Explore More</button>
                </div>
                <div className=" flex flex-col gap-y-4 bg-white py-14 px-6 cursor-pointer rounded-lg shadow-2xl">
                    <h2 className="text-center font-bold text-3xl">PREMIUM PLAN</h2>
                    <h1 className="text-center font-bold text-5xl">$250</h1>
                    <div className="mx-auto flex flex-col gap-y-4">
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl">All Video for 24 Months</p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl">Testing for 20 Courses</p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl">Checking 20 Homework</p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl">Mentor Consultation</p>
                        </div>
                    </div>
                    <button className="px-4 py-3 border-2 border-[#FFD32B] text-black font-bold rounded-lg shadow-md">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Packages;