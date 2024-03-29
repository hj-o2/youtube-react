import Header from "../Header/Header";
import Style from "./Layout.module.scss";

export const Layout = ({ children }) => {
  return (
    <div className={Style.wrapper}>
      <Header />
      <div className={Style.main}>{children}</div>
    </div>
  );
};
