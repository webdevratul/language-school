import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
import slider3 from "../../assets/images/slider3.jpg";
import "../../assets/css/pages/Slider.css";
import { AiFillCaretRight } from "react-icons/ai";

const Slider = () => {
    return (
        <div className="relative">
            <div className="carousel w-full h-[70vh]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slider1} className="w-full object-cover image z-10" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
                        <a href="#slide4" className="btn btn-circle bg-yellow-500 text-white">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-yellow-500 text-white">❯</a>
                    </div>
                    <div className="overly z-10"></div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slider2} className="w-full object-cover image z-10" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
                        <a href="#slide1" className="btn btn-circle bg-yellow-500 text-white">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-yellow-500 text-white">❯</a>
                    </div>
                    <div className="overly z-10"></div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slider3} className="w-full object-cover image z-10" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
                        <a href="#slide2" className="btn btn-circle bg-yellow-500 text-white">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-yellow-500 text-white">❯</a>
                    </div>
                    <div className="overly z-10"></div>
                </div>
            </div>
            <div className="w-[60%] h-[500px] absolute top-[10%] left-[15%] text-white z-20">
                <h2 className="text-6xl font-bold">
                    Original Provider <br />
                    for Online <span className="text-[#FFD32B]">language School</span>
                </h2>
                <div className="flex items-center mt-10">
                    <hr className="bg-[#FFD32B] w-[10%] h-2" />
                    <hr className="w-[70%]" />
                </div>
                <div className="mt-10 flex flex-col gap-y-4">
                    <div className="flex items-center">
                        <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                        <p className="text-xl ml-4">No Time Requirements, Study at Your Own Pace</p>
                    </div>
                    <div className="flex items-center">
                        <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                        <p className="text-xl ml-4">California DMV Licensed & Court Accepted</p>
                    </div>
                    <div className="flex items-center">
                        <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                        <p className="text-xl ml-4">Avoid Points & License Suspension</p>
                    </div>
                </div>

                <button className="px-6 py-4 border-2 border-[#FFD32B] text-[#FFD32B] font-bold text-xl ml-10 mt-10">Explore More</button>
            </div>
        </div>
    );
};

export default Slider;



