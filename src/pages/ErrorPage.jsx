import { Helmet } from "react-helmet-async";


const ErrorPage = () => {
    return (
      <>
        <Helmet>
          <title>asd | Error</title>
        </Helmet>
        <div className='text-center'>
          <h2>Error page</h2>
        </div>
      </>
    );
};

export default ErrorPage;