import { useLoaderData, useParams } from "react-router-dom";


const ServicesDetails = () => {
    const services = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const service = services.find((service) => service.id === idInt);


    return (
        <div className="w-[90%] mx-auto flex flex-col xl:flex-row justify-around items-center my-10">
            <div className=" w-[100%] xl:w-[40%] h-[50vh] my-8 shadow-lg rounded-lg">
                <img className="w-[100%] h-full rounded-lg object-cover" src={service.image} alt="" />
            </div>
            <div className=" w-[100%] xl:w-[40%]">
                <h2 className="text-2xl md:text-3xl font-bold my-6">Language Name: <span className="text-yellow-600">{service.name}</span> </h2>
                <h3 className="text-2xl font-bold">Purchase Price: <span className="text-yellow-600">${service.price}</span></h3>
                <h4 className="my-6"> <span className="text-xl font-bold">NOTE:</span> {service.description}</h4>
                <h5>Learning a new language is of paramount importance for several reasons:</h5>

                <h5 className="my-4"> <span className="font-bold text-xl">Cultural Understanding:</span> Language is a window into a culture. Learning a new language helps you understand and appreciate different cultures, traditions, and perspectives. It allows you to connect with people from diverse backgrounds.</h5>

                <h5><span className="font-bold text-xl">Enhanced Communication:</span> Language is the primary tool for communication. Learning a new language enables you to communicate with a broader range of people, breaking down language barriers and fostering connections.</h5>

                <h5 className="my-4"><span className="font-bold text-xl">Improved Cognitive Skills:</span> Language learning exercises your brain, enhancing cognitive abilities like problem-solving, multitasking, and memory. It can delay cognitive decline and improve overall mental agility.</h5>

                <h5><span className="font-bold text-xl">Career Opportunities:</span> In an increasingly globalized world, knowing multiple languages can open up career opportunities. Many employers value employees who can communicate in multiple languages, especially in international business and diplomacy.</h5>

                <h5 className="my-4"><span className="font-bold text-xl">Enhanced Creativity:</span> Multilingual individuals tend to be more creative, as they can draw from different linguistic and cultural contexts, inspiring innovative thinking and problem-solving.</h5>

                <button className="bg-yellow-600 px-8 py-4 text-xl font-bold text-white rounded-lg my-8">Purchase Now</button>
            </div>
        </div>
    );
};

export default ServicesDetails;