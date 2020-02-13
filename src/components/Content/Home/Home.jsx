import React from 'react';
import Carousel from './Carousel/Carousel';
import Jumbotron from './Jumbotron/Jumbotron';
import './Home.css';

export default function Home() {
    return (
        <div className="home">
            <Carousel />
            <Jumbotron />
        </div>

    )
}