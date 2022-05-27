import classNames from "classnames/bind";
import styles from "./CardItem.module.scss";
import { Link } from "react-router-dom";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const cx = classNames.bind(styles);

function CardItem(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={cx("container")}>
      <div className={cx("card-type")}>{props.type}</div>
      {isActive ? (
        <button
          active={isActive}
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={cx("card-icon")}
        >
          {window.location.href.includes("wishlist") ? (
            <></>
          ) : (
            <FontAwesomeIcon style={{ color: "red" }} icon={faHeartSolid} />
          )}
        </button>
      ) : (
        <button
          active={isActive}
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={cx("card-icon")}
        >
          {window.location.href.includes("wishlist") ? (
            <></>
          ) : (
            <FontAwesomeIcon icon={faHeart} />
          )}
        </button>
      )}

      <Link to={{ pathname: "/detail", search: `?id=${props.id}` }}>
        <img src={require(`../../${props.img}`)} alt="" />
      </Link>
      <div className={cx("card-body")}>
        <p className={cx("card-title")}>{props.title}</p>
        <p className={cx("card-address")}>{props.address}</p>
        <p className={cx("card-price")}>
          Giá từ:
          <span>
            {props.from} - {props.to} tỷ
          </span>
        </p>
      </div>
    </div>
  );
}

export default CardItem;
