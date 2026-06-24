import Title from '@/Componennts/Title';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <Title>Welcom To Contact 01919195893</Title>
            <Link className='mt-4' href={'/about/teams'}>Teams</Link>
        </div>
    );
};

export default page;