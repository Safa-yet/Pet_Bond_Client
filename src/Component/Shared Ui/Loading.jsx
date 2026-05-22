import { Spinner } from '@heroui/react';
import React from 'react';

const Loading = () => {
    return (
       <div className="flex flex-col items-center justify-center gap-2 h-[80vh]">
        <Spinner size="xl" />

      </div>
    );
};

export default Loading;