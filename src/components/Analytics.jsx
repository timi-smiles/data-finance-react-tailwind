import React from 'react'
import laptop from '../assests/laptop.jpg'

const Analytics = () =>{

    return(
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className='w-[500px] mx-auto my-4' src={laptop} alt="/" />
                <div className=" flex flex-col justify-center">
                    <p className='uppercase text-[#00df9a] font-bold'>Data analytics dashboard</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati libero, expedita esse nostrum laborum porro deleniti dolorum quisquam nobis dolorem, ullam magni ducimus quasi. Facere atque quos architecto sit dicta vitae quasi, officia nobis ipsa.</p>
                    <button className='text-[#00df9a] bg-[black] w-[280px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 '>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics