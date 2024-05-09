import { Helmet } from "react-helmet-async";
import Slider from "../components/Slider";


const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>

         <Slider></Slider>
        </>
    );
};

export default Home;