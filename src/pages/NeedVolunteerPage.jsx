import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NeedVolunteerPage = () => {
  const [postData, setPostData] = useState([]);
  const [itemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [layoutType, setLayoutType] = useState("card"); // State to track layout type

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

  // Function to toggle layout type
  const toggleCardLayout = () => {
    setLayoutType("card");
  };

  const toggleTableLayout = () => {
    setLayoutType("table");
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSearch}>
          <div className='flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
            <input
              className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
              type='text'
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              name='search'
              placeholder='Enter Job Title'
              aria-label='Enter Job Title'
            />
            <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
              Search
            </button>
          </div>
        </form>
        <button onClick={handleReset} className='btn'>
          Reset
        </button>
        <button onClick={toggleCardLayout} className='btn'>
          Card Layout
        </button>
        <button onClick={toggleTableLayout} className='btn'>
          Table Layout
        </button>
      </div>
      <div
        className={
          layoutType === "card"
            ? "grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 lg:grid-cols-3"
            : ""
        }>
        {postData.map((data, index) => (
          <section
            key={index}
            className={
              layoutType === "card"
                ? "bg-white dark:bg-gray-900"
                : "border border-gray-200"
            }>
            <div
              className={
                layoutType === "card" ? "container px-6 py-10 mx-auto" : "p-4"
              }>
              {layoutType === "card" && (
                <>
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
                </>
              )}
              {layoutType === "table" && (
                <div className='flex flex-col'>
                  <div className='border-b border-gray-200'>
                    <div className='px-6 py-3 bg-gray-50'>
                      <span className='text-xs font-semibold text-gray-500 uppercase'>
                        Post Title
                      </span>
                    </div>
                    <div className='px-6 py-4'>
                      <span className='text-sm font-medium text-gray-900'>
                        {data.postTitle}
                      </span>
                    </div>
                  </div>
                  <div className='border-b border-gray-200'>
                    <div className='px-6 py-3 bg-gray-50'>
                      <span className='text-xs font-semibold text-gray-500 uppercase'>
                        Category
                      </span>
                    </div>
                    <div className='px-6 py-4'>
                      <span className='text-sm text-gray-900'>
                        {data.category}
                      </span>
                    </div>
                  </div>
                  <div className='border-b border-gray-200'>
                    <div className='px-6 py-3 bg-gray-50'>
                      <span className='text-xs font-semibold text-gray-500 uppercase'>
                        Deadline
                      </span>
                    </div>
                    <div className='px-6 py-4'>
                      <span className='text-sm text-blue-500'>
                        {new Date(data.deadLine).toLocaleDateString("en-GB")}
                      </span>
                    </div>
                  </div>
                  <div className='border-b border-gray-200'>
                    <div className='px-6 py-3 bg-gray-50'>
                      <Link
                        to={`/NeedVolunteer/${data._id}`}
                        className='text-xs font-semibold text-blue-500 uppercase hover:underline'>
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
      <div className='flex justify-center mt-12'>
        {/* Previous Button */}
        <button
          disabled={currentPage === 1}
          onClick={() => handlePaginationButton(currentPage - 1)}
          className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white'>
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
              currentPage === btnNum ? "bg-blue-500 text-white" : ""
            } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}>
            {btnNum}
          </button>
        ))}
        {/* Next Button */}
        <button
          disabled={currentPage === numberOfPages}
          onClick={() => handlePaginationButton(currentPage + 1)}
          className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'>
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
  );
};

export default NeedVolunteerPage;
