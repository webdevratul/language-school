import { useEffect, useState } from "react";
import servicesBanner from "../../assets/images/services-banner.png";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("/public/services.json")
            .then((res) => res.json())
            .then((data) => {
                setServices(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    console.log(services);

    return (
        <div className="w-[90%] mx-auto flex justify-between items-center m-10">
            <div className="w-[30%]">
                <h2 className="text-5xl font-bold">What to Expect from <br /> this Course</h2>
                <div className="w-[100%] h-[40vh] bg-[#FFD32B] rounded-md relative mt-20">
                    <img className="w-[100%] h-[40vh] rounded-md absolute top-[-10%] left-[8%] object-cover bg-yellow-600 p-4" src={servicesBanner} alt="" />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 w-[60%]">

                {
                    services.map((service, idx) => <div key={idx} className=" bg-yellow-50 rounded-lg shadow-2xl p-4 cursor-pointer">
                        <img className="rounded-lg" src={service.image} alt="" />
                        <div className="my-4">
                            <p className="font-bold text-2xl">{service.name}</p>
                            <p className="pt-2 font-bold">Price: {service.price}</p>
                            <p className="py-4">{service.description}</p>
                        </div>
                        <button className="bg-yellow-600 py-2 px-4 text-white font-bold rounded-lg">View Details</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;

