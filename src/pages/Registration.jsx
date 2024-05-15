import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const Registration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser, createUser, updateUserProfile ,setLoading} = useContext(AuthContext);
  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form?.name.value;
    const imageURL = form?.imageURL.value;
    const email = form?.email.value;
    const password = form?.password.value;

    if (password.length < 6) {
      toast.error("Password need at least 6 characters");
      form.reset();
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must be have at least a capital  letter");
      form.reset();
      return false;
    }

    if (!/[a-z]/.test(password)) {
      toast.error("Password must be have at least a small  letter");
      form.reset();
      return false;
    }

    //create user
    try {
      const result = await createUser(email, password);
      console.log(result);
      await updateUserProfile(name, imageURL);
      setUser({ ...result?.user, photoURL: imageURL, displayName: name });
      const { data } = await axios.post(
        `${import.meta.env.VITE_URL}/jwt`,
        { email: result?.user?.email },
        { withCredentials: true }
      );
      console.log(data);
      setLoading(false);
      navigate(location?.state ? location.state : "/", { replace: true });
      toast.success("Registration successful");
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
    }
  };
  return (
    <>
      <Helmet>
        <title>Nexus | Registration</title>
      </Helmet>
      <div className='dark:bg-gray-700 bg-white py-10'>
        <h1 className=' backdrop-blur-sm text-4xl text-center pb-5 text-gray-900 dark:text-gray-300'>
          Registration Form
        </h1>
        <p className='pb-2 text-center text-gray-900 dark:text-gray-300'>
          Fill up all the information to register
        </p>
        <div className=' shadow-lg  w-full  flex'>
          <div className='w-full lg:w-1/2 mx-auto  p-5 rounded-lg lg:rounded-l-none'>
            <form
              onSubmit={handleSignUp}
              className='space-y-3 w-full shadow-lg  p-5'>
              <div>
                <fieldset className='border border-solid border-gray-300 p-3 w-full rounded'>
                  <legend className=' font-medium text-gray-900 dark:text-gray-300'>
                    Name
                  </legend>
                  <input
                    type='text'
                    name='name'
                    autoComplete='displayName'
                    id=''
                    placeholder='Enter Your Name'
                    className='px-4 py-1 w-full focus:outline-0 dark:bg-gray-700 bg-white text-gray-900 dark:text-gray-300 '
                  />
                </fieldset>
              </div>

              <div>
                <fieldset className='border border-solid border-gray-300 p-3 w-full rounded'>
                  <legend className=' font-medium text-gray-900 dark:text-gray-300'>
                    Email
                  </legend>
                  <input
                    type='email'
                    name='email'
                    id=''
                    placeholder='Enter Your Email'
                    className='px-4 py-1 w-full focus:outline-0 dark:bg-gray-700 bg-white text-gray-900 dark:text-gray-300'
                    required
                  />
                </fieldset>
              </div>
              <div>
                <fieldset className='border border-solid border-gray-300 p-3 w-full rounded'>
                  <legend className=' font-medium text-gray-900 dark:text-gray-300'>
                    Image URL
                  </legend>
                  <input
                    type='text'
                    name='imageURL'
                    id=''
                    placeholder='Enter Your Image URL'
                    className='px-4 py-1 w-full focus:outline-0 dark:bg-gray-700 bg-white text-gray-900 dark:text-gray-300'
                  />
                </fieldset>
              </div>
              <div>
                <fieldset className='border border-solid border-gray-300 p-3 w-full rounded'>
                  <legend className=' font-medium text-gray-900 dark:text-gray-300'>
                    Password
                  </legend>
                  <input
                    type='password'
                    name='password'
                    id=''
                    placeholder='Enter Password'
                    className='px-4 py-1 w-full focus:outline-0 dark:bg-gray-700 bg-white text-gray-900 dark:text-gray-300'
                    required
                  />
                </fieldset>
              </div>

              <button className='mt-6  border border-gray-800 dark:border-gray-200   w-full   bg-white px-3 py-4  before:bottom-0  text-gray-700 dark:text-gray-200 dark:bg-gray-700 rounded-md'>
                <span className='z-50 relative'>Register</span>
              </button>
            </form>
            <div className='text-center my-3 text-gray-900 dark:text-gray-300'>
              Already Registered ?
              <Link
                className='text-blue-500 hover:underline underline-offset-4 ml-2  '
                to='/login'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
