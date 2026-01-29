import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./Navbar.css";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="navbar-custom" sticky="top">
      <Container>
        <Navbar.Brand className="fw-bold">
          🌱 PreOnic
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mx-auto">
            <Nav.Link>Trang chủ</Nav.Link>
            <Nav.Link>Giải pháp</Nav.Link>
            <Nav.Link>Sản phẩm</Nav.Link>
            <Nav.Link>Liên hệ</Nav.Link>
          </Nav>

          <div className="d-flex gap-2">
            <Button className="navbar-login-btn">
              Đăng nhập
            </Button>
            <Button className="navbar-register-btn">
              Đăng ký
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

