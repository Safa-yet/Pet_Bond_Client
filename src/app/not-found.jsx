import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import notFound from '../../public/Na_Nov_26.jpg'
const NotFound = () => {
    return (
      
             <div className='lg:h-screen h-[60vh] flex items-center justify-center flex-col'>
                <div>
                    {/* <Image src-={notFound} width={500}height={500}></Image> */}
                </div>

            <h1 className='text-2xl my-3'>Page Not Available</h1>
            <Link href="/">
            <Button className='bg-green-500'>Go Back</Button>
            
            </Link>
            
        </div>
    );
};

export default NotFound;