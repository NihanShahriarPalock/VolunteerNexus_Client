import { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const BeAVolunteer = () => {
  const suggestion = "Requested";
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const post = useLoaderData();

  const {
    thumbnail,
    postTitle,
    description,
    category,
    location,
    volunteersNeeded,
    deadLine,
    email,
    name,
  } = post || {};

  const handleRequest = async (e) => {
    e.preventDefault();
    const requestId = post?._id;
    const status = e.target.status.value;
    const suggestion = e.target.suggestion.value;
    const requestEmail = e.target.requestEmail.value;
    const postedEmail = post?.email;
    const titleOfPost = post?.postTitle;
    const x = parseInt(post?.volunteersNeeded) - 1;

      if (postedEmail === requestEmail) {
        toast.error("You cannot apply to your own post");
        return; 
      }

    const requestData = {
      requestId,
      status,
      suggestion,
      requestEmail,
      postedEmail,
      titleOfPost,
      x,
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_URL}/reqVolunteerPost`,
        requestData
      );
console.log(data);
      toast.success("Volunteer Request Inserted");

      const y = { x };
      const { data: updateData } = await axios.put(
        `${import.meta.env.VITE_URL}/reqUpdateAvailable/${requestId}`,
        y
      );
      console.log(updateData);

      navigate(`/NeedVolunteer/${id}`);
    } catch (err) {
      toast.error(err.response.data);
      e.target.reset();
    }
  };

  return (
    <>
      <Helmet>
        <title>Nexus | Request Form</title>
      </Helmet>
      <div className=' justify-center py-8 bg-slate-200 dark:bg-gray-700'>
        <h2 className='text-2xl font-bold mb-4 text-center'>
          Volunteer Application Form
        </h2>
        <div className='flex flex-col lg:flex-row w-full max-w-7xl mx-auto bg-white p-8 shadow-md rounded-md'>
          <div className='w-full lg:w-1/2 pr-8 '>
            <img src={thumbnail} alt='' className='w-full h-full rounded-lg' />
          </div>
          <div className='w-full lg:w-1/2'>
            <div>
              <form onSubmit={handleRequest}>
                <div className='flex flex-col lg:flex-row gap-1 '>
                  <div className='mb-4 w-full'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                      Post Title
                    </label>
                    <input
                      name='postTitle'
                      type='text'
                      defaultValue={postTitle}
                      readOnly
                      className='border-2 border-gray-500 dark:border-gray-300 bg-slate-300 dark:bg-gray-500 rounded-md w-full px-3 py-2 cursor-not-allowed'
                    />
                  </div>
                  <div className='mb-4 w-full'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                      Category
                    </label>
                    <input
                      name='category'
                      type='text'
                      defaultValue={category}
                      readOnly
                      className='border-2 border-gray-500 dark:border-gray-300 bg-slate-300 dark:bg-gray-500 rounded-md w-full px-3 py-2 cursor-not-allowed'
                    />
                  </div>
                </div>

                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2'>
                    Description
                  </label>
                  <textarea
                    name='description'
                    type='text'
                    defaultValue={description}
                    readOnly
                    rows='4'
                    className='border-2 border-gray-500 dark:border-gray-300 bg-slate-300 dark:bg-gray-500 rounded-md w-full px-3 py-2 cursor-not-allowed'
                  />
                </div>

                <div className='flex flex-col lg:flex-row gap-1'>
                  <div className='mb-4 w-full'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                      Location
                    </label>
                    <input
                      name='location'
                      type='text'
                      defaultValue={location}
                      readOnly
                      className='border-2 border-gray-500 dark:border-gray-300 bg-slate-300 dark:bg-gray-500 rounded-md w-full px-3 py-2 cursor-not-allowed'
                    />
                  </div>

                  <div className='mb-4 w-full'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                      Volunteers Needs
                    </label>
                    <input
                      name='volunteersNeeded'
                      type='text'
                      defaultValue={volunteersNeeded}
                      readOnly
                      className='border-2 border-gray-500 dark:border-gray-300 bg-slate-300 dark:bg-gray-500 rounded-md w-full px-3 py-2 cursor-not-allowed'
                    />
                  </div>
                  <div className='mb-4 w-full'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                      Dead Line
                    </label>
                    <input
                      name='deadLine'
                      type='text'
                      defaultValue={new Date(deadLine).toLocaleDateString(
                        "en-GB"
                      )}
                      readOnly
                      className='border-2 border-gray-500 dark:border-gray-300 bg-slate-300 dark:bg-gray-500 rounded-md w-full px-3 py-2 cursor-not-allowed'
                    />
                  </div>
                </div>

                <div className='flex flex-col lg:flex-row gap-1'>
                  <div className='mb-4 w-full '>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                      Organizer Name
                    </label>
                    <input
                      name='volunteersNeeded'
                      type='text'
                      defaultValue={name}
                      readOnly
                      className='border-2 border-gray-500 dark:border-gray-300 bg-slate-300 dark:bg-gray-500 rounded-md w-full px-3 py-2 cursor-not-allowed'
                    />
                  </div>
                  <div className='mb-4 w-full'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                      Organizer Email
                    </label>
                    <input
                      name='volunteersNeeded'
                      type='text'
                      defaultValue={email}
                      readOnly
                      className='border-2 border-gray-500 dark:border-gray-300 bg-slate-300 dark:bg-gray-500 rounded-md w-full px-3 py-2 cursor-not-allowed'
                    />
                  </div>
                </div>

                <div className='flex flex-col lg:flex-row gap-1'>
                  <div className='mb-4 w-full'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                      Applicant Email
                    </label>
                    <input
                      name='requestEmail'
                      type='text'
                      defaultValue={user?.email}
                      readOnly
                      className='border-2 border-gray-500 dark:border-gray-300 bg-slate-300 dark:bg-gray-500 rounded-md w-full px-3 py-2'
                    />
                  </div>
                  <div className='mb-4 w-full'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                      Applicant Name
                    </label>
                    <input
                      name='requestName'
                      type='text'
                      defaultValue={user?.displayName}
                      readOnly
                      className='border-2 border-gray-500 dark:border-gray-300 bg-slate-300 dark:bg-gray-500 rounded-md w-full px-3 py-2'
                    />
                  </div>
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2'>
                    Status
                  </label>
                  <input
                    type='text'
                    name='status'
                    value={suggestion}
                    readOnly
                    className='border-2 border-gray-500 dark:border-gray-300 bg-slate-300 dark:bg-gray-500 rounded-md w-full px-3 py-2 cursor-not-allowed'
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2'>
                    Suggestion
                  </label>
                  <input
                    name='suggestion'
                    type='text'
                    className='border-2 border-gray-500 dark:border-gray-300 bg-slate-300 dark:bg-gray-500 rounded-md w-full px-3 py-2'
                  />
                </div>
                <button
                  type='submit'
                  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full'>
                  Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeAVolunteer;
