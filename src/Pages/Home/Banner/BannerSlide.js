import React from 'react';
import './BannerSlide.css';

const BannerSlide = ({slide}) => {
    const { image, prev, id, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='img-gradient'>
                <img src={image} alt='' className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h3 className='text-6xl font-bold text-white'>
                    Affordable <br />
                    Price For Car <br />
                    Servicing
                </h3>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2 w-2/5">
                <p className='text-xl text-white'>There are many variations of passages of available, but the majority have suffered alternation in some form</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4 w-2/5">
                <button className="btn btn-warning mr-5">Warning</button>
                <button className="btn btn-outline btn-warning">Warning</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 right-10 bottom-2">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle bg-red border-none">❯</a>
            </div>
        </div>
    );
};

export default BannerSlide;