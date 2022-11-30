import { FC } from "react";

import Nav from "react-bootstrap/Nav";

type Props = {
  onChangePage: (page: string) => void;
};
const NavBar: FC<Props> = ({ onChangePage }) => {
  return (
    <>
      <button onClick={() => onChangePage("SignUp")}>SignUp</button>
      <button onClick={() => onChangePage("Profile")}>Profile</button>
      <button onClick={() => onChangePage("Dashboard")}>Dashboard</button>
    </>
  );
  /* <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Dashboard</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Login">Login</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item> 
    </Nav>*/
};

export default NavBar;
