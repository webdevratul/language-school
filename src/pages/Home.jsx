import Packages from "../components/pages/Packages";
import Services from "../components/pages/Services";
import Slider from "../components/pages/Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Packages></Packages>
        </div>
    );
};

export default Home;