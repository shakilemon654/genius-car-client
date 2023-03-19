import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className=' my-20 padding'>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceItem key={service._id} service={service} />)
                }
            </div>
            <button className="btn bg-white text-red border-red text-sm capitalize mt-10 block mx-auto">More Services</button>
        </div>
    );
};

export default Services;