import React from "react";
import "../bootstrap.scss";
import FilterZone from "../components/Filter/FilterZone";
import CatePro from "../components/CateProduct/CatePro";

const Categories = () => {
    return (
        <div className="Category">
            <div className="banner">
                <div className="breadcrumbs">
                    <a href="#">Home</a>
                    <a href="#">Dog</a>
                    <a href="#">Small Dog</a>
                </div>

                <div className="banner-background">
                    <div className="banner-content">
                        <h1>One More Friend</h1>
                        <h2>Thousands More Fun!</h2>
                        <p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
                        <div className="nut">
                            <button className="view">View Intro<i className='bx bx-play-circle'></i></button>
                            <button className="explore">Explore Now</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="filterproduct">
                <FilterZone/>
                <CatePro/>
            </div>
        </div>
    );
};

export default Categories;