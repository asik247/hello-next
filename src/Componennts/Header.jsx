
import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className='border-b-2 border-gray-200 p-4 flex justify-between items-center'>
            <Link href={'/'} className='text-2xl font-bold'> 🐳 DevStory</Link>
            <nav className='space-x-10'>
                 <Link href={'/about'}>About</Link>
                 <Link href={'/about/contact'}>Contact</Link>
                 <Link href={'/about/teams'}>Teams</Link>
                 <Link href={'/stories'}>Stories</Link>
                 <Link href={'/registation'}>Registaion</Link>
                 <Link href={'/loginPage'}>Login</Link>
                 <Link href={'/tutorialPage'}>TutorialPage</Link>
            </nav>
        </div>
    );
};

export default Header;