import Link from 'next/link';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div className='grid grid-cols-12 gap-5 min-h-screen'>
            {/* Side bar */}
            <div className='col-span-3 border-r-2'>
                <h1>Navegation</h1>
                {/* links */}
                <div className='flex flex-col gap-4 mt-10'>
                    <Link className='w-full bg-gray-500 py-2 px-3 text-center' href={'/dashboard/add-story'}>Add Story</Link>
                    <Link className='w-full bg-gray-500 py-2 px-3 text-center' href={'/dashboard/my-profile'}>My Profile</Link>
                    <Link className='w-full bg-gray-500 py-2 px-3 text-center' href={'/dashboard/settings'}>Settings</Link>
                </div>
            </div>
            {/* main content */}
            <div className='col-span-9'>
                {children}
            </div>
        </div>
    );
};

export default layout;