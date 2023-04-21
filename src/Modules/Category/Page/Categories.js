import React from "react";
import "../bootstrap.scss";
import FilterZone from "../components/Filter/FilterZone";
import CatePro from "../components/CateProduct/CatePro";
import Banner from "../components/Banner/Banner";

const Categories = () => {
    return (
        <div className="Category">
            <Banner/>
            <div className="filterproduct">
                <FilterZone/>
                <CatePro/>
            </div>
        </div>
    );
};

export default Categories;