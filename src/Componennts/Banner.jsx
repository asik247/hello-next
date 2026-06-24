'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
const Banner = () => {
    const router = useRouter()
    console.log('router all obj',router);
    const handlerDashboard = ()=>{
      const password = prompt('Enter Password');
      if(password ==='1234'){
        router.push('/dashboard')
      }

    }
    return (

        <div className='w-11/12  mt-20 mx-auto text-center'>
            <h1 className='text-blue-300 font-bold text-2xl pb-4'>🐳 WelCome To Developer Story!</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <button onClick={handlerDashboard} className='bg-amber-300 text-black px-5 py-2 mt-4 rounded-2xl'>Btn Here</button>
        </div>
    );
};

export default Banner;