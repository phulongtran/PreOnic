import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>🌱 PreOnic</h5>
            <p>Nền tảng bao tiêu nông sản minh bạch.</p>
          </Col>

          <Col md={4}>
            <h6>Liên kết</h6>
            <ul>
              <li>Trang chủ</li>
              <li>Sản phẩm</li>
              <li>Giải pháp</li>
            </ul>
          </Col>

          <Col md={4}>
            <h6>Liên hệ</h6>
            <p>Email: support@preonic.vn</p>
            <p>Hotline: 0909 999 999</p>
          </Col>
        </Row>

        <div className="footer-bottom">
          © 2026 PreOnic. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
