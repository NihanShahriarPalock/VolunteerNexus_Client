import { Helmet } from "react-helmet-async";


const ErrorPage = () => {
    return (
      <>
        <Helmet>
          <title>Nexus | Error</title>
        </Helmet>
        <section className='flex items-center h-full p-16 bg-gray-50 text-gray-800'>
          <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
            <div className='max-w-md text-center'>
              <h2 className='mb-8 font-extrabold text-9xl text-gray-400'>
                <span className='sr-only'> !!! Error !!!</span>404
              </h2>
              <p className='text-2xl font-semibold md:text-3xl'>
                Sorry, could not find this page
              </p>
            </div>
          </div>
        </section>
      </>
    );
};

export default ErrorPage;