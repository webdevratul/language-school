import Packages from "../components/pages/Packages";
import Services from "../components/pages/Services";
import Slider from "../components/pages/Slider";
import Subscribe from "../components/pages/Subscribe";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Packages></Packages>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;