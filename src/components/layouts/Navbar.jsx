import { NavLink } from "react-router-dom";
import default_prodile from "../../assets/images/default-profile.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";


const Navbar = () => {

    const navLink = <>
        <li className="mx-4"><NavLink to="/">Home</NavLink></li>
        <li className="mx-4"><NavLink to="/about">About</NavLink></li>
        <li className="mx-4"><NavLink to="/services">Services</NavLink></li>
    </>

    return (
        <div>
            <div className="py-6 bg-[#FFD32B] px-24 flex justify-between item-center">
                <div className="flex gap-x-2">
                    <p className="text-2xl bg-white h-[35px] w-[35px] rounded-full flex items-center cursor-pointer">
                        <AiOutlineMail className="mx-auto text-yellow-600"></AiOutlineMail>
                    </p>
                    <p className="text-2xl bg-white h-[35px] w-[35px] rounded-full flex items-center cursor-pointer">
                        <FaFacebook className="mx-auto text-yellow-600"></FaFacebook>
                    </p>
                    <p className="text-2xl bg-white h-[35px] w-[35px] rounded-full flex items-center cursor-pointer">
                        <FaInstagram className="mx-auto text-yellow-600"></FaInstagram>
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold font-Pacifico text-[#2B3440]">Mahibul Islam Ratul</h2>
                </div>
            </div>
            <div className="navbar bg-base-100 mx-auto shadow-lg px-20 py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-5 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-3xl text-[#2B3440]">Language <span className="text-yellow-600">School</span> </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-4">
                        <div className="w-10 rounded-full">
                            <img src={default_prodile} alt="" />
                        </div>
                    </label>
                    <a className="btn text-[16px] text-yellow-600 font-bold">Login</a>
                </div>
            </div>
        </div>

    );
};

export default Navbar;

