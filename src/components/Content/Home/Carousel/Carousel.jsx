import React from 'react';

export default function Carousel() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            </ol>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://www.york.ac.uk/media/study/courses/undergraduate/electronics/EE-comp-BEng-ind.jpg" className="d-block w-100 carousel-item__img" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://www.nutsvolts.com/uploads/articles/NV_0704_Christopherson_Large.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>

            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}