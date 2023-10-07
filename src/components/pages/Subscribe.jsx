
const Subscribe = () => {
    return (
        <div className="w-[70%] h-[50vh] bg-[#FFD32B] my-32 mx-auto rounded-lg relative text-center">
            <div className="w-[100%] h-[50vh] bg-[#F7FF62] mx-auto mt-4 rounded-lg absolute left-[-2%] top-[-8%] flex flex-col justify-center items-center">
                <div className="">
                    <h2 className="text-5xl font-bold py-4">Subscribe Now Forget 20% Discount <br /> Every Courses</h2>
                    <p className="py-4">Rutrum tellus pellentesque eu tincidunt. Venenatis cras sed felis eget velit aliquet sagittis id <br /> consectetur. Sit amet porttitor eget dolor morbi</p>
                </div>
                <div className="flex w-[70%] items-center">
                    <input type="text" className="w-[70%] h-16 outline-none px-2 border border-black rounded-lg bg-transparent my-4" />
                    <button className="w-[20%] h-16 bg-yellow-600 rounded-lg ml-4 text-white shadow-lg font-bold text-xl">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;

