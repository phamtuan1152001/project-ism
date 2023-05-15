import React from "react";

// @antd
import { Button } from "antd";

// @svg and img
import { ArrowRightViewMore } from "../assets/svg";

// @components
// import ProductItem from "./ProductItem";
import NewItem from "./NewItem";

const PetKnowledge = ({ title, header, listProducts = [] }) => {
  // console.log("listProducts", listProducts);
  return (
    <div className="homepage-wrapper__content">
      <div className="homepage-wrapper__content-header">
        <div className="homepage-wrapper__content-header-left">
          <h5>{title}</h5>
          <h4>{header}</h4>
        </div>
        <div className="homepage-wrapper__content-header-right">
          <Button className="view-more">
            <div className="btn-title">View more</div>
            <div>
              <ArrowRightViewMore />
            </div>
          </Button>
        </div>
      </div>
      <div className="homepage-wrapper__content-body">
        <div className="row">
          <div className="col-4">
            <NewItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetKnowledge;
