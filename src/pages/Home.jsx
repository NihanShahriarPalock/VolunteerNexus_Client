import { Helmet } from "react-helmet-async";
import Slider from "../components/Slider";
import { useLoaderData } from "react-router-dom";
import VolunteerNeedSection from "../components/VolunteerNeedSection";


const Home = () => {
  const volunteerNeeds = useLoaderData();
  console.log(volunteerNeeds);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Slider></Slider>
       <VolunteerNeedSection></VolunteerNeedSection>
    
    </>
  );
};

export default Home;
