

const AddVolunteerPage = () => {

    
     const handleSubmit = (e) => {
       e.preventDefault();
       const formData = new FormData(e.target);
       const data = Object.fromEntries(formData.entries());
       console.log(data);
     };
    return (
      <>
        <div>
          <div className='max-w-md mx-auto bg-blue-300 p-8 shadow-md rounded-md'>
            <h2 className='text-2xl font-bold mb-4'>Volunteer Form</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='thumbnail'>
                  Thumbnail
                </label>
                <input
                  type='text'
                  id='thumbnail'
                  name='thumbnail'
                  className='border-2 border-gray-300 rounded-md w-full px-3 py-2'
                />
              </div>
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='postTitle'>
                  Post Title
                </label>
                <input
                  type='text'
                  id='postTitle'
                  name='postTitle'
                  className='border-gray-300 rounded-md w-full px-3 py-2'
                />
              </div>
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='description'>
                  Description
                </label>
                <textarea
                  id='description'
                  name='description'
                  className='border-gray-300 rounded-md w-full px-3 py-2'
                />
              </div>
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='category'>
                  Category
                </label>
                <select
                  id='category'
                  name='category'
                  className='border-gray-300 rounded-md w-full px-3 py-2'>
                  <option value='healthcare'>Healthcare</option>
                  <option value='education'>Education</option>
                  <option value='socialService'>Social Service</option>
                  <option value='animalWelfare'>Animal Welfare</option>
                </select>
              </div>
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='location'>
                  Location
                </label>
                <input
                  type='text'
                  id='location'
                  name='location'
                  className='border-gray-300 rounded-md w-full px-3 py-2'
                />
              </div>
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='volunteersNeeded'>
                  No. of Volunteers Needed
                </label>
                <input
                  type='number'
                  id='volunteersNeeded'
                  name='volunteersNeeded'
                  min={0}
                  className='border-gray-300 rounded-md w-full px-3 py-2'
                />
              </div>
              <div>
                <button
                  type='submit'
                  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md'>
                  ADD POST
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
};

export default AddVolunteerPage;