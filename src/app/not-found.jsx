import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
      
             <div className='lg:h-screen h-[60vh] flex items-center justify-center flex-col'>

            <h1 className='text-2xl my-3'>Page Not Available</h1>
            <Link href="/">
            <Button className='bg-green-500'>Go Back</Button>
            
            </Link>
            
        </div>
    );
};

export default NotFound;