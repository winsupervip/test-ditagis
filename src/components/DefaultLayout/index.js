import Header from "../Header";
import styles from "./Default.module.scss";
import styled from "styled-components";
import classNames from "classnames/bind";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import CardItem from "../CardItem/CardItem";

import data from "../../data/data.json";
import { useState } from "react";
const cx = classNames.bind(styles);
const PlaceOptions = [
  { value: "Đà Nẵng", label: "Đà Nẵng" },
  { value: "Hà Nội", label: "Hà Nội" },
  { value: "Hồ Chí Minh", label: "Hồ Chí Minh" },
];
const AreaOptions = [
  { value: "<30 m2", label: "<30 m2" },
  { value: "30 - 45 m2", label: "0 - 45 m2" },
  { value: "45 - 60 m2", label: "45 - 60 m2" },
  { value: "> 60 m2", label: "> 60 m2" },
];
const typeHouse = ["Tất cả", "Chung cư", "Biệt thự", "Shophouse", "Condotel"];
const ButtonToggle = styled.button`
  ${({ active }) =>
    active &&
    `
    background-color: #904b67;
    color: #fff; 
  `}
`;

function DefaultLayout() {
  const [active, setActive] = useState(typeHouse[0]);
  const [filtedType, setFiltedType] = useState(data);
  const handleTypeHouse = (e) => {
    const typeHouse = e.target.value;
    setActive(typeHouse);
    let filterData = data.filter((type) => type.type.name === typeHouse);
    typeHouse !== "Tất cả" ? setFiltedType(filterData) : setFiltedType(data);
  };
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <div className={cx("banner")}>
          <div className={cx("title")}>
            <h1>Sàn giao dịch bất động sản</h1>
          </div>
          <div className={cx("search")}>
            <label>
              Tỉnh
              <Select
                className={cx("basic-single")}
                classNamePrefix="select"
                placeholder="Chọn tỉnh"
                options={PlaceOptions}
              />
            </label>

            <label>
              Diện tích
              <Select
                className={cx("basic-single")}
                classNamePrefix="select"
                placeholder="Chọn diện tích"
                options={AreaOptions}
              />
            </label>
            <button>
              <FontAwesomeIcon icon={faSearch} />
              Tìm kiếm
            </button>
          </div>
        </div>
        <div className={cx("content")}>
          <h1>SẢN PHẨM</h1>
          <div className={cx("type-house")}>
            {typeHouse.map((type, index) => (
              <ButtonToggle
                key={index}
                value={type}
                active={active === type}
                onClick={handleTypeHouse}
              >
                {type}
              </ButtonToggle>
            ))}
          </div>
          <div className={cx("card")}>
            {filtedType.map((item, index) => (
              <CardItem
                type={item.type.name}
                img={item.avatar}
                title={item.title}
                address={item.address}
                from={item.price.from}
                to={item.price.to}
                id={item.id}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
