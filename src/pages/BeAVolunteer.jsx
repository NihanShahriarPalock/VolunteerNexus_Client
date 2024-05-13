import { useContext,   } from "react";
import { useLoaderData,  useNavigate,  useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const BeAVolunteer = () => {
  const suggestion = "Requested";
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
//   const [post, setPost] = useState({});
    const post = useLoaderData();
  // const [startDate, setStartDate] = useState();

    const {
        _id,
        email,
        thumbnail,
        postTitle,
        // description,
        category,
        location,
        volunteersNeeded,
        deadLine,
      } = post || {};
    const handleRequest = async (e) => {
        e.preventDefault();
        const requestId = _id
        const status = e.target.status.value;
        const suggestion = e.target.suggestion.value;
        const requestEmail = e.target.requestEmail.value
        // const description = description
        const postedEmail = email
      const titleOfPost = postTitle;
      const x = parseInt(volunteersNeeded)-1;

        const requestData = {
          requestId,
          status,
          suggestion,
          requestEmail,
          postedEmail,
          titleOfPost,
          // volunteersNeeded,
          x
      };
      console.log(typeof volunteersNeeded);
       const y = {x}
        try {
          const { data } = await axios.post(
            `${import.meta.env.VITE_URL}/reqVolunteerPost`,
            requestData
          );
          
            console.log(data);
          toast.success("Volunteer Request Inserted")
          
          const { data2 } = await axios.put(
            `${import.meta.env.VITE_URL}/reqUpdateAvailable/${requestId}`,y
          );
          console.log(data2);
          navigate(`/NeedVolunteer/${id}`);
        } catch (err) {
          toast.error(err.response.data);
          e.target.reset()
        }
      
    }
    
  return (
    <div>
      <div>
        <h2>Be a Volunteer Form </h2>
        <p>Thumbnail : {thumbnail}</p>
        <p> Post Title : {postTitle}</p>

        <p> Category : {category}</p>
        <p>Location : {location}</p>
        <p>Num of volunteer Needed: {volunteersNeeded}</p>
        <p>DeadLine {new Date(deadLine).toLocaleDateString("en-GB")}</p>
        <p> Posted By : {email}</p>
      </div>

      <div>
        <form onSubmit={handleRequest}>
          <label>Email</label>
          <input
            name='requestEmail'
            type='text'
            defaultValue={user?.email}
            readOnly
            className=' border-2 border-gray-500 input-bordered'
          />
          <div className='flex gap-5'>
            <p>Status</p>
            <input
              type='text'
              name='status'
              className='border-2 border-gray-500  w-fit  rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
              value={suggestion}
              readOnly
            />
          </div>
          <label>Suggestion</label>
          <input
            name='suggestion'
            type='text'
            className=' border-2 border-gray-500 input-bordered'
          />
          <button type='submit' className='btn my-5 btn-primary block'>
            Requested
          </button>
        </form>
      </div>
    </div>
  );
};

export default BeAVolunteer;
