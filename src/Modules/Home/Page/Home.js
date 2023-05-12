import "../bootstrap.scss";

import React, { useEffect, useState } from "react";

// @service
import { getListProducts } from "../Store/service";

// @components
import HomePart from "../Components/HomePart";

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
      </div>
    </div>
  );
};

export default Home;
