import { useContext } from "react";
import { Context } from "../../provider/Provider";


const Setting = () => {
    const { user } = useContext(Context);
    return (
        <div className="hero bg-base-200 py-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-400">
                    <form className="card-body">
                        <div className="form-control">
                            <input type="text" className="input input-bordered" value={user.displayName} />
                        </div>
                        <div className="form-control">
                            <input type="email" className="input input-bordered" value={user.email} />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-yellow-600 text-white hover:text-black mb-2">Update Data</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Setting;