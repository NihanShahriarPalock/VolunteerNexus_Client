import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const AddVolunteerPage = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const thumbnail = form.thumbnail.value;
    const postTitle = form.postTitle.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const volunteersNeeded = form.volunteersNeeded.value;
    const deadLine = startDate;

    const info = {
      email,
      name,
      thumbnail,
      postTitle,
      description,
      category,
      location,
      volunteersNeeded,
      deadLine,
    };
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_URL}/addVolunteerPost`,
        info
        
      );
      console.log(data);
      toast.success("Data Added Successfully");
      navigate("/manageMyPost");
    } catch (err) {
      console.log(err);
      console.log("Error", err.message);
    }
  };
  return (
    <>
      <div>
        <div className='max-w-md mx-auto bg-blue-300 p-8 shadow-md rounded-md'>
          <h2 className='text-2xl font-bold mb-4'>Volunteer Form</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='email'>
                Email
              </label>
              <input
                type='text'
                name='email'
                defaultValue={user?.email}
                className='border-2 border-gray-300 rounded-md w-full px-3 py-2'
                disabled
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='name'>
                Name
              </label>
              <input
                type='text'
                name='name'
                defaultValue={user?.displayName}
                className='border-2 border-gray-300 rounded-md w-full px-3 py-2'
                disabled
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='thumbnail'>
                Thumbnail
              </label>
              <input
                type='text'
                name='thumbnail'
                className='border-2 border-gray-300 rounded-md w-full px-3 py-2'
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='postTitle'>
                Post Title
              </label>
              <input
                type='text'
                id='postTitle'
                name='postTitle'
                className='border-gray-300 rounded-md w-full px-3 py-2'
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='description'>
                Description
              </label>
              <textarea
                id='description'
                name='description'
                className='border-gray-300 rounded-md w-full px-3 py-2'
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='category'>
                Category
              </label>
              <select
                id='category'
                name='category'
                className='border-gray-300 rounded-md w-full px-3 py-2'>
                <option value='Health-Care'>Healthcare</option>
                <option value='Education'>Education</option>
                <option value='Social Service'>Social Service</option>
                <option value='Animal Welfare'>Animal Welfare</option>
              </select>
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='location'>
                Location
              </label>
              <input
                type='text'
                id='location'
                name='location'
                className='border-gray-300 rounded-md w-full px-3 py-2'
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='volunteersNeeded'>
                No. of Volunteers Needed
              </label>
              <input
                type='number'
                id='volunteersNeeded'
                name='volunteersNeeded'
                min={0}
                className='border-gray-300 rounded-md w-full px-3 py-2'
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='deadLine'>
                DeadLine
              </label>
              <DatePicker
                name='deadLine'
                className='border-gray-300 rounded-md w-full px-3 py-2'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div>
              <button
                type='submit'
                className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md'>
                ADD POST
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddVolunteerPage;
