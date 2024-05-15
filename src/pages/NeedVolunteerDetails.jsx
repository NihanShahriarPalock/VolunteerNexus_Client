import { useLoaderData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const NeedVolunteerDetails = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const {
    _id,
    thumbnail,
    postTitle,
    description,
    category,
    deadLine,
    name,
    email,
    volunteersNeeded,
  } = data || {};

  const checkVolunteersNeeded = () => {
    if (parseInt(volunteersNeeded) === 0) {
      toast.error("Do not need volunteer");
    } else {
      navigate(`/BeAVolunteer/${_id}`);
    }
  };
  // oooooooooooooooookkkkkkkkkkk
  return (
    <div className='flex items-center justify-center min-h-scree py-20 bg-slate-200 dark:bg-gray-700'>
      <div className='flex flex-col lg:flex-row w-full max-w-7xl mx-auto bg-slate-200 dark:bg-gray-800 p-8 shadow-md rounded-md text-gray-900 dark:text-gray-300 '>
        <div className='w-full lg:w-1/2 pr-8 '>
          <img src={thumbnail} alt='' className='w-full h-full rounded-lg' />
        </div>
        <div className='flex justify-between w-full lg:w-1/2 flex-col'>
          <div className=''>
            <div className='space-y-2'>
              <div className='flex'>
                <p className='font-medium'>
                  Post Title : <span className='font-normal'>{postTitle}</span>
                </p>
              </div>
              <p className='underline underline-offset-4 font-medium'>
                {" "}
                Description :{" "}
              </p>
              <p className='font-normal'> {description} </p>
              <div className='flex'>
                <p className='font-medium'>
                  Post Category :{" "}
                  <span className='font-normal'>{category}</span>
                </p>
              </div>
              <div className='flex'>
                <p className='font-medium'>
                  Application Deadline :{" "}
                  <span className='font-normal'>
                    {new Date(deadLine).toLocaleDateString("en-GB")}
                  </span>
                </p>
              </div>

              <div className='flex'>
                <p className='font-medium'>
                  No of Volunteer Needed :{" "}
                  <span
                    className={`font-normal ${
                      volunteersNeeded === 0 ? "text-red-500" : ""
                    }`}>
                    {volunteersNeeded}
                  </span>
                </p>
              </div>

              <div className='flex'>
                <p className='font-medium'>
                  Organization Email :{" "}
                  <span className='font-normal'>{email}</span>
                </p>
              </div>

              <div className='flex'>
                <p className='font-medium'>
                  Posted By : <span className='font-normal'>{name}</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <button
              onClick={checkVolunteersNeeded}
              className=' bg-red-400 px-4 py-2 mt-4 rounded-md text-gray-900 dark:text-gray-300  hover:bg-red-500 text-lg w-full'>
              Be a Volunteer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedVolunteerDetails;
