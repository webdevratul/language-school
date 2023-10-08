import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import purchase from "../assets/images/purchase.avif";
import speaking from "../assets/images/speaking.avif";

const Footer = () => {
    return (
        <div className="w-[100%] bg-[#FEFCE8] py-32">
            <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4">
                <div>
                    <h2 className="text-3xl text-[#2B3440] font-bold mb-4">Language <span className="text-yellow-600">School</span> </h2>
                    <p className="mb-4">Rutrum tellus pellentesque eu tincidunt. Venenatis cras sed felis eget velit aliquet sagittis id consectetur</p>
                    <div className="flex gap-x-4 justify-center md:justify-start mb-4">
                        <p className="text-3xl bg-white h-[35px] w-[35px] rounded-full flex items-center cursor-pointer">
                            <AiOutlineMail className="mx-auto text-yellow-600"></AiOutlineMail>
                        </p>
                        <p className="text-3xl bg-white h-[35px] w-[35px] rounded-full flex items-center cursor-pointer">
                            <FaFacebook className="mx-auto text-yellow-600"></FaFacebook>
                        </p>
                        <p className="text-3xl bg-white h-[35px] w-[35px] rounded-full flex items-center cursor-pointer">
                            <FaInstagram className="mx-auto text-yellow-600"></FaInstagram>
                        </p>
                    </div>
                </div>
                <div className="md:ml-10 mx-auto md:mx-0 mb-4">
                    <h2 className="text-3xl  text-[#2B3440] font-bold mb-4">Links</h2>
                    <div className="mx-auto flex flex-col gap-y-4 cursor-pointer">
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl">Home</p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl">About</p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl">Services</p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl">Packages</p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto md:mx-0 mb-4">
                    <h2 className="text-3xl text-[#2B3440] font-bold mb-4">Languages</h2>
                    <div className="mx-auto flex flex-col gap-y-4 cursor-pointer">
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl">Mandarin</p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl">Spanish</p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl">English</p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl">Hindi</p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl">Arabic</p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl">Bengali</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl text-[#2B3440] font-bold mb-4">Latest Post</h2>
                    <div>
                        <div className="flex item items-center mb-4">
                            <img className="w-[100px] h-[100px] object-cover" src={speaking} alt="" />
                            <h5 className="ml-2">How to Become a fluent speaker of ony languages</h5>
                        </div>
                        <div className="flex items-center">
                            <img className="w-[100px] h-[100px] object-cover" src={purchase} alt="" />
                            <h5 className="ml-2">How to purchase course and join packages</h5>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="w-[80%] mx-auto h-1 bg-yellow-600 mt-10" />
            <h2 className="text-center mt-10 text-xl font-bold">All Rights Reserved by &copy; <span className="text-yellow-600">Mahibul Islam Ratul</span> </h2>
        </div>
    );
};

export default Footer;