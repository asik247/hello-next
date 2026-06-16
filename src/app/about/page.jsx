import Title from '@/Componennts/Title';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <Title>WelCome To About Page</Title>

            <nav className='flex gap-4 mt-4'>
                <Link href={'/about/contact'}>Contact</Link>
                <Link href={'/about/teams'}>Teams</Link>
            </nav>
        </div>
    );
};

export default page;