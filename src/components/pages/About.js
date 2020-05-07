import React from 'react';
import { findByLabelText } from '@testing-library/react';
import Slike from '../images/about1.jpg';

function About() {
    return (
        <React.Fragment >
            <div>
                <div className='firstContainter'>
                    <img src={Slike} alt="" className='bckImg'/>
                    <h1 className='firstLine'>About To Do List App</h1>
                </div>
                <div className='secondContainer'>
                    <p className='secondLine'>This is my first app in react</p>
                </div>
            </div>
        </React.Fragment>
    )
}


export default About;