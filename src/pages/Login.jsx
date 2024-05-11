import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      //  console.log(result);
      //  setLoading(false);
      navigate(location?.state ? location.state : "/");
      toast.success("Login successful");
    } catch (err) {
      //  setLoading(false)
      toast.error(err?.message);
    }
  };

  // Sign In With Email and Password
  const handleLogin = async e => {
    e.preventDefault();
    const form = e.target;
    const email = form?.email.value;
    const password = form?.password.value;

    // signIn(email, password);
    try {
      // setLoading(false);
      const result = await signIn(email, password);
      console.log(result);
      navigate(location?.state ? location.state : "/");
      toast.success("Login successful");
    } catch (err) {
      console.log(err);
      // setLoading(false);
      toast.error(err.message);
    }
  };
  return (
    <>
      <Helmet>
        <title>asd | Login</title>
      </Helmet>
      <div className='shadow-lg py-10 dark:bg-gray-700  '>
        <div className='w-full  flex'>
          <div className='w-full lg:w-1/2 mx-auto bg-white dark:bg-gray-700  p-3 rounded-lg lg:rounded-l-none border border-red-200'>
            <div className=' p-5 '>
              <form
                onSubmit={handleLogin}
                className='space-y-3 w-full '>
                <div className='flex justify-between mb-5'>
                  <div className='size-40 flex justify-center items-center'>
                    <img
                      className='w-full'
                      src='https://i.ibb.co/z7HF4gZ/logo.png'
                      alt=''
                    />
                  </div>
                  <div className='ml-8 divider lg:divider-horizontal'></div>
                  <div className='flex flex-col justify-center items-center'>
                    <h1 className='backdrop-blur-sm text-4xl dark:text-gray-100 text-center pb-5'>
                      Login Form
                    </h1>
                    <p className='pb-10 text-center text-gray-400'>
                      Sign in with your authorized email and password
                    </p>
                  </div>
                </div>
                <div>
                  <fieldset className='border border-solid border-gray-300 p-3 w-full rounded'>
                    <legend className=' font-medium text-black/60 dark:text-gray-200'>
                      Email
                    </legend>
                    <input
                      type='email'
                      name='email'
                      id=''
                      placeholder='Enter authorized Email'
                      className='px-4 py-1 w-full dark:bg-gray-700 focus:outline-0'
                    />
                  </fieldset>
                </div>
                <div>
                  <fieldset className='border border-solid border-gray-300 p-3 w-full rounded'>
                    <legend className=' font-medium text-black/60 dark:text-gray-200'>
                      Password
                    </legend>
                    <input
                      type='password'
                      name='password'
                      id=''
                      placeholder='Enter verified Password'
                      className='px-4 py-1 w-full dark:bg-gray-700 focus:outline-0'
                    />
                  </fieldset>
                </div>

                <button className='mt-6  hover:before:bg-red border-blue-500 relative h-[50px] w-full  border bg-white px-3 text-blue-500  transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-1000 hover:text-white  hover:before:left-0 hover:before:w-full'>
                  <span className='z-50 relative'>Login</span>
                </button>
              </form>

              <div className='mt-4 flex items-center space-x-1'>
                <div className='flex-1 h-px sm:w-16 bg-gray-300'></div>
                <p className='px-3 text-sm text-gray-600 dark:text-gray-200'>
                  OR
                </p>
                <div className='flex-1 h-px sm:w-16 bg-gray-300'></div>
              </div>

              <div className='flex flex-col gap-4 md:flex-row justify-center my-4'>
                <button
                  onClick={() => handleGoogleSignIn()}
                  aria-label='Login with Google'
                  type='button'
                  className='flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-default-600 dark:text-gray-200'>
                  <svg className='w-4' viewBox='0 0 533.5 544.3'>
                    <path
                      d='M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z'
                      fill='#4285f4'
                    />
                    <path
                      d='M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z'
                      fill='#34a853'
                    />
                    <path
                      d='M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z'
                      fill='#fbbc04'
                    />
                    <path
                      d='M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z'
                      fill='#ea4335'
                    />
                  </svg>
                  <p>Login with Google</p>
                </button>
              </div>
              <p className='text-sm text-center sm:px-6 text-gray-600 dark:text-gray-200'>
                Don&#x27;t have an account?
                <Link
                  to='/registration'
                  className='ml-2 text-blue-800 dark:text-blue-500 hover:underline underline-offset-4'>
                  Click to Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
