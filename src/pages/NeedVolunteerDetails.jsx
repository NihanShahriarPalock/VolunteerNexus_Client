import { useLoaderData } from "react-router-dom";


const NeedVolunteerDetails = () => {
    const data = useLoaderData();
    const { thumbnail, post_title, category, deadline } = data || {};
    return (
      <>
        <div className='text-bold text-4xl '>
          {post_title}
          {category}
        </div>
      </>
    );
};

export default NeedVolunteerDetails;