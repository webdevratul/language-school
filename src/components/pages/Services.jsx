import { useEffect, useState } from "react";

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
        <div>
            
        </div>
    );
};

export default Services;