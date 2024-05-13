import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";


const NeedVolunteerDetails = () => {


const navigate = useNavigate()

    const data = useLoaderData();
    const { thumbnail, postTitle, category, deadLine, volunteersNeeded } =
    data || {};
  
  const checkVolunteersNeeded = ( ()=> {
    if (parseInt(volunteersNeeded) === 0)
      toast.error("Do not need volunteer")
    else {
        navigate (`/BeAVolunteer/${data._id}`)
    }
  })
    return (
      <div className='flex'>
        <div>

            <button onClick={checkVolunteersNeeded}
              className='bg-red-400 px-4 py-3 '
              // disabled={parseInt(volunteersNeeded) === 0}
            >
              Be a Volunteer
            </button>
          
        </div>
        <div className='text-bold text-4xl '>
          <p>Post Title : {postTitle} </p>
          <p>Thumbnail: {thumbnail}</p>
          <p>Deadline : {deadLine}</p>
          <p>Volunteers Needed : {volunteersNeeded}</p>
          <p>category : {category}</p>
        </div>
      </div>
    );
};

export default NeedVolunteerDetails;