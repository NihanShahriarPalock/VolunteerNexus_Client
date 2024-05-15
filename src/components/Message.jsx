

const Message = () => {
    return (
      <div>
        <section className='bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300'>
          <div className='max-w-6xl px-6 py-10 mx-auto'>
            <h1 className='mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white'>
              Message From CEO of Volunteer Nexus
            </h1>

            <main className='relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12'>
              <div className='absolute w-full -z-10 md:h-96 rounded-2xl'></div>

              <div className='w-full p-6 bg-gray-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly'>
                <img
                  className='h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl'
                  src='https://i.ibb.co/yygH3Yb/ceo.jpg'
                  alt='client photo'
                />

                <div className='mt-2 md:mx-6'>
                  <div>
                    <p className='text-xl font-medium tracking-tight '>
                      Jack Watson
                    </p>
                    <p className=' '>CEO of Volunteer Nexus</p>
                  </div>

                  <p className='mt-4 text-lg leading-relaxed  md:text-xl'>
                    {" "}
                    “Volunteering is not merely an act; it is a commitment to
                    making a difference, to creating positive change in the
                    world around us. And each one of you embodies that
                    commitment in your actions, simply spreading kindness
                    wherever you go. In this fast-paced world, where
                    self-interest often takes precedence, your selflessness
                    shines as a beacon”.
                  </p>
                </div>
              </div>
            </main>
          </div>
        </section>
      </div>
    );
};

export default Message;