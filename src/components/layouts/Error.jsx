import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h2 className="text-6xl text-red-600">Oops</h2>
                <h3 className="text-2xl mt-5">Sorry ! an unexpected error has Occurred</h3>
                <button className="btn btn-neutral mt-5"> <Link to="/">Go Back</Link> </button>
            </div>
        </div>

    );
};

export default Error;