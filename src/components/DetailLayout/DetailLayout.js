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
  const detail = houseDetail[0];
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("slider")}>
        <Slider {...settings}>
          {detail.images.map((item, index) => (
            <div key={index}>
              <img src={require(`../../${item}`)} alt="" />
            </div>
          ))}
        </Slider>
      </div>
      <div className={cx("content")}>
        <div className={cx("content-header")}>
          <div className={cx("header-left")}>
            <div className={cx("title")}>{detail.title}</div>
            <div className={cx("address")}>{detail.address}</div>
            <div className={cx("area")}>Diện tích: {detail.area}m2</div>
          </div>
          <div className={cx("price")}>
            {detail.price.from} - {detail.price.to} tỷ
          </div>
        </div>
        <h3>Thông tin chi tiết</h3>
        <p className={cx("desc")}>{houseDetail[0].description}</p>
      </div>
    </div>
  );
}

export default DetailLayout;
