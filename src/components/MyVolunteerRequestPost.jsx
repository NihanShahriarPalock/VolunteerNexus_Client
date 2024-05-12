import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const MyVolunteerRequestPost = () => {
      const { user } = useContext(AuthContext);
      const [posts, setPosts] = useState([]);

      useEffect(() => {
        getData();
      }, [user]);

      const getData = async () => {
        const { data } = await axios(
          `${import.meta.env.VITE_URL}/reqFilteredPost/${user?.email}`
        );
        setPosts(data);
      };
    return (
      <div>
        <h2 className='text-center text-4xl py-5 font-bold '>
          My Volunteer Request Post
        </h2>
        {posts.length === 0 ? (
          <h2 className=' h-[40vh] flex justify-center items-center text-red-600 font-bold text-4xl underline underline-offset-[12px] italic'>
            No Request Till Now
          </h2>
        ) : (
          <section className='container px-4 mx-auto'>
            <div className='flex items-center gap-x-3'>
              <h2 className='text-lg font-medium text-gray-800 dark:text-white'>
                Total Request
              </h2>

              <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400'>
                {posts.length} Request
              </span>
            </div>

            <div className='flex flex-col mt-6'>
              <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                  <div className='overflow-hidden border border-gray-300 dark:border-gray-700 md:rounded-lg'>
                    <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                      <thead className='bg-gray-200 dark:bg-gray-800 '>
                        <tr>
                          <th
                            scope='col'
                            className='py-3.5 px-4 text-lg font-bold text-center text-gray-500 dark:text-gray-400  border-r-2 border-gray-600'>
                            <div className='gap-x-2'>
                              <span>Post Title</span>
                            </div>
                          </th>

                          <th
                            scope='col'
                            className='px-4 py-3.5 text-lg font-bold text-center text-gray-500 dark:text-gray-400 border-r-2 border-gray-600'>
                            <div className='gap-x-2'>
                              <span>Category</span>
                            </div>
                          </th>

                          <th
                            scope='col'
                            className='px-4 py-3.5 text-lg font-bold text-center text-gray-500 dark:text-gray-400 border-r-2 border-gray-600'>
                            <div className='gap-x-2'>
                              <span>Deadline</span>
                            </div>
                          </th>

                          <th
                            scope='col'
                            className='px-4 py-3.5 text-lg font-bold text-center text-gray-500 dark:text-gray-400 '>
                            <div className='gap-x-2'>
                              <span>Action</span>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className='bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900'>
                        {posts.map((post) => (
                          <tr key={post._id}>
                            <td className='px-4 py-3.5 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r-2 border-gray-500'>
                              {post.postTitle}
                            </td>

                            <td className='px-4 py-3.5 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r-2 border-gray-500'>
                              {post.requestEmail}
                            </td>
                            <td className='px-4 py-3.5 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r-2 border-gray-500'>
                              {new Date(post.deadLine).toLocaleDateString(
                                "en-GB"
                              )}
                            </td>

                            <td className=' px-4 py-3.5  text-sm whitespace-nowrap'>
                              <div className='flex justify-around  '>
                                <div>
                                  <Link
                                    to={`/NeedVolunteerUpdate/${post._id}`}
                                    title='Update'
                                    className=' text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none '>
                                    <button>Cancel</button>
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    );
};

export default MyVolunteerRequestPost;