import { Helmet } from "react-helmet-async";
import Slider from "../components/Slider";
import { useLoaderData } from "react-router-dom";
import VolunteerNeedSection from "../components/VolunteerNeedSection";
import Message from "../components/Message";
import Contact from "../components/Contact";


const Home = () => {
  const volunteerNeeds = useLoaderData();
  console.log(volunteerNeeds);
  return (
    <>
      <Helmet>
        <title>Nexus | Home</title>
      </Helmet>
      <Slider></Slider>
      <VolunteerNeedSection></VolunteerNeedSection>
      <Message></Message>
      <Contact></Contact>
    
    </>
  );
};

export default Home;
