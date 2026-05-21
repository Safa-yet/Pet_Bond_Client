import SideBar from '@/Component/Dashboard Page/SideBar';
import React from 'react';

const DashBoardLayout = ({children}) => {
    return (
        <div className='container mx-auto flex flex-col md:flex-row py-6'>
            <SideBar></SideBar>


            {children}
            
        </div>
    );
};

export default DashBoardLayout;