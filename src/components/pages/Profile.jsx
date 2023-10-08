import { useContext } from "react";
import { Context } from "../../provider/Provider";


const Profile = () => {
    const { user } = useContext(Context);
    return (
        <div>
            <div className="w-[350px] h-[30vh] bg-yellow-50 mx-auto my-20 rounded-lg shadow-lg cursor-pointer p-4">
                <div className="my-6">
                    <div className="w-[100px] h-[100px] mx-auto mb-4">
                        <img className="w-[100%] h-[100px] border-4 border-yellow-600 rounded-full object-cover" src={user.photoURL} alt="" />
                    </div>
                    <div className="text-center">
                        <h2><span className="font-bold">Name:</span> {user.displayName}</h2>
                        <h2 className="my-4"><span className="font-bold">E-mail:</span> {user.email}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;