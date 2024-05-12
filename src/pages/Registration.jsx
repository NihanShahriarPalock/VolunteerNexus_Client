import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Registration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, setUser, createUser, updateUserProfile } =
    useContext(AuthContext);
  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form?.name.value;
    const imageURL = form?.imageURL.value;
    const email = form?.email.value;
    const password = form?.password.value;

    if (password.length < 6) {
      toast.error("password must be have at least 6 characters");
      form.reset();
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("password must be have at least a capital  letter");
      form.reset();
      return false;
    }

    if (!/[a-z]/.test(password)) {
      toast.error("password must be have at least a small  letter");
      form.reset();
      return false;
    }

    //create user
    try {
      const result = await createUser(email, password);
      console.log(result);
      await updateUserProfile(name, imageURL);
      setUser({ ...user, photoURL: imageURL, displayName: name });
      // setLoading(false);
         navigate(location?.state ? location.state : "/", { replace: true });
      toast.success("Registration successful");
    } catch (err) {
      // setLoading(false);
      toast.error(err.message);
    }
  };
  return (
    <>
      <Helmet>
        <title>asd | Registration</title>
      </Helmet>
      <div>
        <h1 className='mt-10 backdrop-blur-sm text-4xl text-center pb-5'>
          Registration Form
        </h1>
        <p className='pb-2 text-center text-gray-400'>
          Fill up all the information to register
        </p>
        <div className=' shadow-lg  w-full  flex'>
          <div className='w-full lg:w-1/2 mx-auto bg-white p-5 rounded-lg lg:rounded-l-none'>
            <form
              onSubmit={handleSignUp}
              className='space-y-3 w-full shadow-lg  p-5'>
              <div>
                <fieldset className='border border-solid border-gray-300 p-3 w-full rounded'>
                  <legend className=' font-medium text-black/60'>Name</legend>
                  <input
                    type='text'
                    name='name'
                    autoComplete='email'
                    id=''
                    placeholder='Enter Your Name'
                    className='px-4 py-1 w-full focus:outline-0'
                  />
                </fieldset>
              </div>

              <div>
                <fieldset className='border border-solid border-gray-300 p-3 w-full rounded'>
                  <legend className=' font-medium text-black/60'>Email</legend>
                  <input
                    type='email'
                    name='email'
                    id=''
                    placeholder='Enter Your Email'
                    className='px-4 py-1 w-full focus:outline-0'
                    required
                  />
                </fieldset>
              </div>
              <div>
                <fieldset className='border border-solid border-gray-300 p-3 w-full rounded'>
                  <legend className=' font-medium text-black/60'>
                    Image URL
                  </legend>
                  <input
                    type='text'
                    name='imageURL'
                    id=''
                    placeholder='Enter Your Image URL'
                    className='px-4 py-1 w-full focus:outline-0'
                  />
                </fieldset>
              </div>
              <div>
                <fieldset className='border border-solid border-gray-300 p-3 w-full rounded'>
                  <legend className=' font-medium text-black/60'>
                    Password
                  </legend>
                  <input
                    type='password'
                    name='password'
                    id=''
                    placeholder='Enter Password'
                    className='px-4 py-1 w-full focus:outline-0'
                    required
                  />
                </fieldset>
              </div>

              <button className='mt-6  hover:before:bg-red border-blue-500 relative h-[50px] w-full  border bg-white px-3 text-blue-500  transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-1000 hover:text-white  hover:before:left-0 hover:before:w-full'>
                <span className='z-50 relative'>Register</span>
              </button>
            </form>
            <div className='text-center my-3'>
              Already Registered ?
              <Link
                className='text-blue-500 hover:underline underline-offset-4 ml-2'
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
