import React from 'react';
import './ServiceItem.css';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const ServiceItem = ({ service }) => {
    const { title, price, image } = service;
    return (
        <div className="card card-compact shadow-xl px-3 pt-3 border-grey">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-lg leading-7">{title}</h2>
                <div className="card-actions justify-end text-red relative">
                    <p className='font-semibold text-base leading-6 absolute bottom-0 left-0'>Price: ${price}</p>
                    <Link><ArrowRightIcon className='w-5 h-5' /></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;