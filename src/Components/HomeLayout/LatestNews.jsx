import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center bg-base-200 p-3 gap-3'> 
         <p className='px-3 py-2 text-base-100 bg-secondary'>  Latest </p>
         <Marquee className='flex' speed={60} pauseOnHover={true}>
         <p className='font-bold px-10'>Bangladesh's Export Earnings Show Strong Growth in Q1 2025</p>
         <p className='font-bold px-10'>Central Bank Announces New Monetary Policy to Control Inflation</p>
         <p className='font-bold px-10'>Foreign Investment in Bangladesh Reaches Record High in Fiscal Year 2024-25</p>
         <p className='font-bold px-10'>Local Businesses Adapt to Rising Raw Material Costs</p>
         </Marquee>
         
        </div>
    );
};

export default LatestNews;