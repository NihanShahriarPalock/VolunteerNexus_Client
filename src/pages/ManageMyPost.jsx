
import { Helmet } from "react-helmet-async";
import MyNeedVolunteerPost from "../components/MyNeedVolunteerPost";
import MyVolunteerRequestPost from "../components/MyVolunteerRequestPost";

const ManageMyPost = () => {
  return (
    <>
      <Helmet><title>Nexus | Manage Post</title></Helmet>
      <div>
        <MyNeedVolunteerPost></MyNeedVolunteerPost>
        <MyVolunteerRequestPost></MyVolunteerRequestPost>
      </div>
    </>
  );
};

export default ManageMyPost;
