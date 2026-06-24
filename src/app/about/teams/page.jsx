import Title from '@/Componennts/Title';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <Title>Welcome To Teams Page</Title>
            <Link href={'/about/contact'}>Contact</Link>
        </div>
    );
};

export default page;