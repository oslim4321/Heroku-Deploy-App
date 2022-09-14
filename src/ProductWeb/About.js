import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-6'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-[17px] md:text-5xl font-bold font-serif'>CLASSIC AND AFFORDABLE WEARS</h2>
                <p className='text-lg md:text-2xl py-3 text-gray-500'>Experience with us is different in terms of Quality, Cost and all that is Better!</p>
            </div>


     
                



 <div className='grid md:grid-cols-3 gap-1  text-center px-10'>
{/* Carosel one start */}

            <div className='border-blue-600 border-[1px] py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>100K</p>
                    <p className='text-gray-400 mt-2'>Transactions</p>
                </div>

            {/* Carosel start */}
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner  shadow-xl">
                <div className="carousel-item active ">
                <div className='py-8 rounded-xl border-blue-600 border-[1px]' >
                    <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                    <p className='text-gray-400 mt-2'>Delivery</p>
                </div>
              </div>
                <div className="carousel-item">
                <div  className='py-8 rounded-xl shadow-xl border-blue-600 border-[1px]' >
                    <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                    <p className='text-gray-400 mt-2'>Delivery</p>
                </div>
              </div>
              </div>
          </div>
          {/* CArosel End */}

                <div className=' py-8 rounded-xl shadow-xl border-blue-600 border-[1px] ' >
                    <p className='text-6xl font-bold text-indigo-600'>100K</p>
                    <p className='text-gray-400 mt-2'>Transactions</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About