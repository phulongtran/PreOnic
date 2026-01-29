import { Container, Row, Col, Card } from "react-bootstrap";
import "./Process.css";

const Process = () => {
  return (
    <section className="process-section">
      <Container>
        <h2 className="process-title text-center">
          Quy trình bao tiêu minh bạch
        </h2>
        <p className="process-subtitle text-center">
          Kết nối nông dân – doanh nghiệp – người tiêu dùng qua nền tảng số
        </p>

        <Row className="mt-4">
          <Col md={4}>
            <Card className="process-card">
              <div className="process-icon">🌱</div>
              <Card.Body>
                <Card.Title>Đăng ký sản xuất</Card.Title>
                <Card.Text>
                  Nông dân đăng ký mùa vụ, sản lượng và tiêu chuẩn chất lượng.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="process-card">
              <div className="process-icon">🤝</div>
              <Card.Body>
                <Card.Title>Ký cam kết bao tiêu</Card.Title>
                <Card.Text>
                  Doanh nghiệp ký hợp đồng trước mùa vụ, giá cả minh bạch.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="process-card">
              <div className="process-icon">🚚</div>
              <Card.Body>
                <Card.Title>Thu hoạch & phân phối</Card.Title>
                <Card.Text>
                  Thu hoạch đúng chuẩn, giao hàng và thanh toán an toàn.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Process;
