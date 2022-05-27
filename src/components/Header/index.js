import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner-left")}>
        <img
          src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMStxSmc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--8bddd91d93baa05b7dc43b7fc0df629298752041/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--ee4e4854f68df0a745312d63f6c2782b5da346cd/12919618_1320475064646465_7208560908561719520_n.png"
          alt="logo"
        />
        <span className={cx("name_logo")}>
          <h2 style={{ color: "red" }}>D</h2>
          <h2>itagis</h2>
          <h2 style={{ color: "blue" }}>R</h2>
          <h2>ent</h2>
        </span>
      </div>
      <div className={cx("inner-right")}>
        <FontAwesomeIcon icon={faHeart} />
        <h1>Ưa thích</h1>
      </div>
    </header>
  );
}

export default Header;
