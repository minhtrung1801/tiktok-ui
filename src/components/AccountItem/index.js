import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./AccountItem.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f48f887c5c0a3786c012c580bb098fbc.jpeg?x-expires=1673424000&x-signature=ZRo82fT11AZGx1qx8hWPlmK0K9g%3D"
        alt="Hoaa"
      />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <span className={cx("username")}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
