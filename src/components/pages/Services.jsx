import { useEffect, useState } from "react";
import servicesBanner from "../../assets/images/services-banner.png";
import { Link } from "react-router-dom";

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



    return (
        <div className="w-[100%] md:w-[90%] mx-auto flex flex-col xl:flex-row justify-between items-center m-5 xl:m-10 2xl:pl-16">
            <div className="w-[80%] md:w-[50%] xl:w-[30%] mb-10 xl:mb-0">
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">What to Expect from <br /> this Course</h2>
                <div className="w-[100%] h-[40vh] bg-[#FFD32B] rounded-md relative mt-20">
                    <img className="w-[100%] h-[40vh] rounded-md absolute top-[-10%] left-[8%] object-cover bg-yellow-600 p-4" src={servicesBanner} alt="" />
                </div>
            </div>
            <div className="px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 w-[100%] xl:w-[60%]">

                {
                    services.map((service, idx) => <div key={idx} className=" bg-yellow-50 rounded-lg shadow-2xl p-4 cursor-pointer">
                        <img className="rounded-lg" src={service.image} alt="" />
                        <div className="my-4">
                            <p className="font-bold text-2xl">{service.name}</p>
                            <p className="pt-2 font-bold font-sans text-xl">Price: ${service.price}</p>
                            <p className="py-4">{service.description}</p>
                        </div>
                        <button className="bg-yellow-600 py-2 px-4 text-white font-bold rounded-lg"> <Link to={`/servicesDetails/${service.id}`}>View Details</Link> </button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;

