import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
// import axios from "axios";
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
      <Helmet><title>Nexus | Update</title></Helmet>
      <div>
        <h2>Need Update</h2>
        {Object.keys(post).length > 0 && (
          <form onSubmit={handleFormSubmit}>
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
                defaultValue={post.thumbnail}
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
                defaultValue={post.postTitle}
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
                defaultValue={post.description}
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
                defaultValue={post.category}
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
        )}
      </div>
    </>
  );
};
export default NeedVolunteerUpdate;
