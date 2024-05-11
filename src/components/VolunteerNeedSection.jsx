import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const VolunteerNeedSection = () => {
     const [limitedData, setLimitedData] = useState([]);
    

     useEffect(() => {
       const fetchData = async () => {
         try {
           const response = await fetch(
             `${import.meta.env.VITE_URL}/volunteerNeeds`
           );

           const data = await response.json();
           const slicedData = data.slice(0, 6);
           setLimitedData(slicedData);
         } catch (error) {
           console.error(error);
         }
       };

       fetchData();
     }, []);
    return (
      <>
        <h2 className="text-center font-semibold text-2xl md:text-3xl lg:text-4xl">Volunteer Needs</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 lg:grid-cols-3'>
          {limitedData.map((data, index) => (
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
                      {data.post_title}
                    </a>

                    <p className='mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm'>
                      {data.category}
                    </p>

                    <p className='mt-3 text-sm text-blue-500'>
                      {data.deadline}
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
        <div className='flex justify-center items-center'>
          <Link to={`/NeedVolunteerPage`}>
            <p className='text-red-500 text-xl border-2 border-red-500 px-5 py-3 rounded-md w-fit font-bold   '>
              See all
            </p>
          </Link>
        </div>
      </>
    );
};

export default VolunteerNeedSection;