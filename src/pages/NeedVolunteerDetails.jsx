import { Link, useLoaderData } from "react-router-dom";


const NeedVolunteerDetails = () => {
    const data = useLoaderData();
    const { thumbnail, postTitle, category, deadLine } = data || {};
    return (
      <div className='flex'>
        <div>
          <Link to={`/BeAVolunteer/${data._id}`}>
            {" "}
            <button className='bg-red-400 px-4 py-3'>Be a Volunteer</button>
          </Link>
        </div>
        <div className='text-bold text-4xl '>
          <p>Post Title : {postTitle} </p>
          <p>Thumbnail: { thumbnail}</p>

          <p>category : {category}</p>
        </div>
      </div>
    );
};

export default NeedVolunteerDetails;