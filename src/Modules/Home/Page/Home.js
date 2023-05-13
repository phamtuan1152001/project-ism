import "../bootstrap.scss";

import React, { useEffect, useState } from "react";

// @service
import { getListProducts } from "../Store/service";

// @components
import HomePart from "../Components/HomePart";
import BoxFrame from "../Components/BoxFrame";

// @antd
import { Spin } from "antd";

// @constants
import { RETCODE_SUCCESS, SUCCESS } from "@configs/contants";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    fetchGetListProducts();
  }, []);

  const fetchGetListProducts = async () => {
    try {
      setLoading(true);
      const { data } = await getListProducts({
        page: 1,
        size: 6,
      });
      if (data.retCode === RETCODE_SUCCESS) {
        const list = data?.retData?.products;
        setListProducts(list);
      }
    } catch (err) {
      console.log("FETCH FAIL!", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="homepage-wrapper">
      <div className="container">
        <Spin spinning={loading}>
          <HomePart
            listProducts={listProducts}
            title="Whats new?"
            header="Take a look at some of our pets"
          />
        </Spin>
        <BoxFrame
          title={"One more friend"}
          subtitle={"Thousands more fun!"}
          description={
            "Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!"
          }
        />
      </div>
    </div>
  );
};

export default Home;
