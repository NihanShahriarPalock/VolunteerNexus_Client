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
        <div className='py-12 bg-base-100 dark:bg-[#24292F] '>
          <h2 className='text-center font-semibold text-2xl md:text-3xl lg:text-4xl text-gray-900 dark:text-gray-300'>
            Volunteer Needs
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 lg:grid-cols-3'>
            {limitedData.map((data, index) => (
              <section key={index} className='bg-base-100 dark:bg-[#24292F] '>
                <div className='container px-6 py-10 mx-auto'>
                  <div>
                    <img
                      className='relative z-10 object-cover w-full rounded-md h-96'
                      src={data.thumbnail}
                      alt=''
                    />

                    <div className='relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900'>
                      <p className='font-semibold text-gray-800 dark:text-white md:text-xl'>
                        {data.postTitle}
                      </p>

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
          <div className='flex justify-center items-center'>
            <Link to={`/NeedVolunteerPage`}>
              <p className='text-gray-900 dark:text-gray-300 text-xl border-2 border-blue-500 px-10 py-3 rounded-md w-fit font-bold   '>
                See all
              </p>
            </Link>
          </div>
        </div>
      </>
    );
};

export default VolunteerNeedSection;