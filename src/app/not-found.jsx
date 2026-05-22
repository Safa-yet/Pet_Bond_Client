import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import notFound from "../../public/Na_Nov_26.jpg";
import Image from 'next/image';
const NotFound = () => {
    return (
      
             <div className='lg:h-screen h-[60vh] flex items-center justify-center flex-col'>
                <div >
                    
                    <Image src={notFound} width={500} alt='Not Found image' height={500} ></Image>
                </div>

            <h1 className='text-2xl my-3 max-w-2xl text-center'>Looks like this page went on a little adventure 🐾  
  The page you are looking for does not exist, 
  may have been moved, or the link might be broken.</h1>
            <Link href="/">
            <Button className='bg-green-500'>Go Back</Button>
            
            </Link>
            
        </div>
    );
};

export default NotFound;