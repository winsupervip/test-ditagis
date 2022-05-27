import data from "../../data/data.json";
import Header from "../Header";
import styles from "./DetailLayout.module.scss";

import classNames from "classnames/bind";
import { useLocation } from "react-router-dom";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cx = classNames.bind(styles);
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
function DetailLayout() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let query = useQuery();
  const houseDetail = data.filter(
    (getIdHouse) => query.get("id") === getIdHouse.id
  );

  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("slider")}>
        <Slider {...settings}>
          <div>
            <img
              src={require(`../../assets/1629738591-masteri-west-heights (1).png`)}
              alt=""
            />
          </div>
          <div>
            <img
              alt=""
              src={require("../../assets/1629738595-z2489929341672c26e74079a856650db74a55df1be3b68.png")}
            />
          </div>
        </Slider>
      </div>
      <div className={cx("content")}>
        <div className={cx("content-header")}>
          <div className={cx("header-left")}>
            <div className={cx("title")}>{houseDetail[0].title}</div>
            <div className={cx("address")}>{houseDetail[0].address}</div>
            <div className={cx("area")}>Diện tích: {houseDetail[0].area}m2</div>
          </div>
          <div className={cx("price")}>
            {houseDetail[0].price.from} - {houseDetail[0].price.to} tỷ
          </div>
        </div>
        <h3>Thông tin chi tiết</h3>
        <p className={cx("desc")}>{houseDetail[0].description}</p>
      </div>
    </div>
  );
}

export default DetailLayout;
