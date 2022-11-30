import { FC } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import NavBar from "./Nav";

type Props = {
  onChangePage: (page: string) => void;
};
const Layout: FC<Props> = ({ onChangePage }) => {
  return (
    <div className="layout">
      <Header />
      <NavBar onChangePage={onChangePage} />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
