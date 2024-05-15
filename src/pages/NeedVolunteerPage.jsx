import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TbGridDots } from "react-icons/tb";
import { HiOutlineBars4 } from "react-icons/hi2";
import { Helmet } from "react-helmet-async";
const NeedVolunteerPage = () => {
  const [postData, setPostData] = useState([]);
  const [itemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [layoutType, setLayoutType] = useState("card");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_URL
          }/need-volunteer?page=${currentPage}&size=${itemsPerPage}&filter=${filter}&sort=${sort}&search=${search}`
        );
        const data = await response.json();
        setPostData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [currentPage, filter, itemsPerPage, search, sort]);

  useEffect(() => {
    const getCount = async () => {
      const response = await fetch(
        `${
          import.meta.env.VITE_URL
        }/posts-count?filter=${filter}&search=${search}`
      );
      const { count } = await response.json();
      setCount(count);
    };

    getCount();
  }, [filter, search]);

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);

  const handlePaginationButton = (value) => {
    setCurrentPage(value);
  };

  const handleReset = () => {
    setFilter("");
    setSort("");
    setSearch("");
    setSearchText("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };

  const toggleCardLayout = () => {
    setLayoutType("card");
  };

  const toggleTableLayout = () => {
    setLayoutType("table");
  };

  return (
    <div>
      <Helmet><title>Nexus | Need Volunteer</title></Helmet>
      <div className='bg-base-100 dark:bg-[#24292F] py-10 '>
        <div className='flex justify-between items-center flex-col-reverse md:flex-row'>
          <div className='hidden md:block'></div>

          <div className='flex gap-4'>
            <form onSubmit={handleSearch}>
              <div className='flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                <input
                  className='px-6 py-2  placeholder-gray-700 dark:placeholder-gray-300 bg-white dark:bg-[#24292F]   outline-none focus:placeholder-white text-gray-900 dark:text-gray-300 '
                  type='text'
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
                  name='search'
                  placeholder='Enter Job Title'
                  aria-label='Enter Job Title'
                />
                <button className='px-6 py-3 text-sm font-medium tracking-wider  transition-colors duration-300 transform bg-gray-300 dark:bg-gray-600  rounded-md focus:bg-gray-600 focus:outline-none text-gray-900 dark:text-gray-300'>
                  Search
                </button>
              </div>
            </form>
            <button
              onClick={handleReset}
              className=' text-sm mt-1 font-medium tracking-wider text-gray-900 dark:text-gray-300 bg-gray-300 dark:bg-gray-600 px-4 h-[45px]   rounded-md'>
              Reset
            </button>
          </div>

          <div className='flex gap-4 justify-between'>
            <button onClick={toggleCardLayout}>
              <TbGridDots className='size-10 text-gray-900 dark:text-gray-300' />
            </button>
            <button onClick={toggleTableLayout}>
              <HiOutlineBars4 className='size-10 text-gray-900 dark:text-gray-300' />
            </button>
          </div>
        </div>

        {layoutType === "card" ? (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 lg:grid-cols-3'>
            {postData.map((data, index) => (
              <section key={index} className='bg-white dark:bg-gray-900'>
                <div className='container px-6 py-10 mx-auto'>
                  <div>
                    <img
                      className='relative z-10 object-cover w-full rounded-md h-96'
                      src={data.thumbnail}
                      alt=''
                    />
                    <div className='relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900'>
                      <a
                        href='#'
                        className='font-semibold text-gray-800 hover:underline dark:text-white md:text-xl'>
                        {data.postTitle}
                      </a>
                      <p className='mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm'>
                        {data.category}
                      </p>
                      <p className='mt-3 text-sm text-blue-500'>
                        {new Date(data.deadLine).toLocaleDateString("en-GB")}
                      </p>
                      <Link to={`/NeedVolunteer/${data._id}`}>
                        <p className='text-blue-500 text-xl  font-bold  flex justify-center items-center w-full '>
                          View Details
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        ) : (
          <section className=' px-4 mx-auto'>
            <div className='flex flex-col mt-6 overflow-hidden'>
              <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                <div className=' min-w-full py-2 align-middle md:px-6 lg:px-8'>
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
                        {postData.map((post) => (
                          <tr key={post._id}>
                            <td className='px-4 py-3.5 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r-2 border-gray-500'>
                              {post.postTitle}
                            </td>

                            <td className='px-4 py-3.5 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r-2 border-gray-500'>
                              {post.category}
                            </td>
                            <td className='px-4 py-3.5 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r-2 border-gray-500'>
                              {new Date(post.deadLine).toLocaleDateString(
                                "en-GB"
                              )}
                            </td>

                            <td className=' px-4 py-3.5  text-sm whitespace-nowrap'>
                              <div className='flex justify-around  '>
                                <div>
                                  <Link to={`/NeedVolunteer/${post._id}`}>
                                    <p className='text-blue-500 text-xl  font-bold  flex justify-center items-center w-full '>
                                      View Details
                                    </p>
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

        <div className='flex justify-center mt-12'>
          {/* Previous Button */}
          <button
            disabled={currentPage === 1}
            onClick={() => handlePaginationButton(currentPage - 1)}
            className='px-4 py-2 mx-1  disabled:text-gray-500 capitalize bg-gray-200 dark:bg-gray-800 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white text-gray-900 dark:text-gray-300 '>
            <div className='flex items-center -mx-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 mx-1 rtl:-scale-x-100'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M7 16l-4-4m0 0l4-4m-4 4h18'
                />
              </svg>

              <span className='mx-1'>previous</span>
            </div>
          </button>
          {/* Numbers */}
          {pages.map((btnNum) => (
            <button
              onClick={() => handlePaginationButton(btnNum)}
              key={btnNum}
              className={`hidden ${
                currentPage === btnNum
                  ? "bg-blue-500  border border-blue-500 text-gray-900 dark:text-gray-300"
                  : ""
              } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500 text-gray-900 dark:text-gray-300  hover:text-white  border border-blue-500`}>
              {btnNum}
            </button>
          ))}
          {/* Next Button */}
          <button
            disabled={currentPage === numberOfPages}
            onClick={() => handlePaginationButton(currentPage + 1)}
            className='px-4 py-2 mx-1  transition-colors duration-300 transform bg-gray-200 dark:bg-gray-800 rounded-md hover:bg-blue-500 disabled:hover:bg-blue-500 disabled:hover:text-white hover:text-white disabled:cursor-not-allowed disabled:text-gray-500 text-gray-900 dark:text-gray-300'>
            <div className='flex items-center -mx-1'>
              <span className='mx-1'>Next</span>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 mx-1 rtl:-scale-x-100'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NeedVolunteerPage;
