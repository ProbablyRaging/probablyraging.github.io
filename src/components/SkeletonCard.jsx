import React from 'react';
import { Card, Skeleton } from "@nextui-org/react";

const SkeletonCard = ({ isLoading }) => {
    return (
        <Card className="h-[146px] w-[428px] md:w-full space-y-5 px-4 py-7 pb-5 bg-white/10 rounded-xl">
            <div className="flex flex-col justify-between h-full space-y-3">
                <div className='flex flex-row gap-2'>
                    <Skeleton isLoaded={isLoading} className="w-[20px] rounded-lg">
                        <div className="h-2.5 w-full rounded-lg bg-purple-400"></div>
                    </Skeleton>
                    <Skeleton isLoaded={isLoading} className="w-[180px] rounded-lg">
                        <div className="h-2.5 w-full rounded-lg bg-gray-500"></div>
                    </Skeleton>
                </div>
                <div className='grow'>
                    <Skeleton isLoaded={isLoading} className="w-4/5 rounded-lg">
                        <div className="h-2.5 w-full rounded-lg bg-gray-600 mt-1"></div>
                    </Skeleton>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-3'>
                        <Skeleton isLoaded={isLoading} className="w-[30px] rounded-lg">
                            <div className="h-2.5 w-full rounded-lg bg-gray-400"></div>
                        </Skeleton>
                        <Skeleton isLoaded={isLoading} className="w-[30px] rounded-lg">
                            <div className="h-2.5 w-full rounded-lg bg-gray-400"></div>
                        </Skeleton>
                    </div>
                    <Skeleton isLoaded={isLoading} className="w-[60px] rounded-lg">
                        <div className="h-2.5 w-full rounded-lg bg-[#3178c6]"></div>
                    </Skeleton>
                </div>
            </div>
        </Card>
    );
}

export default SkeletonCard;