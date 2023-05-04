import "../bootstrap.scss";

import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

// @service
import { getDetailOrder } from "../Store/service";

// @constants
import { RETCODE_SUCCESS, SUCCESS } from "@configs/contants";

// @antd
import { Spin, Empty } from "antd";

const Payment = () => {
  const location = useLocation();
  const { orderId } = location.state || {};

  const [loading, setLoading] = useState(false);
  const [detailOrder, setDetailOrder] = useState({});

  useEffect(() => {
    fetchGetDetailOrder();
  }, []);

  const fetchGetDetailOrder = async () => {
    try {
      setLoading(true);
      const { data } = await getDetailOrder({
        orderId: "645380c926a349ecb9ef938c",
      });
      // console.log(data);
      if (data?.retCode === RETCODE_SUCCESS) {
        setDetailOrder(data?.retData);
      }
    } catch (err) {
      console.log("FETCH FAIL!", err);
    } finally {
      setLoading(false);
    }
  };

  //   padding: 22px 20px;
  //     background: #fdfdfd;
  //     border: 1px solid #ebeeef;
  //     border-radius: 20px;
  //     margin-bottom: 30px;
  // }
  // .PayMoney .container .checkout {
  //     box-sizing: border-box;
  //     display: flex;
  //     flex-direction: row;
  //     align-items: flex-start;
  //     gap: 34px;
  //     width: 1180px;
  //     height: 100%;
  // }

  console.log("state", detailOrder);
  return (
    <React.Fragment>
      {!detailOrder ? (
        <div className="payment-wrapper">
          <div className="container">
            <h1 className="payment-title">Payment information</h1>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <Empty description="There is no current order which was created" />
          </div>
        </div>
      ) : (
        <div className="payment-wrapper">
          <div className="container">
            <h1 className="payment-title">Payment information</h1>
            <div className="row">
              <div className="col-6">payment method</div>
              <div className="col-6">payment infor</div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Payment;
