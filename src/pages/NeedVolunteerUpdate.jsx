import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
const NeedVolunteerUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [post, setPost] = useState({});
  //   const post = useLoaderData();
  const [startDate, setStartDate] = useState();
  console.log(user);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/mySinglePost/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      });
  }, [id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const thumbnail = form.thumbnail.value;
    const postTitle = form.postTitle.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const volunteersNeeded = form.volunteersNeeded.value;
    const deadLine = startDate;

    const postData = {
      thumbnail,
      postTitle,
      description,
      category,
      location,
      volunteersNeeded,
      deadLine,
    };

    fetch(`${import.meta.env.VITE_URL}/NeedVolunteerUpdate/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product Updated Successfully",
            icon: "success",
            confirmButtonText: "Updated",
          });
          // toast.success("Data is updated");
          navigate("/manageMyPost");
        } else {
          toast.error("Data is not updated");
        }
      })
      .catch(() => {
        toast.error("Error updating post");
      });
  };

  return (
    <>
      <Helmet>
        <title>Nexus | Post Update</title>
      </Helmet>
      <div>
        {Object.keys(post).length > 0 && (
          <div className='flex justify-center py-8 bg-slate-200 dark:bg-gray-700 '>
            <div className='w-full max-w-2xl mx-auto bg-slate-300 dark:bg-gray-500 text-gray-700 dark:text-gray-200 p-8 shadow-md rounded-md'>
              <h2 className='text-2xl font-bold p-4 text-center'>
                Update Your Post
              </h2>
              <form onSubmit={handleFormSubmit}>
                <div className='flex flex-col md:flex-row gap-4'>
                  <div className='mb-4 w-full'>
                    <label
                      className='block  text-sm font-bold mb-2'
                      htmlFor='thumbnail'>
                      Thumbnail
                    </label>
                    <input
                      type='text'
                      name='thumbnail'
                      defaultValue={post.thumbnail}
                      className='border-2 border-gray-500 dark:border-gray-300 bg-slate-300 dark:bg-gray-500  rounded-md w-full px-3 py-2'
                    />
                  </div>
                  <div className='mb-4 w-full'>
                    <label
                      className='block  text-sm font-bold mb-2'
                      htmlFor='postTitle'>
                      Post Title
                    </label>
                    <input
                      type='text'
                      id='postTitle'
                      name='postTitle'
                      defaultValue={post.postTitle}
                      className='border-2 border-gray-500 dark:border-gray-300 bg-slate-300 dark:bg-gray-500  rounded-md w-full px-3 py-2'
                    />
                  </div>
                </div>

                <div className='flex flex-col md:flex-row gap-4'>
                  <div className='mb-4 w-full'>
                    <label
                      className='block  text-sm font-bold mb-2'
                      htmlFor='location'>
                      Location
                    </label>
                    <input
                      type='text'
                      id='location'
                      name='location'
                      defaultValue={post.location}
                      className='border-2 border-gray-500 dark:border-gray-300 bg-slate-300 dark:bg-gray-500 rounded-md w-full px-3 py-2'
                    />
                  </div>
                  <div className='mb-4 w-full'>
                    <label
                      className='block  text-sm font-bold mb-2'
                      htmlFor='volunteersNeeded'>
                      No. of Volunteers Needed
                    </label>
                    <input
                      type='number'
                      id='volunteersNeeded'
                      name='volunteersNeeded'
                      defaultValue={post.volunteersNeeded}
                      min={0}
                      className='border-2 border-gray-500 dark:border-gray-300 bg-slate-300 dark:bg-gray-500 rounded-md w-full px-3 py-2'
                    />
                  </div>
                </div>

                <div className='flex flex-col md:flex-row gap-4'>
                  <div className='mb-4 w-full'>
                    <label
                      className='block  text-sm font-bold mb-2'
                      htmlFor='category'>
                      Category
                    </label>
                    <select
                      id='category'
                      name='category'
                      defaultValue={post.category}
                      className='border-2 border-gray-500 dark:border-gray-300 bg-slate-300 dark:bg-gray-500 rounded-md w-full px-3 py-2'>
                      <option value='Health-Care'>Healthcare</option>
                      <option value='Education'>Education</option>
                      <option value='Social Service'>Social Service</option>
                      <option value='Animal Welfare'>Animal Welfare</option>
                    </select>
                  </div>
                  <div className='mb-4 w-full'>
                    <label
                      className='block text-sm font-bold mb-2'
                      htmlFor='deadLine'>
                      DeadLine
                    </label>
                    <div className='w-full'>
                      <DatePicker
                        required
                        name='deadLine'
                        placeholderText='Select a date'
                        className='border-2 border-gray-500 dark:border-gray-300 bg-slate-300 dark:bg-gray-500 rounded-md w-full px-3 py-2'
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        defaultValue={new Date(
                          post.deadLine
                        ).toLocaleDateString("en-GB")}
                      />
                    </div>
                  </div>
                </div>

                <div className='mb-4'>
                  <label
                    className='block  text-sm font-bold mb-2'
                    htmlFor='description'>
                    Description
                  </label>
                  <textarea
                    id='description'
                    name='description'
                    defaultValue={post.description}
                    className='border-2 border-gray-500 dark:border-gray-300 bg-slate-300 dark:bg-gray-500 rounded-md w-full px-3 py-2'
                  />
                </div>
                <div className='w-full'>
                  <button
                    type='submit'
                    className='bg-blue-500 hover:bg-blue-600 w-full text-white font-bold py-2 px-4 rounded-md'>
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default NeedVolunteerUpdate;
