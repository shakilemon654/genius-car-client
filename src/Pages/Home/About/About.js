import React from 'react';
import personImg from '../../../assets/images/about_us/person.jpg';
import partsImg from '../../../assets/images/about_us/parts.jpg';
import './About.css';

const About = () => {
    return (
        <div className="my-20 border-red">
            <div className="parent padding">

                <div className='child child-1'>
                    <div className="img-container">
                        <div className="img-div-1">
                            <img src={personImg} alt="" className='w-full h-full rounded-lg shadow-2xl' />
                        </div>
                        <div className="img-div-2">
                            <img src={partsImg} alt="" className='w-full h-full rounded-lg shadow-2xl border-8 border-white' />
                        </div>
                    </div>
                </div>

                <div className='child child-2'>
                    <p className='pb-4 text-red font-bold text-xl'>About Us</p>
                    <h1 className="pb-8">
                        We are qualified <br />
                        & of experience <br />
                        in this field
                    </h1>
                    <p className="pb-4 text-paragraph">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className="pb-6 text-paragraph">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn bg-red border-none text-sm capitalize">Get More Info</button>
                </div>

            </div>
        </div>
    );
};

export default About;