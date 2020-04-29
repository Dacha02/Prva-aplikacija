import React from 'react';
import { findByLabelText } from '@testing-library/react';
import Slike from '../images/about1.jpg';

function About() {
    return (
        <React.Fragment >
            <div>
                <div className="firstContainter">
                    <img src={Slike} alt="" style={bckImg}/>
                    <h1 style={firstLine}>About To Do List App</h1>
                </div>
                <div>
                    <p>Thsi is my first app in react</p>
                </div>
            </div>
        </React.Fragment>
    )
}

const firstLine={
    textAlign: 'center',
    padding: '50px',
    textShadow: 'rgba(0, 0, 0, 0.7) 0px 0px 11px',
    fontSize: '50px',
    position: 'absolute',
    left: '55%',
    top: '20%',
}

const bckImg={
    display: 'flex',
    width: '800px',
    padding: '50px 50px',
    position: 'relativ',
}

export default About;