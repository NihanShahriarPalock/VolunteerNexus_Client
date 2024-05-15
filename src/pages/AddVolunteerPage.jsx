import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>Nexus | Add Volunteer</title>
      </Helmet>
      <div className='flex justify-center py-8 bg-slate-200 dark:bg-gray-700 '>
        <div className='w-full max-w-2xl mx-auto bg-slate-300 dark:bg-gray-500  p-8 shadow-md rounded-md'>
          <h2 className='text-2xl font-bold mb-4'>Volunteer Form</h2>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col md:flex-row gap-4'>
              <div className='mb-4 w-full'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='email'>
                  Email
                </label>
                <input
                  type='text'
                  name='email'
                  defaultValue={user?.email}
                  placeholder='Enter Your Email'
                  className='border-2 border-gray-500 dark:border-gray-300 bg-slate-300 dark:bg-gray-500 rounded-md w-full px-3 py-2'
                  disabled
                />
              </div>
              <div className='mb-4 w-full'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='name'>
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  defaultValue={user?.displayName}
                  className='border-2 border-gray-500 dark:border-gray-300 bg-slate-300 dark:bg-gray-500 rounded-md w-full px-3 py-2 cursor-not-allowed'
                  disabled
                />
              </div>
            </div>

            <div className='flex flex-col md:flex-row gap-4'>
              <div className='mb-4 w-full'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='thumbnail'>
                  Thumbnail
                </label>
                <input
                  type='text'
                  required
                  name='thumbnail'
                  className='border-2 border-gray-500 dark:border-gray-300 bg-slate-300 dark:bg-gray-500  rounded-md w-full px-3 py-2'
                />
              </div>
              <div className='mb-4 w-full'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='postTitle'>
                  Post Title
                </label>
                <input
                  type='text'
                  required
                  id='postTitle'
                  name='postTitle'
                  className='border-2 border-gray-500 dark:border-gray-300 bg-slate-300 dark:bg-gray-500  rounded-md w-full px-3 py-2'
                />
              </div>
            </div>

            <div className='flex flex-col md:flex-row gap-4'>
              <div className='mb-4 w-full'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='location'>
                  Location
                </label>
                <input
                  type='text'
                  id='location'
                  name='location'
                  required
                  className='border-2 border-gray-500 dark:border-gray-300 bg-slate-300 dark:bg-gray-500 rounded-md w-full px-3 py-2'
                />
              </div>
              <div className='mb-4 w-full'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='volunteersNeeded'>
                  No. of Volunteers Needed
                </label>
                <input
                  type='number'
                  id='volunteersNeeded'
                  name='volunteersNeeded'
                  min={1}
                  required
                  className='border-2 border-gray-500 dark:border-gray-300 bg-slate-300 dark:bg-gray-500 rounded-md w-full px-3 py-2'
                />
              </div>
            </div>

            <div className='flex flex-col md:flex-row gap-4'>
              <div className='mb-4 w-full'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='category'>
                  Category
                </label>
                <select
                  id='category'
                  name='category'
                  required
                  className='border-2 border-gray-500 dark:border-gray-300 bg-slate-300 dark:bg-gray-500 rounded-md w-full px-3 py-2'>
                  <option value='Health-Care'>Healthcare</option>
                  <option value='Education'>Education</option>
                  <option value='Social Service'>Social Service</option>
                  <option value='Animal Welfare'>Animal Welfare</option>
                </select>
              </div>
              <div className='mb-4 w-full'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='deadLine'>
                  DeadLine
                </label>
                <div className='w-full'>
                  <DatePicker
                    required
                    name='deadLine'
                    className='border-2 border-gray-500 dark:border-gray-300 bg-slate-300 dark:bg-gray-500 rounded-md w-full px-3 py-2'
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </div>
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
                required
                className='border-2 border-gray-500 dark:border-gray-300 bg-slate-300 dark:bg-gray-500 rounded-md w-full px-3 py-2'
              />
            </div>
            <div>
              <button
                type='submit'
                className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full'>
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
